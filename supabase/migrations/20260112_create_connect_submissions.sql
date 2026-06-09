-- Create table for Connect submissions
CREATE TABLE IF NOT EXISTS public.connect_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('speaker', 'sponsor', 'partner', 'volunteer')),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    
    -- Specific fields (nullable)
    experience_level TEXT, -- for speaker
    company_name TEXT, -- for sponsor
    website TEXT, -- for sponsor/partner
    linkedin TEXT, -- for all
    organization_type TEXT, -- for partner
    student_type TEXT, -- for volunteer
    
    status TEXT DEFAULT 'pending' NOT NULL
);

-- Enable RLS
ALTER TABLE public.connect_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public insert (anon)
CREATE POLICY "Allow public insert to connect_submissions"
ON public.connect_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy: Allow admins to view (auth) - assuming basic auth logic or admin role
-- For now, we will just allow authenticated users to view for simplicity, or specific admin emails if needed.
-- But the prompt didn't specify admin panel updates, just submission.
-- Ensuring at least anon can insert is key.



CREATE TABLE volunteers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  avatar TEXT NOT NULL,
  role TEXT NOT NULL,
  feedback TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE POLICY "Allow public read access"
ON volunteers FOR SELECT
TO public
USING (is_active = true);

CREATE POLICY "Allow public insert"
ON volunteers FOR INSERT
TO public
WITH CHECK (true);