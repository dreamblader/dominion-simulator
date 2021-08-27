const Card = (id) => {
  let obj = {
    id: id,
    title: "none",
    art: "null",
    atk: 0,
    hp: 0,
    element: "none",
    unique: false,
    description: "none",
    tags: [],
    status: [],
    controller: -1,
    inversed: false,
    flipped: false,
  };

  return obj;
};

export default Card;
