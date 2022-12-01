import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(`🚀 ~ file: solve-equation.ts ~ line 4 ~ handler ~ req`, req);

	res.status(200).json({ result: "expression/number" });
}
