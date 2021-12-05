import { GetStaticProps } from 'next'
import Head from "next/head"
import { fetchRecentPosts } from '@api/fetchRecentPosts'
import { PostMeta } from '@shared/types/post';
import { Section } from '@components/Section';
import { Hero } from '@components/Hero';
import { Recent } from '@components/Recent';

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

      <Hero />

      <Recent posts={posts} />
    </>
  )
}

export default Main
