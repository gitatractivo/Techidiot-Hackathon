import React from "react";
import linkedInIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center items-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 bg-cyan-800"
        href="https://google.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedInIcon} alt="google-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 bg-purple-600"
        href="https://instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramIcon} alt="google-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 bg-cyan-900"
        href="https://facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebookIcon} alt="google-link" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <img
          className="hover:opacity-50 transition duration-500 bg-[#159EEC]"
          src={twitterIcon}
          alt="google-link"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
