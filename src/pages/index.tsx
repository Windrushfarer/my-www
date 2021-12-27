import { GetStaticProps } from 'next'
import Head from "next/head"
import { fetchPostsMeta } from '@api/fetchPostsMeta'
import { PostMeta } from '@shared/types/post'
import { Main } from '@components/Main'
import { SocialMeta } from '@components/SocialMeta'

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

        <SocialMeta
          title="Коты и баги"
          description="Разработка, баги, коты и игры"
        />
      </Head>

      <Main posts={posts} />
    </>
  )
}

export default Index
