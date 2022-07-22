import React, { useState, useEffect, createElement } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Button from "../components/general/button";

const Rules = ({ reset }) => {
  const [text, setText] = useState(null);
  const rules = (locale) => {
    return `./rules/RULES-${locale}.md`;
  };

  useEffect(() => {
    fetch(rules("BR"))
      .then((response) => response.text())
      .then((text) => {
        setText(text);
      });
  }, []);

  const HeadingRenderer = ({ level, children }) => {
    console.log(children);
    const name = getChildrenString(children);
    const id = name.toLowerCase().replaceAll(" ", "-").replaceAll(/[()]/g, "");
    return createElement(`h${level}`, { id: id }, children);
  };

  const getChildrenString = (children) => {
    let item = children[0] ? children[0] : "";
    if (typeof item == "string") {
      return item;
    } else {
      return getChildrenString(item.props.children);
    }
  };

  return (
    <div>
      <Button click={() => reset()}>Return</Button>
      <ReactMarkdown
        components={{
          h1: HeadingRenderer,
          h2: HeadingRenderer,
          h3: HeadingRenderer,
          h4: HeadingRenderer,
          h5: HeadingRenderer,
          h6: HeadingRenderer,
        }}
        rehypePlugins={[rehypeRaw]}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};

export default Rules;
