import { InputHTMLAttributes } from "react";
import classnames from "classnames";
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	cn?: string;
}
export default function TextField({ children, cn, ...props }: TextFieldProps) {
	return (
		<input className={classnames("", { [`${cn}`]: cn })} {...props}>
			{children}
		</input>
	);
}
