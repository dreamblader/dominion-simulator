export const doWhenClickOutside = (ref, action) => {
  let documentOverride = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      action();
    }
  };

  document.body.addEventListener("mousedown", documentOverride);
};

export const pushToReveal = (reveal, menu, myID) => {
  return reveal.map((item, id) => {
    if (id !== myID) {
      return [...item, menu];
    } else {
      return item;
    }
  });
};
