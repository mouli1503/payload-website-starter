import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_app_pages_blocks_image_action_type" AS ENUM('openPage', 'openCollection', 'openProduct', 'openSearch', 'openUrl');
  CREATE TYPE "public"."enum_app_anim" AS ENUM('none', 'fade', 'slideUp', 'zoom');
  CREATE TYPE "public"."enum_app_pages_blocks_image_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_qc" AS ENUM('any', 'enabled', 'disabled');
  CREATE TYPE "public"."enum_app_pages_blocks_image_grid_items_action_type" AS ENUM('openPage', 'openCollection', 'openProduct', 'openSearch', 'openUrl');
  CREATE TYPE "public"."enum_app_pages_blocks_image_grid_items_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_image_grid_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_carousel_items_action_type" AS ENUM('openPage', 'openCollection', 'openProduct', 'openSearch', 'openUrl');
  CREATE TYPE "public"."enum_app_pages_blocks_carousel_items_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_carousel_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_image_rail_items_action_type" AS ENUM('openPage', 'openCollection', 'openProduct', 'openSearch', 'openUrl');
  CREATE TYPE "public"."enum_app_pages_blocks_image_rail_items_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_image_rail_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_video_action_type" AS ENUM('openPage', 'openCollection', 'openProduct', 'openSearch', 'openUrl');
  CREATE TYPE "public"."enum_app_pages_blocks_video_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_spacer_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_text_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_app_pages_blocks_text_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_product_rail_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_reorder_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_segment_tabs_items_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_segment_tabs_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_category_tabs_items_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_category_tabs_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_pages_blocks_widget_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_screens_blocks_toolbar_icons_icon" AS ENUM('search', 'wishlist', 'cart', 'coins', 'referral', 'notifications', 'profile');
  CREATE TYPE "public"."enum_screens_blocks_toolbar_icons_action_type" AS ENUM('openPage', 'openCollection', 'openProduct', 'openSearch', 'openUrl');
  CREATE TYPE "public"."enum_screens_blocks_toolbar_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_screens_blocks_address_bar_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_screens_blocks_search_bar_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_screens_blocks_image_action_type" AS ENUM('openPage', 'openCollection', 'openProduct', 'openSearch', 'openUrl');
  CREATE TYPE "public"."enum_screens_blocks_image_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_screens_blocks_spacer_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_screens_blocks_text_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_screens_blocks_text_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TYPE "public"."enum_app_navigation_tabs_targeting_audience" AS ENUM('all', 'loggedIn', 'loggedOut');
  CREATE TABLE "app_pages_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_url" varchar NOT NULL,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_app_pages_blocks_image_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_image_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_image_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_url" varchar NOT NULL,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_app_pages_blocks_image_grid_items_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_image_grid_items_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "app_pages_blocks_image_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"columns" numeric DEFAULT 2,
  	"gap" numeric DEFAULT 0,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_image_grid_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_carousel_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_url" varchar NOT NULL,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_app_pages_blocks_carousel_items_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_carousel_items_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "app_pages_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"autoplay" boolean DEFAULT true,
  	"interval_ms" numeric DEFAULT 3500,
  	"show_dots" boolean DEFAULT true,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_carousel_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_image_rail_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_url" varchar NOT NULL,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_app_pages_blocks_image_rail_items_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_image_rail_items_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "app_pages_blocks_image_rail" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_height" numeric,
  	"gap" numeric DEFAULT 0,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_image_rail_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"video_url" varchar,
  	"poster_url" varchar,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_app_pages_blocks_video_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_video_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_spacer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"height" numeric DEFAULT 12,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_spacer_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"align" "enum_app_pages_blocks_text_align" DEFAULT 'left',
  	"font_size" numeric DEFAULT 16,
  	"bold" boolean DEFAULT false,
  	"color" varchar,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_text_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_product_rail" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"collection_id" varchar,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_product_rail_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_reorder" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_text" varchar,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_reorder_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_segment_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"icon_url" varchar,
  	"page" varchar NOT NULL,
  	"targeting_audience" "enum_app_pages_blocks_segment_tabs_items_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "app_pages_blocks_segment_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"colors_background" varchar DEFAULT '#FEF5E1',
  	"colors_active_from" varchar DEFAULT '#c62144',
  	"colors_active_to" varchar DEFAULT '#9a1a3a',
  	"colors_active_text" varchar DEFAULT '#ffffff',
  	"colors_inactive_text" varchar DEFAULT '#111827',
  	"colors_border" varchar DEFAULT '#f6ce69',
  	"sticky" boolean DEFAULT true,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_segment_tabs_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_category_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"active_image_url" varchar,
  	"inactive_image_url" varchar,
  	"page" varchar NOT NULL,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_category_tabs_items_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "app_pages_blocks_category_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_width" numeric DEFAULT 85,
  	"item_height" numeric DEFAULT 65,
  	"gap" numeric DEFAULT 0,
  	"sticky" boolean DEFAULT true,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_category_tabs_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages_blocks_widget" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" varchar NOT NULL,
  	"config" jsonb,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_app_pages_blocks_widget_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "app_pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "screens_blocks_toolbar_icons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_screens_blocks_toolbar_icons_icon" NOT NULL,
  	"action_type" "enum_screens_blocks_toolbar_icons_action_type",
  	"action_target" varchar,
  	"action_title" varchar
  );
  
  CREATE TABLE "screens_blocks_toolbar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_url" varchar,
  	"logo_width" numeric DEFAULT 130,
  	"logo_height" numeric DEFAULT 30,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_screens_blocks_toolbar_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "screens_blocks_address_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"placeholder" varchar DEFAULT 'Deliver to: Select your location',
  	"text_color" varchar,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_screens_blocks_address_bar_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "screens_blocks_search_bar_hints" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "screens_blocks_search_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sticky" boolean DEFAULT true,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_screens_blocks_search_bar_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "screens_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_url" varchar NOT NULL,
  	"width" numeric,
  	"height" numeric,
  	"action_type" "enum_screens_blocks_image_action_type",
  	"action_target" varchar,
  	"action_title" varchar,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_screens_blocks_image_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "screens_blocks_spacer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"height" numeric DEFAULT 12,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_screens_blocks_spacer_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "screens_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"align" "enum_screens_blocks_text_align" DEFAULT 'left',
  	"font_size" numeric DEFAULT 16,
  	"bold" boolean DEFAULT false,
  	"color" varchar,
  	"sticky" boolean DEFAULT false,
  	"animation" "enum_app_anim" DEFAULT 'fade',
  	"background_color" varchar,
  	"analytics_id" varchar,
  	"targeting_audience" "enum_screens_blocks_text_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone,
  	"block_name" varchar
  );
  
  CREATE TABLE "screens" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"title" varchar,
  	"body_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "app_navigation_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"screen" varchar NOT NULL,
  	"label" varchar,
  	"icon_url" varchar,
  	"active_icon_url" varchar,
  	"icon_size" numeric DEFAULT 22,
  	"targeting_audience" "enum_app_navigation_tabs_targeting_audience" DEFAULT 'all',
  	"targeting_include_tags" varchar,
  	"targeting_match_all_include" boolean DEFAULT false,
  	"targeting_exclude_tags" varchar,
  	"targeting_match_all_exclude" boolean DEFAULT false,
  	"targeting_quick_commerce" "enum_app_qc" DEFAULT 'any',
  	"targeting_starts_at" timestamp(3) with time zone,
  	"targeting_ends_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "app_navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"active_color" varchar DEFAULT '#2c340c',
  	"inactive_color" varchar DEFAULT '#848484',
  	"background_color" varchar DEFAULT '#ffffff',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "app_pages_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "screens_id" integer;
  ALTER TABLE "app_pages_blocks_image" ADD CONSTRAINT "app_pages_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_image_grid_items" ADD CONSTRAINT "app_pages_blocks_image_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages_blocks_image_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_image_grid" ADD CONSTRAINT "app_pages_blocks_image_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_carousel_items" ADD CONSTRAINT "app_pages_blocks_carousel_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_carousel" ADD CONSTRAINT "app_pages_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_image_rail_items" ADD CONSTRAINT "app_pages_blocks_image_rail_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages_blocks_image_rail"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_image_rail" ADD CONSTRAINT "app_pages_blocks_image_rail_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_video" ADD CONSTRAINT "app_pages_blocks_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_spacer" ADD CONSTRAINT "app_pages_blocks_spacer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_text" ADD CONSTRAINT "app_pages_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_product_rail" ADD CONSTRAINT "app_pages_blocks_product_rail_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_reorder" ADD CONSTRAINT "app_pages_blocks_reorder_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_segment_tabs_items" ADD CONSTRAINT "app_pages_blocks_segment_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages_blocks_segment_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_segment_tabs" ADD CONSTRAINT "app_pages_blocks_segment_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_category_tabs_items" ADD CONSTRAINT "app_pages_blocks_category_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages_blocks_category_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_category_tabs" ADD CONSTRAINT "app_pages_blocks_category_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "app_pages_blocks_widget" ADD CONSTRAINT "app_pages_blocks_widget_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "screens_blocks_toolbar_icons" ADD CONSTRAINT "screens_blocks_toolbar_icons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."screens_blocks_toolbar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "screens_blocks_toolbar" ADD CONSTRAINT "screens_blocks_toolbar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."screens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "screens_blocks_address_bar" ADD CONSTRAINT "screens_blocks_address_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."screens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "screens_blocks_search_bar_hints" ADD CONSTRAINT "screens_blocks_search_bar_hints_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."screens_blocks_search_bar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "screens_blocks_search_bar" ADD CONSTRAINT "screens_blocks_search_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."screens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "screens_blocks_image" ADD CONSTRAINT "screens_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."screens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "screens_blocks_spacer" ADD CONSTRAINT "screens_blocks_spacer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."screens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "screens_blocks_text" ADD CONSTRAINT "screens_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."screens"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "screens" ADD CONSTRAINT "screens_body_id_app_pages_id_fk" FOREIGN KEY ("body_id") REFERENCES "public"."app_pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "app_navigation_tabs" ADD CONSTRAINT "app_navigation_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."app_navigation"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "app_pages_blocks_image_order_idx" ON "app_pages_blocks_image" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_image_parent_id_idx" ON "app_pages_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_image_path_idx" ON "app_pages_blocks_image" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_image_grid_items_order_idx" ON "app_pages_blocks_image_grid_items" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_image_grid_items_parent_id_idx" ON "app_pages_blocks_image_grid_items" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_image_grid_order_idx" ON "app_pages_blocks_image_grid" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_image_grid_parent_id_idx" ON "app_pages_blocks_image_grid" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_image_grid_path_idx" ON "app_pages_blocks_image_grid" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_carousel_items_order_idx" ON "app_pages_blocks_carousel_items" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_carousel_items_parent_id_idx" ON "app_pages_blocks_carousel_items" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_carousel_order_idx" ON "app_pages_blocks_carousel" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_carousel_parent_id_idx" ON "app_pages_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_carousel_path_idx" ON "app_pages_blocks_carousel" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_image_rail_items_order_idx" ON "app_pages_blocks_image_rail_items" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_image_rail_items_parent_id_idx" ON "app_pages_blocks_image_rail_items" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_image_rail_order_idx" ON "app_pages_blocks_image_rail" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_image_rail_parent_id_idx" ON "app_pages_blocks_image_rail" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_image_rail_path_idx" ON "app_pages_blocks_image_rail" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_video_order_idx" ON "app_pages_blocks_video" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_video_parent_id_idx" ON "app_pages_blocks_video" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_video_path_idx" ON "app_pages_blocks_video" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_spacer_order_idx" ON "app_pages_blocks_spacer" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_spacer_parent_id_idx" ON "app_pages_blocks_spacer" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_spacer_path_idx" ON "app_pages_blocks_spacer" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_text_order_idx" ON "app_pages_blocks_text" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_text_parent_id_idx" ON "app_pages_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_text_path_idx" ON "app_pages_blocks_text" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_product_rail_order_idx" ON "app_pages_blocks_product_rail" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_product_rail_parent_id_idx" ON "app_pages_blocks_product_rail" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_product_rail_path_idx" ON "app_pages_blocks_product_rail" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_reorder_order_idx" ON "app_pages_blocks_reorder" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_reorder_parent_id_idx" ON "app_pages_blocks_reorder" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_reorder_path_idx" ON "app_pages_blocks_reorder" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_segment_tabs_items_order_idx" ON "app_pages_blocks_segment_tabs_items" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_segment_tabs_items_parent_id_idx" ON "app_pages_blocks_segment_tabs_items" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_segment_tabs_order_idx" ON "app_pages_blocks_segment_tabs" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_segment_tabs_parent_id_idx" ON "app_pages_blocks_segment_tabs" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_segment_tabs_path_idx" ON "app_pages_blocks_segment_tabs" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_category_tabs_items_order_idx" ON "app_pages_blocks_category_tabs_items" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_category_tabs_items_parent_id_idx" ON "app_pages_blocks_category_tabs_items" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_category_tabs_order_idx" ON "app_pages_blocks_category_tabs" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_category_tabs_parent_id_idx" ON "app_pages_blocks_category_tabs" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_category_tabs_path_idx" ON "app_pages_blocks_category_tabs" USING btree ("_path");
  CREATE INDEX "app_pages_blocks_widget_order_idx" ON "app_pages_blocks_widget" USING btree ("_order");
  CREATE INDEX "app_pages_blocks_widget_parent_id_idx" ON "app_pages_blocks_widget" USING btree ("_parent_id");
  CREATE INDEX "app_pages_blocks_widget_path_idx" ON "app_pages_blocks_widget" USING btree ("_path");
  CREATE UNIQUE INDEX "app_pages_slug_idx" ON "app_pages" USING btree ("slug");
  CREATE INDEX "app_pages_updated_at_idx" ON "app_pages" USING btree ("updated_at");
  CREATE INDEX "app_pages_created_at_idx" ON "app_pages" USING btree ("created_at");
  CREATE INDEX "screens_blocks_toolbar_icons_order_idx" ON "screens_blocks_toolbar_icons" USING btree ("_order");
  CREATE INDEX "screens_blocks_toolbar_icons_parent_id_idx" ON "screens_blocks_toolbar_icons" USING btree ("_parent_id");
  CREATE INDEX "screens_blocks_toolbar_order_idx" ON "screens_blocks_toolbar" USING btree ("_order");
  CREATE INDEX "screens_blocks_toolbar_parent_id_idx" ON "screens_blocks_toolbar" USING btree ("_parent_id");
  CREATE INDEX "screens_blocks_toolbar_path_idx" ON "screens_blocks_toolbar" USING btree ("_path");
  CREATE INDEX "screens_blocks_address_bar_order_idx" ON "screens_blocks_address_bar" USING btree ("_order");
  CREATE INDEX "screens_blocks_address_bar_parent_id_idx" ON "screens_blocks_address_bar" USING btree ("_parent_id");
  CREATE INDEX "screens_blocks_address_bar_path_idx" ON "screens_blocks_address_bar" USING btree ("_path");
  CREATE INDEX "screens_blocks_search_bar_hints_order_idx" ON "screens_blocks_search_bar_hints" USING btree ("_order");
  CREATE INDEX "screens_blocks_search_bar_hints_parent_id_idx" ON "screens_blocks_search_bar_hints" USING btree ("_parent_id");
  CREATE INDEX "screens_blocks_search_bar_order_idx" ON "screens_blocks_search_bar" USING btree ("_order");
  CREATE INDEX "screens_blocks_search_bar_parent_id_idx" ON "screens_blocks_search_bar" USING btree ("_parent_id");
  CREATE INDEX "screens_blocks_search_bar_path_idx" ON "screens_blocks_search_bar" USING btree ("_path");
  CREATE INDEX "screens_blocks_image_order_idx" ON "screens_blocks_image" USING btree ("_order");
  CREATE INDEX "screens_blocks_image_parent_id_idx" ON "screens_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "screens_blocks_image_path_idx" ON "screens_blocks_image" USING btree ("_path");
  CREATE INDEX "screens_blocks_spacer_order_idx" ON "screens_blocks_spacer" USING btree ("_order");
  CREATE INDEX "screens_blocks_spacer_parent_id_idx" ON "screens_blocks_spacer" USING btree ("_parent_id");
  CREATE INDEX "screens_blocks_spacer_path_idx" ON "screens_blocks_spacer" USING btree ("_path");
  CREATE INDEX "screens_blocks_text_order_idx" ON "screens_blocks_text" USING btree ("_order");
  CREATE INDEX "screens_blocks_text_parent_id_idx" ON "screens_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "screens_blocks_text_path_idx" ON "screens_blocks_text" USING btree ("_path");
  CREATE UNIQUE INDEX "screens_key_idx" ON "screens" USING btree ("key");
  CREATE INDEX "screens_body_idx" ON "screens" USING btree ("body_id");
  CREATE INDEX "screens_updated_at_idx" ON "screens" USING btree ("updated_at");
  CREATE INDEX "screens_created_at_idx" ON "screens" USING btree ("created_at");
  CREATE INDEX "app_navigation_tabs_order_idx" ON "app_navigation_tabs" USING btree ("_order");
  CREATE INDEX "app_navigation_tabs_parent_id_idx" ON "app_navigation_tabs" USING btree ("_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_app_pages_fk" FOREIGN KEY ("app_pages_id") REFERENCES "public"."app_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_screens_fk" FOREIGN KEY ("screens_id") REFERENCES "public"."screens"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_app_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("app_pages_id");
  CREATE INDEX "payload_locked_documents_rels_screens_id_idx" ON "payload_locked_documents_rels" USING btree ("screens_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "app_pages_blocks_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_image_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_image_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_carousel_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_carousel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_image_rail_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_image_rail" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_video" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_spacer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_product_rail" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_reorder" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_segment_tabs_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_segment_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_category_tabs_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_category_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages_blocks_widget" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_pages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "screens_blocks_toolbar_icons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "screens_blocks_toolbar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "screens_blocks_address_bar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "screens_blocks_search_bar_hints" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "screens_blocks_search_bar" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "screens_blocks_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "screens_blocks_spacer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "screens_blocks_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "screens" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_navigation_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "app_navigation" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "app_pages_blocks_image" CASCADE;
  DROP TABLE "app_pages_blocks_image_grid_items" CASCADE;
  DROP TABLE "app_pages_blocks_image_grid" CASCADE;
  DROP TABLE "app_pages_blocks_carousel_items" CASCADE;
  DROP TABLE "app_pages_blocks_carousel" CASCADE;
  DROP TABLE "app_pages_blocks_image_rail_items" CASCADE;
  DROP TABLE "app_pages_blocks_image_rail" CASCADE;
  DROP TABLE "app_pages_blocks_video" CASCADE;
  DROP TABLE "app_pages_blocks_spacer" CASCADE;
  DROP TABLE "app_pages_blocks_text" CASCADE;
  DROP TABLE "app_pages_blocks_product_rail" CASCADE;
  DROP TABLE "app_pages_blocks_reorder" CASCADE;
  DROP TABLE "app_pages_blocks_segment_tabs_items" CASCADE;
  DROP TABLE "app_pages_blocks_segment_tabs" CASCADE;
  DROP TABLE "app_pages_blocks_category_tabs_items" CASCADE;
  DROP TABLE "app_pages_blocks_category_tabs" CASCADE;
  DROP TABLE "app_pages_blocks_widget" CASCADE;
  DROP TABLE "app_pages" CASCADE;
  DROP TABLE "screens_blocks_toolbar_icons" CASCADE;
  DROP TABLE "screens_blocks_toolbar" CASCADE;
  DROP TABLE "screens_blocks_address_bar" CASCADE;
  DROP TABLE "screens_blocks_search_bar_hints" CASCADE;
  DROP TABLE "screens_blocks_search_bar" CASCADE;
  DROP TABLE "screens_blocks_image" CASCADE;
  DROP TABLE "screens_blocks_spacer" CASCADE;
  DROP TABLE "screens_blocks_text" CASCADE;
  DROP TABLE "screens" CASCADE;
  DROP TABLE "app_navigation_tabs" CASCADE;
  DROP TABLE "app_navigation" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_app_pages_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_screens_fk";
  
  DROP INDEX "payload_locked_documents_rels_app_pages_id_idx";
  DROP INDEX "payload_locked_documents_rels_screens_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "app_pages_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "screens_id";
  DROP TYPE "public"."enum_app_pages_blocks_image_action_type";
  DROP TYPE "public"."enum_app_anim";
  DROP TYPE "public"."enum_app_pages_blocks_image_targeting_audience";
  DROP TYPE "public"."enum_app_qc";
  DROP TYPE "public"."enum_app_pages_blocks_image_grid_items_action_type";
  DROP TYPE "public"."enum_app_pages_blocks_image_grid_items_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_image_grid_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_carousel_items_action_type";
  DROP TYPE "public"."enum_app_pages_blocks_carousel_items_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_carousel_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_image_rail_items_action_type";
  DROP TYPE "public"."enum_app_pages_blocks_image_rail_items_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_image_rail_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_video_action_type";
  DROP TYPE "public"."enum_app_pages_blocks_video_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_spacer_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_text_align";
  DROP TYPE "public"."enum_app_pages_blocks_text_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_product_rail_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_reorder_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_segment_tabs_items_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_segment_tabs_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_category_tabs_items_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_category_tabs_targeting_audience";
  DROP TYPE "public"."enum_app_pages_blocks_widget_targeting_audience";
  DROP TYPE "public"."enum_screens_blocks_toolbar_icons_icon";
  DROP TYPE "public"."enum_screens_blocks_toolbar_icons_action_type";
  DROP TYPE "public"."enum_screens_blocks_toolbar_targeting_audience";
  DROP TYPE "public"."enum_screens_blocks_address_bar_targeting_audience";
  DROP TYPE "public"."enum_screens_blocks_search_bar_targeting_audience";
  DROP TYPE "public"."enum_screens_blocks_image_action_type";
  DROP TYPE "public"."enum_screens_blocks_image_targeting_audience";
  DROP TYPE "public"."enum_screens_blocks_spacer_targeting_audience";
  DROP TYPE "public"."enum_screens_blocks_text_align";
  DROP TYPE "public"."enum_screens_blocks_text_targeting_audience";
  DROP TYPE "public"."enum_app_navigation_tabs_targeting_audience";`)
}
