import React from "react";
import { siteConfig } from "@/lib/site-config";

const Footer = () => {
  return (
    <footer className="text-zinc-400 text-xs py-6 mt-auto w-full">
      <div className="flex justify-between items-center container mx-auto px-4">
        <div className="flex space-x-4">
          <a
            href="https://github.com/FurqanNoor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:furqannoor311@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Contact
          </a>
        </div>
        <p>Last updated: {siteConfig.lastUpdated}</p>
      </div>
    </footer>
  );
};

export default Footer;
