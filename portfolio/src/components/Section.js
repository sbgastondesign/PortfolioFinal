import React from 'react';
import '../styles/Section.css';


// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'light-grey',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>About</h2>
      <p>
        Innovative visual design professional passionate about developing digital products with cutting edge design. Strengths in creativity, teamwork, and building projects from ideation to execution. Digital arts background coupled with strong technical skills and an eye for modern design principles, makes me a valuable addition to any team.
      </p>



    </section>
  );
}

export default Section;
