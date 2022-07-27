import React, { useContext } from "react";
import { PageContext } from "Client/context/page";
import MainMenu from "./menu/menu";
import Game from "./game";
import Rules from "./rules/rules";

const PageManager = () => {
  const { pageState } = useContext(PageContext);

  const renderPage = () => {
    switch (pageState.pageId) {
      default:
      case 0:
        return <MainMenu />;
      case 1:
        return <Game />;
      case 2:
        return <Rules />;
    }
  };

  return renderPage();
};

export default PageManager;
