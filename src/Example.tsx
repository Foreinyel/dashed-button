import React from "react";
import Component from "./Component";

export const Example = () => {
  return (
    <div>
      <Component
        onClick={() => {
          alert("dashed button clicked");
        }}
      >
        Dashed Button
      </Component>
    </div>
  );
};

export default Example;
