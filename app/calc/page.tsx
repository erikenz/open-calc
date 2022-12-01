import classnames from "classnames";
interface CalcHomeProps {
	children?: React.ReactNode;
	cn?: string;
}
export default function CalcHome({ children, cn, ...props }: CalcHomeProps) {
	return (
		<div className={classnames("", { [`cn`]: cn })} {...props}>
			{children}
		</div>
	);
}
