import React from "react";
import styles from "./LearningObjectives.module.css";

export default function learningObjectives() {
  return (
    <div className={styles.main_div}>
      <h2>Explore Scratch blocks</h2>
      <p>
        Learn the basic function of some basic scratch blocks such as "say,"
        wait," "go to" and
      </p>
      <div className={styles.images_div}>
        <div className={styles.img_block}>
          <p>Control Blocks</p>
          <div className={styles.inner_img}>
            <img
              src="/images/projects/Project01-obj1.png"
              alt="Control Blocks 1"
            />
            <img
              className={styles.right_img_1}
              src="/images/projects/Project01-obj2.png"
              alt="Control Blocks 2"
            />
          </div>
        </div>
        <div className={styles.images_div}>
          <p>Motion Blocks</p>
          <div className={styles.img_block}>
            <img
              src="/images/projects/Project01-obj3.png"
              alt="Motion Blocks 1"
            />
            <img
              className={styles.right_img_1}
              src="/images/projects/Project01-obj4.png"
              alt="Motion Blocks 2"
            />
          </div>
          <div className={styles.img_block}>
            <p>Look Blocks</p>
            <div className={styles.inner_img}>
              <img
                src="/images/projects/Project01-obj5.png"
                alt="Look Blocks 1"
              />
              <img
                className={styles.right_img_1}
                src="/images/projects/Project01-obj6.png"
                alt="Look Blocks 2"
              />
            </div>
          </div>
          <div className={styles.img_block}>
            <p>Look Blocks</p>
            <div className={styles.inner_img}>
              <img alt="Look Blocks 3" />
              <img alt="Look Blocks 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
