import React, { ReactNode } from "react";
type propsType = {
  children: ReactNode;
};
const Container: React.FC<propsType> = ({ children }) => {
  return <div className="container mx-auto max-w-7xl">{children}</div>;
};

export default Container;
