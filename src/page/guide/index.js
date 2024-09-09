import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

import "./style.css";

const distinct = (arr) => {
  let map = new Map();
  for (let item of arr) {
    if (!map.has(item.author.id)) {
      map.set(item.author.id, item);
    }
  }
  return [...map.values()];
};

export default function Guide() {
  const history = useHistory();
  
  // 简单处理: router => detail page set scrollTop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="guide-container">
      <div className="go-home" onClick={history.goBack}>
        <span>{"<- 返回"}</span>
      </div>
      <Markdown />
    </div>
  );
}

function Markdown() {
  let { query } = useParams();
  const Content = require(`./md/${query}.md`);
  return <div dangerouslySetInnerHTML={{ __html: Content }} />;
}
