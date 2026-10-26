import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_layouts_blocks_toolbar_icons_icon" AS ENUM('search', 'wishlist', 'cart', 'coins', 'referral', 'notifications', 'profile');
  CREATE TYPE "public"."enum_layouts_blocks_toolbar_icons_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum_layouts_blocks_toolbar_icons_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_layouts_blocks_toolbar_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_layouts_blocks_address_bar_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_layouts_blocks_search_bar_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_layouts_blocks_image_banner_image_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum_layouts_blocks_image_banner_image_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_layouts_blocks_image_banner_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_layouts_blocks_spacer_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_layouts_header_behavior" AS ENUM('fixed', 'collapse', 'reveal');
  CREATE TYPE "public"."enum_navigation_tabs_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TABLE "layouts_blocks_toolbar_icons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_layouts_blocks_toolbar_icons_icon" NOT NULL,
  	"action_type" "enum_layouts_blocks_toolbar_icons_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"visibility_audience" "enum_layouts_blocks_toolbar_icons_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "layouts_blocks_toolbar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_url" varchar,
  	"logo_width" numeric DEFAULT 130,
  	"logo_height" numeric DEFAULT 30,
  	"visibility_audience" "enum_layouts_blocks_toolbar_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "layouts_blocks_address_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"placeholder" varchar DEFAULT 'Deliver to: Select your location',
  	"text_color" varchar,
  	"visibility_audience" "enum_layouts_blocks_address_bar_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "layouts_blocks_search_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"placeholder" varchar,
  	"visibility_audience" "enum_layouts_blocks_search_bar_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "layouts_blocks_image_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_image_url" varchar NOT NULL,
  	"image_width" numeric,
  	"image_height" numeric,
  	"image_action_type" "enum_layouts_blocks_image_banner_image_action_type",
  	"image_action_target" varchar,
  	"image_action_title" varchar,
  	"image_visibility_audience" "enum_layouts_blocks_image_banner_image_visibility_audience" DEFAULT 'all',
  	"image_visibility_tags" varchar,
  	"image_visibility_match_all_tags" boolean DEFAULT false,
  	"image_visibility_exclude_tags" varchar,
  	"image_visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"image_visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"image_visibility_starts_at" timestamp(3) with time zone,
  	"image_visibility_ends_at" timestamp(3) with time zone,
  	"image_analytics_id" varchar,
  	"visibility_audience" "enum_layouts_blocks_image_banner_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "layouts_blocks_spacer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"height" numeric,
  	"visibility_audience" "enum_layouts_blocks_spacer_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "layouts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"title" varchar,
  	"header_behavior" "enum_layouts_header_behavior" DEFAULT 'reveal',
  	"page_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "navigation_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout_key" varchar NOT NULL,
  	"label" varchar,
  	"icon_url" varchar,
  	"active_icon_url" varchar,
  	"icon_size" numeric DEFAULT 22,
  	"visibility_audience" "enum_navigation_tabs_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"active_color" varchar,
  	"inactive_color" varchar,
  	"background_color" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "layouts_id" integer;
  ALTER TABLE "layouts_blocks_toolbar_icons" ADD CONSTRAINT "layouts_blocks_toolbar_icons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts_blocks_toolbar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_toolbar" ADD CONSTRAINT "layouts_blocks_toolbar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_address_bar" ADD CONSTRAINT "layouts_blocks_address_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_search_bar" ADD CONSTRAINT "layouts_blocks_search_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_image_banner" ADD CONSTRAINT "layouts_blocks_image_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_spacer" ADD CONSTRAINT "layouts_blocks_spacer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts" ADD CONSTRAINT "layouts_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "navigation_tabs" ADD CONSTRAINT "navigation_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "layouts_blocks_toolbar_icons_order_idx" ON "layouts_blocks_toolbar_icons" USING btree ("_order");
  CREATE INDEX "layouts_blocks_toolbar_icons_parent_id_idx" ON "layouts_blocks_toolbar_icons" USING btree ("_parent_id");
  CREATE INDEX "layouts_blocks_toolbar_order_idx" ON "layouts_blocks_toolbar" USING btree ("_order");
  CREATE INDEX "layouts_blocks_toolbar_parent_id_idx" ON "layouts_blocks_toolbar" USING btree ("_parent_id");
  CREATE INDEX "layouts_blocks_toolbar_path_idx" ON "layouts_blocks_toolbar" USING btree ("_path");
  CREATE INDEX "layouts_blocks_address_bar_order_idx" ON "layouts_blocks_address_bar" USING btree ("_order");
  CREATE INDEX "layouts_blocks_address_bar_parent_id_idx" ON "layouts_blocks_address_bar" USING btree ("_parent_id");
  CREATE INDEX "layouts_blocks_address_bar_path_idx" ON "layouts_blocks_address_bar" USING btree ("_path");
  CREATE INDEX "layouts_blocks_search_bar_order_idx" ON "layouts_blocks_search_bar" USING btree ("_order");
  CREATE INDEX "layouts_blocks_search_bar_parent_id_idx" ON "layouts_blocks_search_bar" USING btree ("_parent_id");
  CREATE INDEX "layouts_blocks_search_bar_path_idx" ON "layouts_blocks_search_bar" USING btree ("_path");
  CREATE INDEX "layouts_blocks_image_banner_order_idx" ON "layouts_blocks_image_banner" USING btree ("_order");
  CREATE INDEX "layouts_blocks_image_banner_parent_id_idx" ON "layouts_blocks_image_banner" USING btree ("_parent_id");
  CREATE INDEX "layouts_blocks_image_banner_path_idx" ON "layouts_blocks_image_banner" USING btree ("_path");
  CREATE INDEX "layouts_blocks_spacer_order_idx" ON "layouts_blocks_spacer" USING btree ("_order");
  CREATE INDEX "layouts_blocks_spacer_parent_id_idx" ON "layouts_blocks_spacer" USING btree ("_parent_id");
  CREATE INDEX "layouts_blocks_spacer_path_idx" ON "layouts_blocks_spacer" USING btree ("_path");
  CREATE UNIQUE INDEX "layouts_key_idx" ON "layouts" USING btree ("key");
  CREATE INDEX "layouts_page_idx" ON "layouts" USING btree ("page_id");
  CREATE INDEX "layouts_updated_at_idx" ON "layouts" USING btree ("updated_at");
  CREATE INDEX "layouts_created_at_idx" ON "layouts" USING btree ("created_at");
  CREATE INDEX "navigation_tabs_order_idx" ON "navigation_tabs" USING btree ("_order");
  CREATE INDEX "navigation_tabs_parent_id_idx" ON "navigation_tabs" USING btree ("_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_layouts_fk" FOREIGN KEY ("layouts_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_layouts_id_idx" ON "payload_locked_documents_rels" USING btree ("layouts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "layouts_blocks_toolbar_icons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_toolbar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_address_bar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_search_bar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_image_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_spacer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "navigation_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "navigation" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "layouts_blocks_toolbar_icons" CASCADE;
  DROP TABLE "layouts_blocks_toolbar" CASCADE;
  DROP TABLE "layouts_blocks_address_bar" CASCADE;
  DROP TABLE "layouts_blocks_search_bar" CASCADE;
  DROP TABLE "layouts_blocks_image_banner" CASCADE;
  DROP TABLE "layouts_blocks_spacer" CASCADE;
  DROP TABLE "layouts" CASCADE;
  DROP TABLE "navigation_tabs" CASCADE;
  DROP TABLE "navigation" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_layouts_fk";
  
  DROP INDEX "payload_locked_documents_rels_layouts_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "layouts_id";
  DROP TYPE "public"."enum_layouts_blocks_toolbar_icons_icon";
  DROP TYPE "public"."enum_layouts_blocks_toolbar_icons_action_type";
  DROP TYPE "public"."enum_layouts_blocks_toolbar_icons_visibility_audience";
  DROP TYPE "public"."enum_layouts_blocks_toolbar_visibility_audience";
  DROP TYPE "public"."enum_layouts_blocks_address_bar_visibility_audience";
  DROP TYPE "public"."enum_layouts_blocks_search_bar_visibility_audience";
  DROP TYPE "public"."enum_layouts_blocks_image_banner_image_action_type";
  DROP TYPE "public"."enum_layouts_blocks_image_banner_image_visibility_audience";
  DROP TYPE "public"."enum_layouts_blocks_image_banner_visibility_audience";
  DROP TYPE "public"."enum_layouts_blocks_spacer_visibility_audience";
  DROP TYPE "public"."enum_layouts_header_behavior";
  DROP TYPE "public"."enum_navigation_tabs_visibility_audience";`)
}
