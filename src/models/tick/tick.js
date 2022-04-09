import Burn from "./burn";
import Cooldown from "./cooldown";
import StatusUp from "./stats-up";
import StatusDown from "./stats-down";
import Stun from "./stun";
import Shield from "./shield";

export const setDuration = (tick, duration) => {
  tick.duration = duration;
};

export const Neutral = {
  COOLDOWN: Cooldown,
};

export const Afflictions = {
  STATS_DOWN: StatusDown,
  BURN: Burn,
  STUN: Stun,
};

export const Blessings = {
  STATS_UP: StatusUp,
  SHIELD: Shield,
};

const Ticks = {
  NEUTRAL: Neutral,
  AFFLICTIONS: Afflictions,
  BLESSINGS: Blessings,
};

export default Ticks;
