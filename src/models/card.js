const Card = (id, playerID) => {
  if (id < 20 && id >= 0) {
    let obj = {
      id: id,
      title: "Azros",
      art: "/img/test-card.jpg",
      atk: 2,
      hp: 5,
      element: "EARTH",
      unique: true,
      description: "none",
      tags: ["HUMAN", "ROYAL"],
      status: [],
      controller: playerID,
      inversed: false,
      flipped: false,
    };

    return obj;
  } else {
    let obj = {
      id: id,
      title: "none",
      art: "",
      atk: 0,
      hp: 0,
      element: "none",
      unique: false,
      description: "none",
      tags: [],
      status: [],
      controller: playerID,
      inversed: false,
      flipped: false,
    };

    return obj;
  }
};

export default Card;
