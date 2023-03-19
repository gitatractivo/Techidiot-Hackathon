import React from "react";
import { Button } from "@mui/material";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-blue-600">
      <div className="w-5/6 mx-auto flex flex-col justify-center items-center gap-10 py-10">
        <div className="grid grid-cols-4 gap-24">
          {/* CHILD 1 */}
          <div>
            <SocialMediaIcons></SocialMediaIcons>
          </div>
          {/* CHILD 2 */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold mb-5">Quick Links</h1>
            <p>For Corporates</p>
            <p>For Therapist</p>
            <p>Contact</p>
            <p>About Us</p>
          </div>
          {/* CHILD 3 */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold mb-5">Legal Stuff</h1>
            <p>Disclaimer</p>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
          </div>
          {/* CHILD 4 */}
          <div className="flex flex-col gap-4">
            <h>We are here to make sure that you are always happy</h>
            <Button variant="contained" color="primary">
              Request Callback
            </Button>
          </div>
        </div>

        <div>
          <p>
            If you are in a life-threatening situation DO NOT use this site. Use
            these resources to get immediate help. ©HERO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
