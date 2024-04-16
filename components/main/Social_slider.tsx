import React from 'react';
import { Socials } from '@/constants'; // Import your social links data

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      {Socials.map((social) => (
        <a href={social.link} key={social.key} target="_blank" rel="noopener noreferrer">
          <img
            src={social.src}
            alt={social.name}
            width={24} // Adjust the size as needed
            height={24} // Adjust the size as needed
          />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
