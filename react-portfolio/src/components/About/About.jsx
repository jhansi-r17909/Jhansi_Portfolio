import React from "react";

import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p style={{fontSize:"19px"}}>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
                I have honed my expertise in a range of essential technologies, 
                including ReactJS, JavaScript, TypeScript, CSS, Bootstrap, and HTML. 
                I am well-versed in version control using GitHub, and proficient in
                project management tools such as Jira. 
                Currently contributing my skills at Cloudeq, I am entrusted with the frontend 
                responsibilities for a high-profile MCD project
                Through this experience, I have gained valuable insights into advanced concepts like
                 context management, and the utilization of React Form Hooks. 
                 A strong history of leading diverse web development teams and projects for enterprise customers. Adept at driving innovation to deliver a world-class UI.
              </p>
            </div>
          </li>
          
          
        </ul>
      </div>
    </section>
  );
};
