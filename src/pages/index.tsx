import React from 'react';
import Head from 'next/head';
import Feedback from '@components/Feedback';

const Index: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-2">
			<Head>
				<title>Statecharts demo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center flex-1 py-20">
				<Feedback />
			</main>
		</div>
	);
};

export default Index;
