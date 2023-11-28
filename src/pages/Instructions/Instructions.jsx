import React from "react";
import styles from "./Instructions.module.css";

export default function Instructions() {
  return (
    <div>
      <h1>1. JOIN SCRATCH</h1>
      <div className={styles.main_div}>
        <p>
          If you haven't used Scratch before , you will need to join Scratch
          first. Go to https://scratch.mit.edu. Click on Join Scratch.
        </p>
        <div className={styles.images_div}>
          <img
            src="/images/projects/Project01-instructions.png"
            alt="Join Scratch"
          />
        </div>
        <p>
          Follow the instructions to join. You will need a username and a
          password that you will remember. If possible, you should also verify
          your email address so that you can share projects later. Ask your
          teacher to help with this step if you don't have an email address, or
          if you are not sure what to do.
        </p>{" "}
      </div>
    </div>
  );
}
