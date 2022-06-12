import React from "react";
import Component from "./Component";

export const Example = () => {
  return (
    <div>
      <Component
        onClick={() => {
          alert("link button clicked");
        }}
      >
        Link Button
      </Component>
    </div>
  );
};

export default Example;
