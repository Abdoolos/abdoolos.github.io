import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const linkStyle = {
    textDecoration: 'none',
  };

  const iconStyle = {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #6C6CE5 0%, #FF4C60 100%)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: '#fff',
  };

  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  };

  const LogoContent = () => (
    <div style={logoStyle}>
      <div style={iconStyle}>
        <i className="fas fa-brain"></i>
      </div>
      <span style={textStyle}>Abdoolos</span>
    </div>
  );

  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/" style={linkStyle}>
        <LogoContent />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/" style={linkStyle}>
        <LogoContent />
      </Link>
    </div>
  );
}

export default Logo;
