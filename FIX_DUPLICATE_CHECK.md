# Fix for Duplicate Email Check Not Working

## Problem Identified

The duplicate email validation wasn't working because the `connect_submissions` table has Row Level Security (RLS) enabled, but there's **NO SELECT policy** for anonymous users. This means:

- ✅ Anonymous users CAN insert records (first policy exists)
- ❌ Anonymous users CANNOT read/select records (no policy)
- ❌ The duplicate check query fails silently because it can't read the table

## Solution

You need to add a SELECT policy to allow anonymous users to read from the table for duplicate checking.

## How to Fix

### Option 1: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Navigate to **Authentication > Policies**
3. Find the `connect_submissions` table
4. Click **"New Policy"**
5. Select **"For full customization"**
6. Configure the policy:
   - **Policy name**: `Allow public read for duplicate check`
   - **Allowed operation**: `SELECT`
   - **Target roles**: `anon`
   - **USING expression**: `true`
7. Click **"Review"** then **"Save policy"**

### Option 2: Using SQL Editor

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **"New query"**
4. Paste this SQL:

```sql
CREATE POLICY "Allow public read for duplicate check"
ON public.connect_submissions
FOR SELECT
TO anon
USING (true);
```

5. Click **"Run"**

### Option 3: Using Supabase CLI (if you have it installed)

```bash
# Install Supabase CLI first (if not installed)
brew install supabase/tap/supabase

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Run the migration
supabase db push
```

## Verify the Fix

After applying the policy:

1. Open http://localhost:3000/connect
2. Open browser console (F12)
3. Fill out the speaker form with a test email
4. Submit the form (should succeed)
5. Try submitting again with the SAME email
6. You should see:
   - Console log: `🚫 Duplicate email found: your@email.com`
   - Error message on screen: "You have already submitted feedback. Multiple submissions are not allowed."

## Alternative: Disable RLS (Not Recommended for Production)

If you want to quickly test without RLS:

```sql
ALTER TABLE public.connect_submissions DISABLE ROW LEVEL SECURITY;
```

⚠️ **Warning**: This removes all security and allows anyone to read/write all data. Only use for testing!

## Migration File

I've created the migration file at:
`/Users/samarth/Developer/knp/supabase/migrations/20260121_add_select_policy.sql`

This will be automatically applied if you use Supabase CLI or you can run it manually in the SQL editor.
