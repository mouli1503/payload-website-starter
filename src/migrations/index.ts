import * as migration_20261022_163814_initial from './20261022_163814_initial';
import * as migration_20261026_125200_supertails_blocks from './20261026_125200_supertails_blocks';
import * as migration_20261026_155830_supertails_layouts_navigation from './20261026_155830_supertails_layouts_navigation';

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
    name: '20261026_155830_supertails_layouts_navigation'
  },
];
