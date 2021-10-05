export const closeMenuWhenClickOutside = (ref, clear) => {
  let clearMenu = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      clear();
    }
  };

  document.body.addEventListener("mousedown", clearMenu);
};
