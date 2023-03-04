import React, { ReactNode } from "react";

type colType = {
  sx: number;
  md?: number;
  lg?: number;
};
type propsType = {
  children: ReactNode;
  className?: string;
  cols: colType;
};

const Col: React.FC<propsType> = ({ children, cols, className = "" }) => {
  const allCols = (
    <div className="col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12">
      class for xs size
    </div>
  );
  var allColsString = [];
  allColsString.push("col-span-" + cols.sx);
  if (!!cols.md) {
    allColsString.push("md:col-span-" + cols.md);
  }
  if (!!cols.lg) {
    allColsString.push("md:col-span-" + cols.lg);
  }
  const colsClassName = allColsString.join(" ");
  return <div className={`${colsClassName} ${className}`}>{children}</div>;
};

export default Col;
