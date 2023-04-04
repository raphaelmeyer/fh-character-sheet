import type { Character } from './character';
import type { Resource } from './resources';

import BannerSpearIcon from '@/assets/any2cards/fh-banner-spear-bw-icon.png';
import BlinkbladeIcon from '@/assets/any2cards/fh-blinkblade-bw-icon.png';
import BoneshaperIcon from '@/assets/any2cards/fh-boneshaper-bw-icon.png';
import DeathwalkerIcon from '@/assets/any2cards/fh-deathwalker-bw-icon.png';
import GeminateIcon from '@/assets/any2cards/fh-geminate-bw-icon.png';

import LumberIcon from '@/assets/any2cards/fh-lumber-bw-icon.png';
import MetalIcon from '@/assets/any2cards/fh-metal-bw-icon.png';
import HideIcon from '@/assets/any2cards/fh-hide-bw-icon.png';
import ArrrowvineIcon from '@/assets/any2cards/fh-arrowvine-bw-icon.png';
import AxenutIcon from '@/assets/any2cards/fh-axenut-bw-icon.png';
import CorpsecapIcon from '@/assets/any2cards/fh-corpsecap-bw-icon.png';
import FlamefruitIcon from '@/assets/any2cards/fh-flamefruit-bw-icon.png';
import RockrootIcon from '@/assets/any2cards/fh-rockroot-bw-icon.png';
import SnowthistleIcon from '@/assets/any2cards/fh-snowthistle-bw-icon.png';

export const avatars: Record<Character, string> = {
  bannerspear: BannerSpearIcon,
  blinkblade: BlinkbladeIcon,
  boneshaper: BoneshaperIcon,
  deathwalker: DeathwalkerIcon,
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
