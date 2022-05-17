export const TickType = {
  NEUTRAL: "neutral",
  AFFLICTIONS: "afflictions",
  BLESSINGS: "blessings",
};

const Tick = (name, type, event, icon, description) => {
  let obj = {
    name: name,
    type: type,
    duration: 0,
    event: event,
    icon: icon,
    description: description,
  };

  return obj;
};

export default Tick;
