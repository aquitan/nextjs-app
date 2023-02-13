import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import ContactInfo from "../../components/ContactInfo";
import { contactType } from "../../types";

type contactProps = {
	contact: contactType
}

export const getServerSideProps:GetServerSideProps = async ({params}) => {
	console.log('context', params)
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const contact = await res.json()
	

	return {
		props: {contact}
	}
}

const Contact:FC<contactProps> = ({contact}) => {
	return (
		<>
            <Head>
                <title>Contact</title>
            </Head>
			<div>
				<ContactInfo contact={contact} />
			</div>
		</>
	)
}

export default Contact;