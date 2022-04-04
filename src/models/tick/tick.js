export const Tick = (name, event, description) => {
  let obj = {
    name: name,
    duration: 0,
    event: event,
    description: description
  };

  return obj;
};

export const setDuration = (tick, duration) => {
  tick.duration = duration;
}

const Ticks = {
  CONDITION: Conditions,
};

export default Ticks;
