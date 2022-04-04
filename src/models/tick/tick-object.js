const Tick = (name, event, icon, description) => {
  let obj = {
    name: name,
    duration: 0,
    event: event,
    icon: icon,
    description: description,
  };

  return obj;
};

export default Tick;
