import { Color, TypographyVariant } from "./index";

import classnames from "classnames";

interface Props {
	children?: React.ReactNode;
	cn?: string;
	variant: TypographyVariant;
}

export default function Typography({ children, cn, variant, ...props }: Props) {
	const Tag = variant;
	return (
		<Tag {...props} className={classnames("", { [`${cn}`]: cn })}>
			{children}
		</Tag>
	);
}
