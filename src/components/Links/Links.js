import React, { useEffect, useState } from "react";
import instance from "../../axios";
import { LinksContainer } from "./Links.styles";

const Links = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    instance.get("social-link").then((res) => setState(res.data));
  }, []);

  return (
    <React.Fragment>
      <LinksContainer>
        {state.map(({ id, icon, link }) => (
          <a key={id} target="blank" href={link}>
            <i className={`fab ${icon}`} />
          </a>
        ))}
      </LinksContainer>
    </React.Fragment>
  );
};

export default Links;
