import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Heading from "../components/Heading";

const Error = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 3000)
	}, [])

	return (
		<>
			<Head>
                <title>404</title>
            </Head>
			<div>
				<Heading text='404' />
				<Heading tag='h2' text='Something went wrong...' />
			</div>
		</>
	)
}

export default Error;