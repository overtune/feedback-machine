import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const DataDebugger: React.FC = ({ ...props }) => {
	return (
		<>
			<Head>
				<link
					href="https://unpkg.com/prismjs@1.23.0/themes/prism.css"
					rel="stylesheet"
				/>
				<link
					href="https://unpkg.com/prism-js-fold@1.0.1/prism-js-fold.css"
					rel="stylesheet"
				/>
			</Head>

			<Script src="https://unpkg.com/prismjs@1.23.0/components/prism-core.min.js"></Script>
			<Script src="https://unpkg.com/prismjs@1.23.0/plugins/keep-markup/prism-keep-markup.min.js"></Script>
			<Script src="https://unpkg.com/prismjs@1.23.0/plugins/autoloader/prism-autoloader.min.js"></Script>
			<Script src="https://unpkg.com/prism-js-fold@1.0.1/prism-js-fold.js"></Script>

			<pre className="language-json">
				<code className="language-json">
					{JSON.stringify(props, null, '\t')}
				</code>
			</pre>
		</>
	);
};

export default DataDebugger;
