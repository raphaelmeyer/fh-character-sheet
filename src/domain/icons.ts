import type { Character } from '@/domain/character';
import type { Modifier } from '@/domain/modifiers';
import type { Resource } from '@/domain/resources';

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

import DoubleIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/attack-modifiers/fh-2x-bw-icon.png';
import ItemMinus1Icon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/attack-modifiers/fh-minus-1-modifier-card-bw-icon.png';
import Minus1Icon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/attack-modifiers/fh-minus-1-bw-icon.png';
import Minus2Icon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/attack-modifiers/fh-minus-2-bw-icon.png';
import Plus0Icon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/attack-modifiers/fh-plus-0-bw-icon.png';
import Plus1Icon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/attack-modifiers/fh-plus-1-bw-icon.png';
import Plus2Icon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/attack-modifiers/fh-plus-2-bw-icon.png';
import Plus3Icon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/attack-modifiers/fh-plus-3-bw-icon.png';
import Plus4Icon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/attack-modifiers/fh-plus-4-bw-icon.png';

import BlessIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-bless-bw-icon.png';
import BrittleIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-brittle-bw-icon.png';
import CurseIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-curse-bw-icon.png';
import DisarmIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-disarm-bw-icon.png';
import ImmobilizeIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-immobilize-bw-icon.png';
import MuddleIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-muddle-bw-icon.png';
import PierceIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-pierce-bw-icon.png';
import PoisonIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-poison-bw-icon.png';
import PushIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-push-bw-icon.png';
import RegenerateIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-regenerate-bw-icon.png';
import RollingIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-rolling-bw-icon.png';
import WoundIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/conditions/fh-wound-bw-icon.png';

import AttackIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-attack-bw-icon.png';
import DamageIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-damage-bw-icon.png';
import HealIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-heal-bw-icon.png';
import MoveIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-move-bw-icon.png';
import RangeIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-range-bw-icon.png';
import RecoverIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-recover-card-color-icon.png';
import ShieldIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-shield-bw-icon.png';
import SingleHandIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-equip-slot-single-hand-bw-icon.png';
import TargetIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-target-bw-icon.png';
import TapIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/general/fh-tap-card-color-icon.png';

import DarkIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/elements/fh-dark-bw-icon.png';
import EarthIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/elements/fh-earth-bw-icon.png';
import WildIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/elements/fh-wild-bw-icon.png';

import ShadowIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/class/fh-deathwalker-shadow-bw-icon.png';
import TimeIcon from 'https://raw.githubusercontent.com/any2cards/worldhaven/master/images/art/frosthaven/icons/class/fh-blinkblade-time-bw-icon.png';

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

export const modifiers: Record<Modifier, string> = {
  double: DoubleIcon,
  'item-minus-1': ItemMinus1Icon,
  'minus-1': Minus1Icon,
  'minus-2': Minus2Icon,
  'plus-0': Plus0Icon,
  'plus-1': Plus1Icon,
  'plus-2': Plus2Icon,
  'plus-3': Plus3Icon,
  'plus-4': Plus4Icon,

  bless: BlessIcon,
  brittle: BrittleIcon,
  curse: CurseIcon,
  disarm: DisarmIcon,
  immobilize: ImmobilizeIcon,
  muddle: MuddleIcon,
  pierce: PierceIcon,
  poison: PoisonIcon,
  push: PushIcon,
  regenerate: RegenerateIcon,
  rolling: RollingIcon,
  wound: WoundIcon,

  attack: AttackIcon,
  damage: DamageIcon,
  heal: HealIcon,
  move: MoveIcon,
  range: RangeIcon,
  recover: RecoverIcon,
  shield: ShieldIcon,
  'single-hand': SingleHandIcon,
  target: TargetIcon,
  tap: TapIcon,

  dark: DarkIcon,
  earth: EarthIcon,
  wild: WildIcon,

  boneshaper: BoneshaperIcon,
  shadow: ShadowIcon,
  time: TimeIcon
};
