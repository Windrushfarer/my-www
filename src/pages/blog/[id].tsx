import { GetStaticPaths, GetStaticProps } from 'next'
import Head from "next/head"
import { fetchPostsMeta } from '@api/fetchPostsMeta'
import { PostMeta } from '@shared/types/post';
import { fetchPost } from '@api/fetchPost';
import { Post } from '@components/Post';
import { getListing } from '@api/getListing';

type Props = {
  meta: PostMeta
  content: string
};

export const getStaticProps: GetStaticProps<Props> = async context => {
  const id = String(context.params.id)
  const posts = await fetchPostsMeta()
  const meta = posts.find(post => post.path.endsWith(id))

  return {
    props: {
      content: await fetchPost(id),
      meta,
    },
  };
}

export const getStaticPaths: GetStaticPaths = () => {
  const names = getListing();
  const paths = names.map(id => ({ params: { id } }));

  return { paths, fallback: false };
};

const PostPage = ({ content, meta }: Props) => {
  return (
    <>
      <Head>
        <title>Любите котов, а не баги</title>
        <meta name="description" content="Коты и баги" />
      </Head>

      <Post content={content} />
    </>
  )
}

export default PostPage
