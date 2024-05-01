import React from "react";
import { LinksContainer } from "./Links.styles";
import { socialLinks } from "src/data/social-links";

const Links = () => {
  return (
    <React.Fragment>
      <LinksContainer>
        {socialLinks?.map(({ id, icon, url }) => (
          <a key={id} target="blank" href={url}>
            <i className={`fab ${icon}`} />
          </a>
        ))}
      </LinksContainer>
    </React.Fragment>
  );
};

export default Links;
