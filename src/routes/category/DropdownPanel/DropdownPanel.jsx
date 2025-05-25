import React from "react";
import Panel from "../../../components/panel/panel-component.jsx";
import "../../global.css";
import styles from "./DropdownPanel.module.css";

export default function DropdownPanel({ showPanel, arrayWithStars }) {
  if (!showPanel) {
    return null;
  }
  //drops up and down on button press
  return (
    <div className={styles.container}>
      <Panel items={arrayWithStars} />
    </div>
  );
}
