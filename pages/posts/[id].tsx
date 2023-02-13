import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import PostInfo from "../../components/PostInfo";
import { postType } from "../../types";


type postProps = {
    post: postType
}

export const getStaticPaths:GetStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
	
    const paths = data.map(({id}) => {
        return {params: {id: id.toString()}}
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps:GetStaticProps = async (context) => {
    const {id} = context.params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { post: data }
    }
}

const Post:FC<postProps> = ({post}) => {
    
	return (
		<>
            <Head>
                <title>Post</title>
            </Head>
			<div>
				<PostInfo post={post} />
			</div>
		</>
	)
}

export default Post;