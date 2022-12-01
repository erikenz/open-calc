import { ButtonHTMLAttributes, ReactNode } from "react";

import { Color } from "./index";
import cn from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	/**	The color of the component. It supports both default and custom colors.*/
	color?: Color;
	/**Disables ripple effect */
	disableRipple?: boolean;
	endIcon?: ReactNode;
	/**If true, the button will take up the full width of its container. */
	fullWidth?: boolean;
	size?: "small" | "medium" | "large";
	/**Element placed before the children. */
	startIcon?: ReactNode;
	/**The variant to use. */
	variant?: "text" | "contained" | "outlined";
	iconButton?: ReactNode;
	loading?: boolean;
}

export default function Button({
	children,
	color = "primary",
	disableRipple = false,
	endIcon,
	fullWidth = false,
	iconButton,
	loading = false,
	size = "medium",
	startIcon,
	variant = "text",
	...props
}: ButtonProps) {
	return (
		<button
			type="button"
			className={cn("box-border rounded-md relative overflow-hidden", {
				[`text-${size}`]: size,
				// ["bg-info"]: color == "info",
				[`text-${color}`]: variant == "text",
				["absolute"]: !disableRipple,
			})}
			{...props}>
			{children}
		</button>
	);
}
//px-4 py-2 inline-flex justify-center rounded text-sm border shadow-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2
//disabled:opacity-65 disabled:cursor-not-allowed border-gray-300 bg-white hover:bg-gray-50 focus:ring-indigo-500 text-gray-700
/*
<!-- HTML !-->
<button class="button-9" role="button">Button 9</button>

.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}*/
