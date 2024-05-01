import React from "react";
import { LinksContainer } from "./Links.styles";

const Links = ({ links }) => {
  return (
    <React.Fragment>
      <LinksContainer>
        {links?.map(({ id, icon, url }) => (
          <a key={id} target="blank" href={url}>
            <i className={`fab ${icon}`} />
          </a>
        ))}
      </LinksContainer>
    </React.Fragment>
  );
};

export default Links;
