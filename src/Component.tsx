import React from "react";
import css from "./Component.less";

export interface DashedButtonProps {
  onClick?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

export const Component = (props: DashedButtonProps) => {
  return (
    <button onClick={props.onClick} className={css.dashedButton}>
      {props.children}
    </button>
  );
};

export default Component;
