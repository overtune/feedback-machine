import '../styles/globals.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
	require('../../mocks');
}

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
