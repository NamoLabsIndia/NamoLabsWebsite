-- Create applications table
CREATE TABLE applications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  linkedin text,
  github text,
  why_namo_labs text NOT NULL,
  recent_project text NOT NULL,
  role text NOT NULL,
  resume_key text,
  resume_url text,
  privacy_consent boolean DEFAULT true,
  score integer,
  notes text
);

-- Set up Row Level Security (RLS)
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Only service role can access this table directly
-- The API route uses the service role key, so it bypasses RLS
CREATE POLICY "Service role has full access to applications" 
ON applications
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);
