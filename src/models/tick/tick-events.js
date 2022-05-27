const Cooldown = (card) => {};

const StatusDown = (card) => {};

const Burn = (card) => {
  card.hp_mod--;
};

const Stun = (card) => {};

const StatusUp = (card) => {};

const Shield = (card) => {};

const TickEvents = {
  COOLDOWN: Cooldown,
  STATS_DOWN: StatusDown,
  BURN: Burn,
  STUN: Stun,
  STATS_UP: StatusUp,
  SHIELD: Shield,
};

export default TickEvents;
