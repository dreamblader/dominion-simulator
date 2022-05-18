export const TickType = {
  NEUTRAL: "neutral",
  AFFLICTIONS: "afflictions",
  BLESSINGS: "blessings",
};

const Tick = (name, type, icon, description) => {
  let obj = {
    name: name,
    type: type,
    duration: 0,
    icon: icon,
    description: description,
  };

  return obj;
};

export default Tick;
