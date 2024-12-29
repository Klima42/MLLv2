/*
  # Create registrations table

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `parent_last_name` (text)
      - `parent_first_name` (text)
      - `email` (text)
      - `phone` (text)
      - `child_last_name` (text)
      - `child_first_name` (text)
      - `birth_date` (date)
      - `start_date` (date)
      - `comments` (text, nullable)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `registrations` table
    - Add policy for public insert access
    - Add policy for admin read access
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_last_name text NOT NULL,
  parent_first_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  child_last_name text NOT NULL,
  child_first_name text NOT NULL,
  birth_date date NOT NULL,
  start_date date NOT NULL,
  comments text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert registrations
CREATE POLICY "Allow public insert access"
  ON registrations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only allow authenticated users with admin role to read registrations
CREATE POLICY "Allow admin read access"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');