import React, { ReactNode } from "react";
import styles from "./circle.module.css";

type propsType = {
  children: ReactNode;
};
const Level: React.FC<propsType> = ({ children }) => {
  return (
    <div className={`flex items-stretch ${styles.levelBox} `}>{children}</div>
  );
};

export default Level;
