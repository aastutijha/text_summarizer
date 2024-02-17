import React from 'react';
import './Styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Text Summarizer. All rights reserved.</p>
      <div className="contact-details">
        <a href="mailto:contact@textsummarizer.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.facebook.com/textsummarizer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com/textsummarizer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;