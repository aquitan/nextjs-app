import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import Heading from "../../components/Heading";
import { postType } from "../../types";


type postsTypeProps = {
	posts: [postType]
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { posts: data }
    }
}


const Posts:FC<postsTypeProps> = ({posts}) => {
	return (
		<>
            <Head>
                <title>Posts</title>
            </Head>
			<div>
				<Heading text='Hello Posts!' />
				<ul>
					{	posts && posts.map(({id, title}) => (
							<li key={id}>
								<Link href={`/posts/${id}`}>
									{title}
								</Link>
							</li>
						) )
					}
				</ul>
			</div>

		</>
	)
}
export default Posts;