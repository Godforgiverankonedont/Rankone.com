create extension if not exists pgcrypto;

create table if not exists public.site_settings (
  id bigint primary key default 1,
  logo_url text,
  background_url text,
  updated_at timestamptz not null default now(),
  constraint site_settings_one_row check (id = 1)
);
create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null default 'member',
  facebook text,
  avatar_url text,
  bio text,
  created_at timestamptz not null default now()
);
create table if not exists public.tracks (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  audio_url text not null,
  created_at timestamptz not null default now()
);
insert into public.site_settings (id) values (1) on conflict (id) do nothing;

alter table public.site_settings enable row level security;
alter table public.members enable row level security;
alter table public.tracks enable row level security;

create policy "public read settings" on public.site_settings for select using (true);
create policy "public read members" on public.members for select using (true);
create policy "public read tracks" on public.tracks for select using (true);

-- Do NOT add public write policies for production.
-- For secure admin writes use Supabase Auth + RLS or an Edge Function.
