import React from "react";
import '../assets/styles/DeviceMockup.scss';

interface DeviceMockupProps {
  url: string;
  title: string;
  desktopImg: string;
  mobileImg?: string;
}

function DeviceMockup({ url, title, desktopImg, mobileImg }: DeviceMockupProps) {
  return (
    <div className={`device-mockup-wrapper ${mobileImg ? 'has-mobile' : 'desktop-only'}`}>
      <div className="mockup-desktop">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={desktopImg} alt={`${title} - Desktop`} loading="lazy" />
        </a>
      </div>
      {mobileImg && (
        <div className="mockup-mobile">
          <a href={url} target="_blank" rel="noreferrer">
            <img src={mobileImg} alt={`${title} - Mobile`} loading="lazy" />
          </a>
        </div>
      )}
    </div>
  );
}

export default DeviceMockup;
