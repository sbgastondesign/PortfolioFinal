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
      {
      <ul style={styles.ulStyle} className="navbar"
<a href="/">Welcome></a>
<a href="/Project">Projects</a>
<a href="/Footer">Contact</a>
<a href="/Resume">Project</a></nav >
  );
}
}
// We use JSX curly braces to evaluate the style object on the JSX tag


export default Navbar;
