import DeepLink from "models/deep-link";

const rulesRegex = /^\/rule[s]?[/]?$/;

const deepLinks = [DeepLink(2, rulesRegex)];

const redirect = (path) => {
  for (let link of deepLinks) {
    if (link.pathReg.test(path)) {
      return link.pageId;
    }
  }

  return 0;
};

export default redirect;
