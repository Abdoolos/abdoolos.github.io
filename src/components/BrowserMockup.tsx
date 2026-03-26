import React from "react";
import '../assets/styles/BrowserMockup.scss';

interface BrowserMockupProps {
  url: string;
  title: string;
}

function BrowserMockup({ url, title }: BrowserMockupProps) {
  const screenshotUrl = `https://image.thum.io/get/width/1200/${url}`;

  return (
    <div className="browser-mockup">
      <div className="browser-chrome">
        <div className="browser-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="browser-address-bar">
          <span>{url}</span>
        </div>
      </div>
      <div className="browser-content">
        <a href={url} target="_blank" rel="noreferrer">
          <img
            src={screenshotUrl}
            alt={title}
            loading="lazy"
            width="100%"
          />
        </a>
      </div>
    </div>
  );
}

export default BrowserMockup;
