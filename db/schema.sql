-- Nest Student Housing ERP PostgreSQL Schema

create extension if not exists "pgcrypto";

create type user_role as enum (
  'student',
  'broker',
  'owner',
  'manager',
  'maintenance',
  'security',
  'accountant'
);

create type room_status as enum ('occupied', 'vacant', 'maintenance', 'reserved');
create type ticket_priority as enum ('low', 'medium', 'high', 'critical');
create type ticket_status as enum ('created', 'assigned', 'accepted', 'in_progress', 'completed', 'student_feedback', 'escalated');
create type lead_stage as enum ('new_inquiry', 'contacted', 'visit_scheduled', 'visited', 'negotiation', 'booked', 'moved_in');

create table app_user (
  id uuid primary key default gen_random_uuid(),
  role user_role not null,
  full_name text not null,
  email text unique not null,
  phone text,
  created_at timestamptz not null default now()
);

create table owner_profile (
  user_id uuid primary key references app_user(id) on delete cascade,
  pan_number text,
  gst_number text
);

create table property (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references app_user(id),
  broker_id uuid not null references app_user(id),
  name text not null,
  address text not null,
  city text not null,
  latitude numeric(10, 7),
  longitude numeric(10, 7),
  distance_from_gate_km numeric(5, 2),
  rent_min_inr integer not null,
  rent_max_inr integer not null,
  deposit_inr integer not null,
  gender_policy text not null,
  food_details text,
  laundry_available boolean not null default false,
  house_rules text,
  created_at timestamptz not null default now()
);

create table property_media (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references property(id) on delete cascade,
  media_type text not null check (media_type in ('image', 'video')),
  media_url text not null,
  sort_order integer not null default 0
);

create table amenity (
  id uuid primary key default gen_random_uuid(),
  name text unique not null
);

create table property_amenity (
  property_id uuid not null references property(id) on delete cascade,
  amenity_id uuid not null references amenity(id) on delete cascade,
  primary key (property_id, amenity_id)
);

create table room (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references property(id) on delete cascade,
  room_number text not null,
  sharing_type text not null,
  status room_status not null,
  electricity_meter_number text,
  unique (property_id, room_number)
);

create table room_inventory_item (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references room(id) on delete cascade,
  item_name text not null,
  quantity integer not null default 1,
  condition_notes text,
  last_inspection_at timestamptz
);

create table booking (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references app_user(id),
  room_id uuid not null references room(id),
  broker_id uuid not null references app_user(id),
  hold_expires_at timestamptz,
  booking_status text not null,
  move_in_date date,
  move_out_date date,
  rent_inr integer not null,
  deposit_inr integer not null,
  created_at timestamptz not null default now()
);

create table agreement (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null unique references booking(id) on delete cascade,
  agreement_start date not null,
  agreement_end date not null,
  pdf_url text,
  signed_at timestamptz
);

create table maintenance_ticket (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references booking(id),
  property_id uuid not null references property(id),
  room_id uuid references room(id),
  title text not null,
  category text not null,
  priority ticket_priority not null,
  status ticket_status not null default 'created',
  assigned_to uuid references app_user(id),
  created_by uuid not null references app_user(id),
  sla_due_at timestamptz,
  resolved_at timestamptz,
  rating integer check (rating between 1 and 5),
  created_at timestamptz not null default now()
);

create table ticket_timeline (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid not null references maintenance_ticket(id) on delete cascade,
  status ticket_status not null,
  notes text,
  created_by uuid references app_user(id),
  created_at timestamptz not null default now()
);

create table visit_pass (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references app_user(id),
  visitor_name text not null,
  relation text,
  valid_from timestamptz not null,
  valid_to timestamptz not null,
  qr_token text unique not null,
  verified_by uuid references app_user(id),
  verified_at timestamptz
);

create table billing_invoice (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references booking(id),
  month_key text not null,
  rent_inr integer not null,
  electricity_inr integer not null default 0,
  water_inr integer not null default 0,
  maintenance_inr integer not null default 0,
  balance_inr integer not null,
  due_date date not null,
  paid_at timestamptz,
  receipt_url text,
  unique (booking_id, month_key)
);

create table broker_lead (
  id uuid primary key default gen_random_uuid(),
  broker_id uuid not null references app_user(id),
  student_name text not null,
  phone text,
  source text not null,
  query text not null,
  stage lead_stage not null default 'new_inquiry',
  created_at timestamptz not null default now()
);

create index idx_property_city on property(city);
create index idx_room_property_status on room(property_id, status);
create index idx_ticket_property_status on maintenance_ticket(property_id, status);
create index idx_booking_student on booking(student_id);
create index idx_invoice_due_date on billing_invoice(due_date);
