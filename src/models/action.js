const Action = (name, event, args) => {
  let obj = {
    name: name,
    event: event,
    args: args,
  };

  return obj;
};

export default Action;
