// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	message: string;
};

const resolver = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
	setTimeout(() => {
		res.status(200).json({ message: 'Feedback saved' });
	}, 2000);
};

export default resolver;
