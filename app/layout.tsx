import "globals.css";

import Header from "src/components/Header";
import Wrapper from "src/components/Wrapper";

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body>
				<Header />
				<Wrapper cn="flex flex-col justify-center items-center w-full h-full">
					{children}
				</Wrapper>
			</body>
		</html>
	);
}
