-- Drop the old policy that restricted it to service_role only
DROP POLICY IF EXISTS "Service role has full access to applications" ON applications;

-- Create a new policy that allows anyone (including the anon key) to insert new applications
CREATE POLICY "Allow public to submit applications" 
ON applications
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- (Optional but recommended) Allow service_role to do everything (view, delete, etc.)
CREATE POLICY "Service role full access" 
ON applications
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);
