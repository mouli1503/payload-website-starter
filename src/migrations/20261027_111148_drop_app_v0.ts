import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_image_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_slider_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_slider" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_scroller_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_image_scroller" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_spacer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_video" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_quick_pick_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_quick_pick" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_product_scroller" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_reorder" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_widget" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_tab_bar_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_tab_bar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_slider_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_slider" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_scroller_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_image_scroller" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_spacer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_video" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_quick_pick_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_quick_pick" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_product_scroller" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_reorder" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_widget" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_tab_bar_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_tab_bar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_toolbar_icons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_toolbar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_address_bar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_search_bar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_image_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts_blocks_spacer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "layouts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "navigation_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "navigation" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_image_banner" CASCADE;
  DROP TABLE "pages_blocks_grid_items" CASCADE;
  DROP TABLE "pages_blocks_grid" CASCADE;
  DROP TABLE "pages_blocks_image_slider_items" CASCADE;
  DROP TABLE "pages_blocks_image_slider" CASCADE;
  DROP TABLE "pages_blocks_image_scroller_items" CASCADE;
  DROP TABLE "pages_blocks_image_scroller" CASCADE;
  DROP TABLE "pages_blocks_spacer" CASCADE;
  DROP TABLE "pages_blocks_video" CASCADE;
  DROP TABLE "pages_blocks_quick_pick_items" CASCADE;
  DROP TABLE "pages_blocks_quick_pick" CASCADE;
  DROP TABLE "pages_blocks_product_scroller" CASCADE;
  DROP TABLE "pages_blocks_reorder" CASCADE;
  DROP TABLE "pages_blocks_widget" CASCADE;
  DROP TABLE "pages_blocks_tab_bar_items" CASCADE;
  DROP TABLE "pages_blocks_tab_bar" CASCADE;
  DROP TABLE "_pages_v_blocks_image_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_grid_items" CASCADE;
  DROP TABLE "_pages_v_blocks_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_image_slider_items" CASCADE;
  DROP TABLE "_pages_v_blocks_image_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_image_scroller_items" CASCADE;
  DROP TABLE "_pages_v_blocks_image_scroller" CASCADE;
  DROP TABLE "_pages_v_blocks_spacer" CASCADE;
  DROP TABLE "_pages_v_blocks_video" CASCADE;
  DROP TABLE "_pages_v_blocks_quick_pick_items" CASCADE;
  DROP TABLE "_pages_v_blocks_quick_pick" CASCADE;
  DROP TABLE "_pages_v_blocks_product_scroller" CASCADE;
  DROP TABLE "_pages_v_blocks_reorder" CASCADE;
  DROP TABLE "_pages_v_blocks_widget" CASCADE;
  DROP TABLE "_pages_v_blocks_tab_bar_items" CASCADE;
  DROP TABLE "_pages_v_blocks_tab_bar" CASCADE;
  DROP TABLE "layouts_blocks_toolbar_icons" CASCADE;
  DROP TABLE "layouts_blocks_toolbar" CASCADE;
  DROP TABLE "layouts_blocks_address_bar" CASCADE;
  DROP TABLE "layouts_blocks_search_bar" CASCADE;
  DROP TABLE "layouts_blocks_image_banner" CASCADE;
  DROP TABLE "layouts_blocks_spacer" CASCADE;
  DROP TABLE "layouts" CASCADE;
  DROP TABLE "navigation_tabs" CASCADE;
  DROP TABLE "navigation" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_layouts_fk";
  
  DROP INDEX "payload_locked_documents_rels_layouts_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "layouts_id";
  DROP TYPE "public"."enum_pages_blocks_image_banner_image_action_type";
  DROP TYPE "public"."enum_pages_blocks_image_banner_image_visibility_audience";
  DROP TYPE "public"."enum_st_vis_qc";
  DROP TYPE "public"."enum_pages_blocks_image_banner_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_grid_items_action_type";
  DROP TYPE "public"."enum_pages_blocks_grid_items_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_grid_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_image_slider_items_action_type";
  DROP TYPE "public"."enum_pages_blocks_image_slider_items_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_image_slider_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_image_scroller_items_action_type";
  DROP TYPE "public"."enum_pages_blocks_image_scroller_items_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_image_scroller_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_spacer_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_video_action_type";
  DROP TYPE "public"."enum_pages_blocks_video_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_quick_pick_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_product_scroller_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_reorder_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_widget_visibility_audience";
  DROP TYPE "public"."enum_pages_blocks_tab_bar_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_image_banner_image_action_type";
  DROP TYPE "public"."enum__pages_v_blocks_image_banner_image_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_image_banner_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_grid_items_action_type";
  DROP TYPE "public"."enum__pages_v_blocks_grid_items_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_grid_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_image_slider_items_action_type";
  DROP TYPE "public"."enum__pages_v_blocks_image_slider_items_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_image_slider_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_image_scroller_items_action_type";
  DROP TYPE "public"."enum__pages_v_blocks_image_scroller_items_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_image_scroller_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_spacer_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_video_action_type";
  DROP TYPE "public"."enum__pages_v_blocks_video_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_quick_pick_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_product_scroller_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_reorder_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_widget_visibility_audience";
  DROP TYPE "public"."enum__pages_v_blocks_tab_bar_visibility_audience";
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

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_image_banner_image_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum_pages_blocks_image_banner_image_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_st_vis_qc" AS ENUM('any', 'enabled', 'disabled');
  CREATE TYPE "public"."enum_pages_blocks_image_banner_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_grid_items_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum_pages_blocks_grid_items_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_grid_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_image_slider_items_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum_pages_blocks_image_slider_items_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_image_slider_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_image_scroller_items_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum_pages_blocks_image_scroller_items_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_image_scroller_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_spacer_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_video_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum_pages_blocks_video_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_quick_pick_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_product_scroller_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_reorder_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_widget_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_pages_blocks_tab_bar_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_image_banner_image_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum__pages_v_blocks_image_banner_image_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_image_banner_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_grid_items_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum__pages_v_blocks_grid_items_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_grid_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_image_slider_items_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum__pages_v_blocks_image_slider_items_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_image_slider_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_image_scroller_items_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum__pages_v_blocks_image_scroller_items_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_image_scroller_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_spacer_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_video_action_type" AS ENUM('openPage', 'openCollection', 'openProduct');
  CREATE TYPE "public"."enum__pages_v_blocks_video_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_quick_pick_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_product_scroller_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_reorder_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_widget_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum__pages_v_blocks_tab_bar_visibility_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
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
  CREATE TABLE "pages_blocks_image_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_image_url" varchar,
  	"image_width" numeric,
  	"image_height" numeric,
  	"image_action_type" "enum_pages_blocks_image_banner_image_action_type",
  	"image_action_target" varchar,
  	"image_action_title" varchar,
  	"image_visibility_audience" "enum_pages_blocks_image_banner_image_visibility_audience" DEFAULT 'all',
  	"image_visibility_tags" varchar,
  	"image_visibility_match_all_tags" boolean DEFAULT false,
  	"image_visibility_exclude_tags" varchar,
  	"image_visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"image_visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"image_visibility_starts_at" timestamp(3) with time zone,
  	"image_visibility_ends_at" timestamp(3) with time zone,
  	"image_analytics_id" varchar,
  	"visibility_audience" "enum_pages_blocks_image_banner_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_pages_blocks_grid_items_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"visibility_audience" "enum_pages_blocks_grid_items_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "pages_blocks_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" numeric DEFAULT 2,
  	"gap" boolean DEFAULT false,
  	"visibility_audience" "enum_pages_blocks_grid_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_image_slider_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_pages_blocks_image_slider_items_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"visibility_audience" "enum_pages_blocks_image_slider_items_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "pages_blocks_image_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_pagination" boolean DEFAULT true,
  	"visibility_audience" "enum_pages_blocks_image_slider_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_image_scroller_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_pages_blocks_image_scroller_items_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"visibility_audience" "enum_pages_blocks_image_scroller_items_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "pages_blocks_image_scroller" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"height" numeric,
  	"gap" numeric DEFAULT 0,
  	"visibility_audience" "enum_pages_blocks_image_scroller_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_spacer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"height" numeric,
  	"visibility_audience" "enum_pages_blocks_spacer_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_url" varchar,
  	"poster_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_pages_blocks_video_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"analytics_id" varchar,
  	"visibility_audience" "enum_pages_blocks_video_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_quick_pick_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"active_image_url" varchar,
  	"inactive_image_url" varchar,
  	"page_id" varchar,
  	"label" varchar,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "pages_blocks_quick_pick" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_width" numeric,
  	"item_height" numeric,
  	"item_gap" numeric,
  	"visibility_audience" "enum_pages_blocks_quick_pick_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_product_scroller" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"collection_id" varchar,
  	"title" varchar,
  	"visibility_audience" "enum_pages_blocks_product_scroller_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_reorder" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_text" varchar,
  	"visibility_audience" "enum_pages_blocks_reorder_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_widget" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" varchar,
  	"config" jsonb,
  	"visibility_audience" "enum_pages_blocks_widget_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "pages_blocks_tab_bar_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"page_id" varchar,
  	"icon_url" varchar,
  	"is_all" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_tab_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"visibility_audience" "enum_pages_blocks_tab_bar_visibility_audience" DEFAULT 'all',
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
  
  CREATE TABLE "_pages_v_blocks_image_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_image_url" varchar,
  	"image_width" numeric,
  	"image_height" numeric,
  	"image_action_type" "enum__pages_v_blocks_image_banner_image_action_type",
  	"image_action_target" varchar,
  	"image_action_title" varchar,
  	"image_visibility_audience" "enum__pages_v_blocks_image_banner_image_visibility_audience" DEFAULT 'all',
  	"image_visibility_tags" varchar,
  	"image_visibility_match_all_tags" boolean DEFAULT false,
  	"image_visibility_exclude_tags" varchar,
  	"image_visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"image_visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"image_visibility_starts_at" timestamp(3) with time zone,
  	"image_visibility_ends_at" timestamp(3) with time zone,
  	"image_analytics_id" varchar,
  	"visibility_audience" "enum__pages_v_blocks_image_banner_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum__pages_v_blocks_grid_items_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"visibility_audience" "enum__pages_v_blocks_grid_items_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"columns" numeric DEFAULT 2,
  	"gap" boolean DEFAULT false,
  	"visibility_audience" "enum__pages_v_blocks_grid_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_slider_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum__pages_v_blocks_image_slider_items_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"visibility_audience" "enum__pages_v_blocks_image_slider_items_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_pagination" boolean DEFAULT true,
  	"visibility_audience" "enum__pages_v_blocks_image_slider_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_scroller_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum__pages_v_blocks_image_scroller_items_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"visibility_audience" "enum__pages_v_blocks_image_scroller_items_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_scroller" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"height" numeric,
  	"gap" numeric DEFAULT 0,
  	"visibility_audience" "enum__pages_v_blocks_image_scroller_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_spacer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"height" numeric,
  	"visibility_audience" "enum__pages_v_blocks_spacer_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"video_url" varchar,
  	"poster_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum__pages_v_blocks_video_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"analytics_id" varchar,
  	"visibility_audience" "enum__pages_v_blocks_video_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_quick_pick_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"active_image_url" varchar,
  	"inactive_image_url" varchar,
  	"page_id" varchar,
  	"label" varchar,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_quick_pick" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item_width" numeric,
  	"item_height" numeric,
  	"item_gap" numeric,
  	"visibility_audience" "enum__pages_v_blocks_quick_pick_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_product_scroller" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"collection_id" varchar,
  	"title" varchar,
  	"visibility_audience" "enum__pages_v_blocks_product_scroller_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_reorder" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_text" varchar,
  	"visibility_audience" "enum__pages_v_blocks_reorder_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_widget" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" varchar,
  	"config" jsonb,
  	"visibility_audience" "enum__pages_v_blocks_widget_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_tab_bar_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"page_id" varchar,
  	"icon_url" varchar,
  	"is_all" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_tab_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"visibility_audience" "enum__pages_v_blocks_tab_bar_visibility_audience" DEFAULT 'all',
  	"visibility_tags" varchar,
  	"visibility_match_all_tags" boolean DEFAULT false,
  	"visibility_exclude_tags" varchar,
  	"visibility_match_all_exclude_tags" boolean DEFAULT false,
  	"visibility_quick_commerce" "enum_st_vis_qc" DEFAULT 'any',
  	"visibility_starts_at" timestamp(3) with time zone,
  	"visibility_ends_at" timestamp(3) with time zone,
  	"background_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
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
  ALTER TABLE "pages_blocks_image_banner" ADD CONSTRAINT "pages_blocks_image_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_grid_items" ADD CONSTRAINT "pages_blocks_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_grid" ADD CONSTRAINT "pages_blocks_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_slider_items" ADD CONSTRAINT "pages_blocks_image_slider_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_slider" ADD CONSTRAINT "pages_blocks_image_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_scroller_items" ADD CONSTRAINT "pages_blocks_image_scroller_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_scroller"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_scroller" ADD CONSTRAINT "pages_blocks_image_scroller_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_spacer" ADD CONSTRAINT "pages_blocks_spacer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_video" ADD CONSTRAINT "pages_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quick_pick_items" ADD CONSTRAINT "pages_blocks_quick_pick_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_quick_pick"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quick_pick" ADD CONSTRAINT "pages_blocks_quick_pick_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_product_scroller" ADD CONSTRAINT "pages_blocks_product_scroller_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reorder" ADD CONSTRAINT "pages_blocks_reorder_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_widget" ADD CONSTRAINT "pages_blocks_widget_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tab_bar_items" ADD CONSTRAINT "pages_blocks_tab_bar_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tab_bar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_tab_bar" ADD CONSTRAINT "pages_blocks_tab_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_banner" ADD CONSTRAINT "_pages_v_blocks_image_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_grid_items" ADD CONSTRAINT "_pages_v_blocks_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_grid" ADD CONSTRAINT "_pages_v_blocks_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_slider_items" ADD CONSTRAINT "_pages_v_blocks_image_slider_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_slider"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_slider" ADD CONSTRAINT "_pages_v_blocks_image_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_scroller_items" ADD CONSTRAINT "_pages_v_blocks_image_scroller_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_scroller"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_scroller" ADD CONSTRAINT "_pages_v_blocks_image_scroller_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_spacer" ADD CONSTRAINT "_pages_v_blocks_spacer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_video" ADD CONSTRAINT "_pages_v_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quick_pick_items" ADD CONSTRAINT "_pages_v_blocks_quick_pick_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_quick_pick"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quick_pick" ADD CONSTRAINT "_pages_v_blocks_quick_pick_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_product_scroller" ADD CONSTRAINT "_pages_v_blocks_product_scroller_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_reorder" ADD CONSTRAINT "_pages_v_blocks_reorder_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_widget" ADD CONSTRAINT "_pages_v_blocks_widget_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tab_bar_items" ADD CONSTRAINT "_pages_v_blocks_tab_bar_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_tab_bar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tab_bar" ADD CONSTRAINT "_pages_v_blocks_tab_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_toolbar_icons" ADD CONSTRAINT "layouts_blocks_toolbar_icons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts_blocks_toolbar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_toolbar" ADD CONSTRAINT "layouts_blocks_toolbar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_address_bar" ADD CONSTRAINT "layouts_blocks_address_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_search_bar" ADD CONSTRAINT "layouts_blocks_search_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_image_banner" ADD CONSTRAINT "layouts_blocks_image_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts_blocks_spacer" ADD CONSTRAINT "layouts_blocks_spacer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layouts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layouts" ADD CONSTRAINT "layouts_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "navigation_tabs" ADD CONSTRAINT "navigation_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_image_banner_order_idx" ON "pages_blocks_image_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_banner_parent_id_idx" ON "pages_blocks_image_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_banner_path_idx" ON "pages_blocks_image_banner" USING btree ("_path");
  CREATE INDEX "pages_blocks_grid_items_order_idx" ON "pages_blocks_grid_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_grid_items_parent_id_idx" ON "pages_blocks_grid_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_grid_order_idx" ON "pages_blocks_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_grid_parent_id_idx" ON "pages_blocks_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_grid_path_idx" ON "pages_blocks_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_slider_items_order_idx" ON "pages_blocks_image_slider_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_slider_items_parent_id_idx" ON "pages_blocks_image_slider_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_slider_order_idx" ON "pages_blocks_image_slider" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_slider_parent_id_idx" ON "pages_blocks_image_slider" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_slider_path_idx" ON "pages_blocks_image_slider" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_scroller_items_order_idx" ON "pages_blocks_image_scroller_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_scroller_items_parent_id_idx" ON "pages_blocks_image_scroller_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_scroller_order_idx" ON "pages_blocks_image_scroller" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_scroller_parent_id_idx" ON "pages_blocks_image_scroller" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_scroller_path_idx" ON "pages_blocks_image_scroller" USING btree ("_path");
  CREATE INDEX "pages_blocks_spacer_order_idx" ON "pages_blocks_spacer" USING btree ("_order");
  CREATE INDEX "pages_blocks_spacer_parent_id_idx" ON "pages_blocks_spacer" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_spacer_path_idx" ON "pages_blocks_spacer" USING btree ("_path");
  CREATE INDEX "pages_blocks_video_order_idx" ON "pages_blocks_video" USING btree ("_order");
  CREATE INDEX "pages_blocks_video_parent_id_idx" ON "pages_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_video_path_idx" ON "pages_blocks_video" USING btree ("_path");
  CREATE INDEX "pages_blocks_quick_pick_items_order_idx" ON "pages_blocks_quick_pick_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_quick_pick_items_parent_id_idx" ON "pages_blocks_quick_pick_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quick_pick_order_idx" ON "pages_blocks_quick_pick" USING btree ("_order");
  CREATE INDEX "pages_blocks_quick_pick_parent_id_idx" ON "pages_blocks_quick_pick" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quick_pick_path_idx" ON "pages_blocks_quick_pick" USING btree ("_path");
  CREATE INDEX "pages_blocks_product_scroller_order_idx" ON "pages_blocks_product_scroller" USING btree ("_order");
  CREATE INDEX "pages_blocks_product_scroller_parent_id_idx" ON "pages_blocks_product_scroller" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_product_scroller_path_idx" ON "pages_blocks_product_scroller" USING btree ("_path");
  CREATE INDEX "pages_blocks_reorder_order_idx" ON "pages_blocks_reorder" USING btree ("_order");
  CREATE INDEX "pages_blocks_reorder_parent_id_idx" ON "pages_blocks_reorder" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reorder_path_idx" ON "pages_blocks_reorder" USING btree ("_path");
  CREATE INDEX "pages_blocks_widget_order_idx" ON "pages_blocks_widget" USING btree ("_order");
  CREATE INDEX "pages_blocks_widget_parent_id_idx" ON "pages_blocks_widget" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_widget_path_idx" ON "pages_blocks_widget" USING btree ("_path");
  CREATE INDEX "pages_blocks_tab_bar_items_order_idx" ON "pages_blocks_tab_bar_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_tab_bar_items_parent_id_idx" ON "pages_blocks_tab_bar_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tab_bar_order_idx" ON "pages_blocks_tab_bar" USING btree ("_order");
  CREATE INDEX "pages_blocks_tab_bar_parent_id_idx" ON "pages_blocks_tab_bar" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_tab_bar_path_idx" ON "pages_blocks_tab_bar" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_banner_order_idx" ON "_pages_v_blocks_image_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_banner_parent_id_idx" ON "_pages_v_blocks_image_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_banner_path_idx" ON "_pages_v_blocks_image_banner" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_grid_items_order_idx" ON "_pages_v_blocks_grid_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_grid_items_parent_id_idx" ON "_pages_v_blocks_grid_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_grid_order_idx" ON "_pages_v_blocks_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_grid_parent_id_idx" ON "_pages_v_blocks_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_grid_path_idx" ON "_pages_v_blocks_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_slider_items_order_idx" ON "_pages_v_blocks_image_slider_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_slider_items_parent_id_idx" ON "_pages_v_blocks_image_slider_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_slider_order_idx" ON "_pages_v_blocks_image_slider" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_slider_parent_id_idx" ON "_pages_v_blocks_image_slider" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_slider_path_idx" ON "_pages_v_blocks_image_slider" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_scroller_items_order_idx" ON "_pages_v_blocks_image_scroller_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_scroller_items_parent_id_idx" ON "_pages_v_blocks_image_scroller_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_scroller_order_idx" ON "_pages_v_blocks_image_scroller" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_scroller_parent_id_idx" ON "_pages_v_blocks_image_scroller" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_scroller_path_idx" ON "_pages_v_blocks_image_scroller" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_spacer_order_idx" ON "_pages_v_blocks_spacer" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_spacer_parent_id_idx" ON "_pages_v_blocks_spacer" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_spacer_path_idx" ON "_pages_v_blocks_spacer" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_video_order_idx" ON "_pages_v_blocks_video" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_video_parent_id_idx" ON "_pages_v_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_video_path_idx" ON "_pages_v_blocks_video" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_quick_pick_items_order_idx" ON "_pages_v_blocks_quick_pick_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_quick_pick_items_parent_id_idx" ON "_pages_v_blocks_quick_pick_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_quick_pick_order_idx" ON "_pages_v_blocks_quick_pick" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_quick_pick_parent_id_idx" ON "_pages_v_blocks_quick_pick" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_quick_pick_path_idx" ON "_pages_v_blocks_quick_pick" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_product_scroller_order_idx" ON "_pages_v_blocks_product_scroller" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_product_scroller_parent_id_idx" ON "_pages_v_blocks_product_scroller" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_product_scroller_path_idx" ON "_pages_v_blocks_product_scroller" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_reorder_order_idx" ON "_pages_v_blocks_reorder" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_reorder_parent_id_idx" ON "_pages_v_blocks_reorder" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_reorder_path_idx" ON "_pages_v_blocks_reorder" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_widget_order_idx" ON "_pages_v_blocks_widget" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_widget_parent_id_idx" ON "_pages_v_blocks_widget" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_widget_path_idx" ON "_pages_v_blocks_widget" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_tab_bar_items_order_idx" ON "_pages_v_blocks_tab_bar_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tab_bar_items_parent_id_idx" ON "_pages_v_blocks_tab_bar_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tab_bar_order_idx" ON "_pages_v_blocks_tab_bar" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tab_bar_parent_id_idx" ON "_pages_v_blocks_tab_bar" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tab_bar_path_idx" ON "_pages_v_blocks_tab_bar" USING btree ("_path");
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
