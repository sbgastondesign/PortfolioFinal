/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../styles/Navbar.css'

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  navbarStyle: {
    background: 'purple',
    justifyContent: 'flex-end',
  },
};
// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <ul>
        <li><a href="/">Welcome></a></li>
        <li><a href="/Projects"></a></li>
        <li><a href="/Footer"></a></li>
        <li><a href="/Contact"></a></li></ul>
    </nav>
  );
};

export default Navbar;
