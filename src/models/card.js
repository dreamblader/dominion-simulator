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
  };

  return obj;
};

export default Card;
