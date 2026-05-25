create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  full_name text,
  email text,
  phone text,
  avatar_url text,

  primary key (id)
);

-- Grant the privileges the roles need
GRANT SELECT ON public.profiles TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO service_role;

-- Enable row level security for the table
alter table public.profiles enable row level security;