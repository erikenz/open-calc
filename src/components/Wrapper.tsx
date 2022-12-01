import classnames from "classnames";
interface WrapperProps {
	children?: React.ReactNode;
	cn?: string;
}
export default function Wrapper({ children, cn, ...props }: WrapperProps) {
	return (
		<div className={classnames("", { [`${cn}`]: cn })} {...props}>
			{children}
		</div>
	);
}
