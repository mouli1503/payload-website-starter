import * as migration_20261022_163814_initial from './20261022_163814_initial';
import * as migration_20261026_125200_supertails_blocks from './20261026_125200_supertails_blocks';
import * as migration_20261026_155830_supertails_layouts_navigation from './20261026_155830_supertails_layouts_navigation';
import * as migration_20261027_111148_drop_app_v0 from './20261027_111148_drop_app_v0';
import * as migration_20261027_111149_app_v1 from './20261027_111149_app_v1';

export const migrations = [
  {
    up: migration_20261022_163814_initial.up,
    down: migration_20261022_163814_initial.down,
    name: '20261022_163814_initial',
  },
  {
    up: migration_20261026_125200_supertails_blocks.up,
    down: migration_20261026_125200_supertails_blocks.down,
    name: '20261026_125200_supertails_blocks',
  },
  {
    up: migration_20261026_155830_supertails_layouts_navigation.up,
    down: migration_20261026_155830_supertails_layouts_navigation.down,
    name: '20261026_155830_supertails_layouts_navigation',
  },
  {
    up: migration_20261027_111148_drop_app_v0.up,
    down: migration_20261027_111148_drop_app_v0.down,
    name: '20261027_111148_drop_app_v0',
  },
  {
    up: migration_20261027_111149_app_v1.up,
    down: migration_20261027_111149_app_v1.down,
    name: '20261027_111149_app_v1'
  },
];
