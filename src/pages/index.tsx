import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import { GetStaticProps } from 'next';
import { genericPageModel } from 'types/generic-page';
const { publicRuntimeConfig } = getConfig();

interface Props {
	data: genericPageModel; 
}

const Index: React.FC<Props> = ({ data }) => {
	const { links } = data;
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center flex-1 py-20">
				<h1 className="mb-6 text-6xl font-bold">
					Welcome to{' '}
					<a
						href="https://nextjs.org"
						className="text-blue-600 hover:underline"
					>
						Next.js!
					</a>
				</h1>

				<p className="text-2xl text-center">
					Get started by editing{' '}
					<code className="p-3 text-base bg-gray-100 rounded">
						pages/index.js
					</code>
				</p>

				<div className="max-w-3xl mt-20 grid grid-flow-col grid-cols-2 transition-colors grid-rows-2">
					{links.map(link => (
						<a
							href={link.url}
							className="inline-block p-6 m-4 text-left border border-gray-200 rounded-lg transition-colors hover:border-blue-600 group"
							key={link.url}
						>
							<h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-600">
								{link.heading} &rarr;
							</h2>
							<p className="text-xl">{link.description}</p>
						</a>
					))}
				</div>
			</main>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const apiHost =
		publicRuntimeConfig?.NEXT_PUBLIC_API_HOST ||
		process.env.NEXT_PUBLIC_API_HOST;
	const apiEndpoint =
		publicRuntimeConfig?.NEXT_PUBLIC_API_ENDPOINT ||
		process.env.NEXT_PUBLIC_API_ENDPOINT;

	let slug = context?.params?.slug;

	slug = Array.isArray(slug) ? slug.join('/') : slug;

	if (!slug) {
		slug = 'index';
	}

	const url = `${apiHost}${apiEndpoint}${slug}`;

	const res = await fetch(url);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
};

export default Index;
