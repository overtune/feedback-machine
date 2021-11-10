import '../styles/globals.css';
import { inspect } from '@xstate/inspect';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
	require('../../mocks');
}

if (process?.env?.NEXT_PUBLIC_XSTATE_INSPECTOR === 'true' && typeof window !== 'undefined') {
	inspect({
		url: 'https://statecharts.io/inspect',
		iframe: false,
	});
}

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
