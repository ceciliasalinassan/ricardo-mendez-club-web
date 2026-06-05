
-- Club Deportivo Ricardo Méndez - Supabase V24
-- Ejecutar en Supabase SQL Editor.
create extension if not exists "pgcrypto";

create table if not exists settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

create table if not exists sponsors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text not null,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  text text,
  image text,
  date_text text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text default 'Foto',
  url text not null,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists fixture_images (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image text not null,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists standings (
  id uuid primary key default gen_random_uuid(),
  serie text not null,
  team text not null,
  pj int default 0,
  pg int default 0,
  pe int default 0,
  pp int default 0,
  gf int default 0,
  gc int default 0,
  dg text default '0',
  pts int default 0,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists results (
  id uuid primary key default gen_random_uuid(),
  date_text text,
  match text,
  score text,
  scorers text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists directors (
  id uuid primary key default gen_random_uuid(),
  role text,
  name text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists presidents (
  id uuid primary key default gen_random_uuid(),
  name text,
  period text,
  image text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists honors (
  id uuid primary key default gen_random_uuid(),
  year text,
  title text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists timeline (
  id uuid primary key default gen_random_uuid(),
  year text,
  text text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists member_requests (
  id uuid primary key default gen_random_uuid(),
  name text,
  rut text,
  phone text,
  type text,
  status text default 'pendiente',
  created_at timestamptz default now()
);

-- Storage bucket
insert into storage.buckets (id, name, public)
values ('club-assets', 'club-assets', true)
on conflict (id) do update set public = true;

-- RLS simple para sitio público con anon key.
alter table settings enable row level security;
alter table sponsors enable row level security;
alter table news enable row level security;
alter table gallery enable row level security;
alter table fixture_images enable row level security;
alter table standings enable row level security;
alter table results enable row level security;
alter table directors enable row level security;
alter table presidents enable row level security;
alter table honors enable row level security;
alter table timeline enable row level security;
alter table member_requests enable row level security;

do $$
declare
  t text;
begin
  foreach t in array array['settings','sponsors','news','gallery','fixture_images','standings','results','directors','presidents','honors','timeline','member_requests']
  loop
    execute format('drop policy if exists "public read %s" on %I', t, t);
    execute format('drop policy if exists "anon write %s" on %I', t, t);
    execute format('create policy "public read %s" on %I for select using (true)', t, t);
    execute format('create policy "anon write %s" on %I for all using (true) with check (true)', t, t);
  end loop;
end $$;

drop policy if exists "public read club assets" on storage.objects;
drop policy if exists "anon upload club assets" on storage.objects;
create policy "public read club assets" on storage.objects for select using (bucket_id = 'club-assets');
create policy "anon upload club assets" on storage.objects for insert with check (bucket_id = 'club-assets');
create policy "anon update club assets" on storage.objects for update using (bucket_id = 'club-assets') with check (bucket_id = 'club-assets');
