import React, { ReactNode } from "react";
type propsType = {
  children: ReactNode;
};
const Row: React.FC<propsType> = ({ children }) => {
  return <div className="grid grid-cols-12 gap-1">{children}</div>;
};

export default Row;
