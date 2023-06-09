import Footer from '@/src/components/footer/Footer';
import NavBar from '@/src/components/navbar/NavBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}
