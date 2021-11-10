import { rest } from 'msw';

const apiHost = process.env.NEXT_PUBLIC_API_HOST;
const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const handlers = [
	// We need an absolute address to use mock when using getServerSideProps
	rest.get(`${apiHost}${apiEndpoint}index`, (_req, res, ctx) => {
		return res(
			ctx.json({
				links: [
					{
						heading: 'Documentation',
						description:
							'Find in-depth information about Next.js features and API.',
						url: 'https://nextjs.org/docs',
					},
					{
						heading: 'Learn',
						description:
							'Learn about Next.js in an interactive course with quizzes!',
						url: 'https://nextjs.org/learn',
					},
					{
						heading: 'Examples',
						description:
							'Discover and deploy boilerplate example Next.js projects.',
						url:
							'https://github.com/vercel/next.js/tree/master/examples',
					},
					{
						heading: 'Deploy',
						description:
							'Instantly deploy your Next.js site to a public URL with Vercel.',
						url:
							'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
					},
				],
			})
		);
	}),
];
