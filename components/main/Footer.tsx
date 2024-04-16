import React from "react";
import dynamic from 'next/dynamic';

const RxDiscordLogo = dynamic(() => import("react-icons/rx").then(mod => mod.RxDiscordLogo), { ssr: false });
const RxGithubLogo = dynamic(() => import("react-icons/rx").then(mod => mod.RxGithubLogo), { ssr: false });
const RxInstagramLogo = dynamic(() => import("react-icons/rx").then(mod => mod.RxInstagramLogo), { ssr: false });
const RxTwitterLogo = dynamic(() => import("react-icons/rx").then(mod => mod.RxTwitterLogo), { ssr: false });
const RxLinkedinLogo = dynamic(() => import("react-icons/rx").then(mod => mod.RxLinkedinLogo), { ssr: false });

const Footer = () => {
  return (
    <div className="footer-container w-full border-[1px] bg-gray-800 text-gray-200 p-4  bottom-0 left-0 right-0 z-50">
      <div className="flex flex-col md:flex-row justify-around max-w-screen-lg mx-auto">
        <div className="mb-8 md:mb-0">
          <div className="font-bold text-lg mb-2">Community</div>
          <a
            href="https://github.com/Abdulrehman-codes"
            className="flex items-center mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxGithubLogo className="mr-2" />
            Github
          </a>
          <a
            href="https://discord.com/users/739467857221386293"
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxDiscordLogo className="mr-2" />
            Discord
          </a>
        </div>
        <div className="mb-8 md:mb-0">
          <div className="font-bold text-lg mb-2">Social Media</div>
          <a
            href="https://www.instagram.com/mortal_beast007/"
            className="flex items-center mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxInstagramLogo className="mr-2" />
            Instagram
          </a>
          {/* <a
            href="https://twitter.com/AbdulRe26019449"
            className="flex items-center mb-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxTwitterLogo className="mr-2" />
            Twitter
          </a> */}
          <a
            href="https://www.linkedin.com/in/abdul-rehman-b28407247/"
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxLinkedinLogo className="mr-2" />
            Linkedin
          </a>
        </div>
        <div>
  <div className="font-bold text-lg mb-2">About</div>
  <p className="mb-2">Learning about me</p>
  <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=baigabdulrehman21@gmail.com" target="_blank">baigabdulrehman21@gmail.com</a></p>
</div>

      </div>
      <div className="text-center mt-4">&copy; All Rights Reserved !!</div>
    </div>
  );
};

export default Footer;
