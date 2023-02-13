import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import Heading from "../../components/Heading";
import { contactType } from "../../types";

type contactsTypeProps = {
    contacts: [contactType]
}

export const getStaticProps:GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { contacts: data }
    }
}

const Contacts:FC<contactsTypeProps> = ({ contacts }) => {
	return (
		<>
            <Head>
                <title>Contacts</title>
            </Head>
            <div>
                <Heading text='Contacts list:' />
                <ul>
                    {contacts && contacts.map(({name, id, email}) => (
                        <li key={id}>
                            <Link href={`/contacts/${id}`} id={id}>{name} ({email})</Link>
                        </li>
                    ))}
                </ul>
            </div>
		</>
	)
}

export default Contacts;