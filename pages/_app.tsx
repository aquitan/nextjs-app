import '/styles/globals.css'
import Head from 'next/head';
import Layout from '../components/Layout';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }:AppProps) => {
	
	return (
		<Layout>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
			</Head>
			<Component {...pageProps} />
		</Layout>
	)
}
export default App;