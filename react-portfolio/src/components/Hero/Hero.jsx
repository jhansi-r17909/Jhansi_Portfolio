import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jhansi</h1>
        <p className={styles.description}>
        I am a Front End Web Developer fueled by determination and purpose.
        I am ready to bring the your ideas and vision to life.
        </p>
        <a href="mailto:jhansi23sep1998@gmail.com" className={styles.contactBtn}>
          Get In Touch
        </a>
      </div>
      <img
        src={getImageUrl("hero/aboutImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
