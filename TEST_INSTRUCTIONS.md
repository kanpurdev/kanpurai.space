# Testing Duplicate Email Validation - Per Role Type

## Updated Behavior

Users can now submit **once per role type** with the same email:
- ✅ Submit as **Speaker** (once)
- ✅ Submit as **Sponsor** (once)
- ✅ Submit as **Partner** (once)
- ✅ Submit as **Volunteer** (once)

But they **cannot** submit the same role type multiple times.

## How to Test

### Test 1: Submit Different Roles with Same Email (Should Work)

1. **Open the Connect page**: `http://localhost:3000/connect`
2. **Open Browser Console**: Press `F12` > Console tab

3. **Submit as Speaker**:
   - Click the **SPEAKER** tab
   - Fill the form:
     - Name: `Test User`
     - Phone: `1234567890`
     - Email: `test@example.com`
     - Experience: `First time speaker`
     - LinkedIn: `https://linkedin.com/in/test`
   - Click "Submit Application"
   - ✅ Should succeed

4. **Submit as Sponsor** (same email):
   - Click "Submit Another"
   - Click the **SPONSOR** tab
   - Fill the form:
     - Name: `Test User`
     - Phone: `1234567890`
     - Email: `test@example.com` (SAME EMAIL!)
     - Company: `Test Company`
     - Website: `https://test.com`
     - LinkedIn: `https://linkedin.com/company/test`
   - Click "Submit Application"
   - ✅ Should succeed (different role type)

5. **Submit as Partner** (same email):
   - Click "Submit Another"
   - Click the **PARTNER** tab
   - Fill with same email: `test@example.com`
   - ✅ Should succeed (different role type)

6. **Submit as Volunteer** (same email):
   - Click "Submit Another"
   - Click the **VOLUNTEER** tab
   - Fill with same email: `test@example.com`
   - ✅ Should succeed (different role type)

### Test 2: Submit Same Role Twice (Should Fail)

1. **Try submitting Speaker again**:
   - Click "Submit Another"
   - Click the **SPEAKER** tab
   - Fill the form with the SAME email: `test@example.com`
   - Click "Submit Application"
   - ❌ Should show error: **"You have already submitted the speaker form. Multiple submissions for the same role are not allowed."**

2. **Console should show**:
   ```
   🚫 Duplicate submission found for: speaker with email: test@example.com
   ```

## Expected Console Logs

### First submission (Speaker):
```
=== FORM SUBMISSION STARTED ===
Form Type: speaker
Email to check: test@example.com
Querying connect_submissions table for email: test@example.com and type: speaker
Query completed
Check Error: null
Existing Submission: null
✅ No duplicate found for this role, proceeding with insertion
✅ Submission successful!
=== FORM SUBMISSION ENDED ===
```

### Second submission (Sponsor - same email, different role):
```
=== FORM SUBMISSION STARTED ===
Form Type: sponsor
Email to check: test@example.com
Querying connect_submissions table for email: test@example.com and type: sponsor
Query completed
Check Error: null
Existing Submission: null
✅ No duplicate found for this role, proceeding with insertion
✅ Submission successful!
=== FORM SUBMISSION ENDED ===
```

### Third submission (Speaker again - should fail):
```
=== FORM SUBMISSION STARTED ===
Form Type: speaker
Email to check: test@example.com
Querying connect_submissions table for email: test@example.com and type: speaker
Query completed
Check Error: null
Existing Submission: { email: "test@example.com", type: "speaker" }
🚫 Duplicate submission found for: speaker with email: test@example.com
=== FORM SUBMISSION ENDED ===
```

## Summary

- ✅ One email can apply for all 4 roles (speaker, sponsor, partner, volunteer)
- ❌ One email cannot apply for the same role twice
- Each role type is tracked independently

## Don't Forget!

You still need to apply the database fix from `FIX_DUPLICATE_CHECK.md` to add the SELECT policy for the duplicate check to work!
