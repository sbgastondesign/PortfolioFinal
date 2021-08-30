import React from 'react';
import '../styles/Header.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
    footerStyle: {
        background: 'red',
    },
    headingStyle: {
        fontSize: '60px',
    },
};

// We use JSX curly braces to evaluate the style object

function Footer() {
    return (
        <footer style={styles.headerStyle} className="footer">
            <h1 style={styles.headingStyle}>Contact me to get your project rolling:</h1>

        </footer>
    );
}

export default Footer;
