import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
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
  ALTER TABLE "media" DROP COLUMN "_objectkey";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
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
  ALTER TABLE "media" ADD COLUMN "_objectkey" varchar;
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
  DROP TYPE "public"."enum__pages_v_blocks_tab_bar_visibility_audience";`)
}
