import React, { ReactNode } from "react";
import styles from "./circle.module.css";
type propsType = {
  children: ReactNode;
};
const Circle: React.FC<propsType> = ({ children }) => {
  const attributes = {};
  return (
    <div className={`grow flex flex-col ${styles.pathBox}`}>
      <div className={`flex justify-center pathSection  ${styles.path}`}>
        <span className="grow"></span>
        <span className="grow"></span>
      </div>
      <div className="flex justify-center">
        <div className="rounded-full w-10 h-10  border-2 border-blue-500 bg-blue-100">
          <div className="flex text-center justify-items-center content-center  justify-center text-blue-700	">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
