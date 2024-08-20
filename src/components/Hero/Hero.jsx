import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm ANISH</h1>
        <p className={styles.description}>
        I'm a full-stack developer with experience in React and various technologies including Machine Learning, Deep Learning, and Computer Vision. I specialize in building robust applications and integrating AI solutions. Reach out if you’d like to learn more about my work and expertise!


        </p>
        <a href="mailto:anishharsh1971@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
