import React from "react";
import Panel from "../../../components/panel/panel-component.jsx";
import "../../global.css";
import styles from "./DropdownPanel.module.css";

export default function DropdownPanel({ showPanel, arrayWithStars }) {
  if (!showPanel) {
    return null;
  }
  // Toggles element visibility with a slide up/down on button press
  return (
    <div className={styles.container}>
      <Panel items={arrayWithStars} />
    </div>
  );
}
