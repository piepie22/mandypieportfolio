import React from 'react';
import { motion } from 'framer-motion';

// framer motion nav scrolling smooth and map
const Nav = () => {
  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });}};

  return (
    <motion.nav className="motion-nav">
      <ul> {['home', 'about', 'projects', 'contact'].map((section) => (
          <li key={section}>
            < a href={`#${section}`} onClick={(e) => handleScroll(e, section)} >
            {section.charAt(0).toUpperCase() + section.slice(1)}</a>
          </li>))}
      </ul>
    </motion.nav>
  );
};

export default Nav;
