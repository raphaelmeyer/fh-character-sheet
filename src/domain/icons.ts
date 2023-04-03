import type { Character } from './character';

import BannerSpearIcon from '@/assets/any2cards/fh-banner-spear-bw-icon.png';
import BlinkbladeIcon from '@/assets/any2cards/fh-blinkblade-bw-icon.png';
import BoneshaperIcon from '@/assets/any2cards/fh-boneshaper-bw-icon.png';
import DeathwalkerIcon from '@/assets/any2cards/fh-deathwalker-bw-icon.png';
import GeminateIcon from '@/assets/any2cards/fh-geminate-bw-icon.png';

export const avatars: Record<Character, string> = {
  bannerspear: BannerSpearIcon,
  blinkblade: BlinkbladeIcon,
  boneshaper: BoneshaperIcon,
  deathwalker: DeathwalkerIcon,
  geminate: GeminateIcon
};
