-- Add SELECT policy for anonymous users to check for duplicate emails
-- This allows the duplicate email validation to work

CREATE POLICY "Allow public read for duplicate check"
ON public.connect_submissions
FOR SELECT
TO anon
USING (true);
