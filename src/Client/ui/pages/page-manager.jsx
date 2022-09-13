import React, { useContext } from "react";
import { PageContext } from "Client/context/page";
import MainMenu from "./menu/menu";
import Game from "./game";
import Rules from "./rules/rules";
import { PageLocker } from "dreamblade-react-commons";
import JokenpoPage from "./jokenpo/jokenpo";

const PageManager = () => {
  const { pageState } = useContext(PageContext);

  const renderPage = () => {
    switch (pageState.pageId) {
      default:
      case 0:
        return <MainMenu />;
      case 1:
        return (
          <PageLocker
            label="CLOSED ALPHA"
            hint="Chave de Acesso"
            confirmLabel="Confirmar"
            mistakeMax="3"
            pass={process.env.REACT_APP_ACCESS_PASS ?? ""}
          >
            <Game />
          </PageLocker>
        );
      case 2:
        return <Rules />;
    }
  };

  return renderPage();
};

export default PageManager;
