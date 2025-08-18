import React from "react";
import Button from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
        <Button onClick={() => window.open('https://github.com/henrynoyes')}>
          <FontAwesomeIcon icon={faGithub} />
          <p className="ml-2 text-md tablet:text-lg">Github</p>
        </Button>
        <Button onClick={() => window.open('mailto:hnoyes.dev@gmail.com')}>
          <FontAwesomeIcon icon={faEnvelope} />
          <p className="ml-2 text-md tablet:text-lg">Email</p>
        </Button>
    </div>
  );
};

export default Socials;
