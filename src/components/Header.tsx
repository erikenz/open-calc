import Burger from "./icons/Burger";
import Link from "next/link";
import classnames from "classnames";
interface HeaderProps {
	children?: React.ReactNode;
	cn?: string;
}
export default function Header({ children, cn, ...props }: HeaderProps) {
	return (
		<header
			className={classnames(
				"h-14 bg-slate-700 flex justify-between items-center w-full",
				{
					[`${cn}`]: cn,
				}
			)}
			{...props}>
			<Burger />
			<Link
				href="/"
				className="text-slate-300 h-full flex items-center justify-center">
				OpenCalc
			</Link>
		</header>
	);
}
