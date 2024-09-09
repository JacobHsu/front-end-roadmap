import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import "./style.css";

export default function Guide() {
  const history = useHistory();
  
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
