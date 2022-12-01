"use client";

import Typography from "src/components/Typography";
import Wrapper from "src/components/Wrapper";
// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage() {
	return (
		<Wrapper cn="flex flex-col items-center">
			<Typography variant="h1">This is the home page</Typography>
		</Wrapper>
	);
}
