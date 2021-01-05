import React from "react";
import TestimonialCard from "./testimonialCard.jsx";
import styles from "./Grid.module.css";

const Testimonials = (props) => {
  //if import images here, then
  //const avatars = [daniel, jonathan, jeanette, patrick, kira];
  const { persons } = props;
  // for (let i = 0; i < persons.length; i++) {
  //   persons[i].imgSrc = avatars[i];
  // }

  return (
    <React.Fragment>
      <div className={styles.gridMain}>
        {persons.map((person) => (
          <TestimonialCard person={person} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
