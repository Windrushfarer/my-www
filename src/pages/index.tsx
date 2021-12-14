import { GetStaticProps } from 'next'
import Head from "next/head"
import { fetchPostsMeta } from '@api/fetchPostsMeta'
import { PostMeta } from '@shared/types/post';
import { Recent } from '@components/Recent';
import { Bio } from '@components/Bio';
import { Main } from '@components/Main';

type Props = {
  posts: PostMeta[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: await fetchPostsMeta(),
    },
  };
}

const Index = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Любите котов, а не баги</title>
        <meta name="description" content="Коты и баги" />
      </Head>

      <Main posts={posts} />
    </>
  )
}

export default Index
