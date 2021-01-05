import React from "react";
import styles from "./Card.module.css";

const TestimonialCard = ({ person }) => {
  return (
    <React.Fragment>
      <div className={styles.card}>
        <div className={styles.cardPerson}>
          <img
            src={person.imgSrc}
            alt="avatar"
            className={styles.personImage}
          />
          <p
            className={
              styles.personName
            }>{`${person.fName} ${person.lName}`}</p>
          <p className={styles.personStatus}>{person.status}</p>
        </div>
        <p className={styles.cardTestimonial}>{person.testimonial}</p>
        <p className={styles.cardStory}>{person.story}</p>
      </div>
    </React.Fragment>
  );
};

export default TestimonialCard;
