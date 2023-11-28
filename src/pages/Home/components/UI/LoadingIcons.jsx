import React from "react";
import styles from "./LoadingIcons.module.css";

export default function LoadingIcons() {
  return (
    <div className={styles.loading_screen}>
      <i className="fas fa-spinner fa-spin fa-3x"></i>
    </div>
  );
}
