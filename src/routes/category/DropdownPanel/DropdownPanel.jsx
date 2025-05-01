import React from "react";
import Panel from "../../../components/panel/panel-component.jsx";
import "../../global.css";
import styles from "./DropdownPanel.module.css";

export default function DropdownPanel({ showPanel, arrayWithStars }) {
  if (!showPanel) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Panel items={arrayWithStars} />
    </div>
  );
}
