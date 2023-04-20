import type { Character } from './character';
import type { Resource } from './resources';

import BannerSpearIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/characters/fh-banner-spear-bw-icon.png';
import BlinkbladeIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/characters/fh-blinkblade-bw-icon.png';
import BoneshaperIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/characters/fh-boneshaper-bw-icon.png';
import DeathwalkerIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/characters/fh-deathwalker-bw-icon.png';
import GeminateIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/characters/fh-geminate-bw-icon.png';
import DrifterIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/characters/fh-drifter-bw-icon.png';

import LumberIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/loot/fh-lumber-bw-icon.png';
import MetalIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/loot/fh-metal-bw-icon.png';
import HideIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/loot/fh-hide-bw-icon.png';
import ArrrowvineIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/loot/fh-arrowvine-bw-icon.png';
import AxenutIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/loot/fh-axenut-bw-icon.png';
import CorpsecapIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/loot/fh-corpsecap-bw-icon.png';
import FlamefruitIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/loot/fh-flamefruit-bw-icon.png';
import RockrootIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/loot/fh-rockroot-bw-icon.png';
import SnowthistleIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/loot/fh-snowthistle-bw-icon.png';

export const avatars: Record<Character, string> = {
  bannerspear: BannerSpearIcon,
  blinkblade: BlinkbladeIcon,
  boneshaper: BoneshaperIcon,
  deathwalker: DeathwalkerIcon,
  drifter: DrifterIcon,
  geminate: GeminateIcon
};

export const resources: Record<Resource, string> = {
  lumber: LumberIcon,
  metal: MetalIcon,
  hide: HideIcon,
  arrowvine: ArrrowvineIcon,
  axenut: AxenutIcon,
  corpsecap: CorpsecapIcon,
  flamefruit: FlamefruitIcon,
  rockroot: RockrootIcon,
  snowthistle: SnowthistleIcon
};
