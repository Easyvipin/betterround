import { toggleMode } from "@src/utils/toggleMode";
import * as React from "react";

interface IThemeToggleProps {}

const ThemeToggle: React.FunctionComponent<IThemeToggleProps> = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          toggleMode("dark");
        }}
      >
        dark
      </button>
      <button
        onClick={() => {
          toggleMode("light");
        }}
      >
        light
      </button>
    </div>
  );
};

export default ThemeToggle;
