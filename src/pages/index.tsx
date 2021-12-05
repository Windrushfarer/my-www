import { GetStaticProps } from 'next'
import Head from "next/head"
import { fetchRecentPosts } from '@api/fetchRecentPosts'
import { PostMeta } from '@shared/types/post';
import { Recent } from '@components/Recent';
import { Bio } from '@components/Bio';

type Props = {
  posts: PostMeta[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: await fetchRecentPosts(),
    },
  };
}

const Main = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Любите котов, а не баги</title>
        <meta name="description" content="Коты и баги" />
      </Head>

      <Bio />

      <Recent posts={posts} />
    </>
  )
}

export default Main
