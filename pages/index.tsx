import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import cls from '../styles/Home.module.scss'

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.API_HOST}/socials`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { socials: data }
    }
}


const Home = ({socials}) => {
	
	return (
		<div className={cls.wrapper}>
			<Head>
                <title>Home</title>
            </Head>
			<div>
				<Heading text='Next.js Application'/>
				<Socials socials={socials} />
			</div>
		</div>
	)
}

export default Home;
