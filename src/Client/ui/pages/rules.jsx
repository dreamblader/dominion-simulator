import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rulesBR from "rules/RULES-BR.md";
import Button from "../components/general/button";

const Rules = ({ reset }) => {
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch(rulesBR)
      .then((response) => response.text())
      .then((text) => {
        setText(text);
      });
  }, []);

  return (
    <div>
      <Button click={() => reset()}>Return</Button>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
    </div>
  );
};

export default Rules;
