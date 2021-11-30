import { GetStaticProps } from 'next'
import Head from "next/head"
import { fetchRecentPosts } from '@api/fetchRecentPosts'
import { PostMeta } from '@shared/types/post';
import { Section } from '@components/Section';
import { Hero } from '@components/Hero';

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

const Main = ({ posts }: Props) => (
  <>
    <Head>
      <title>Любите котов, а не баги</title>
      <meta name="description" content="Коты и баги" />
    </Head>

    <Hero />

    <Section title="За последнее время">
      Посты
    </Section>

    {/* <ul> */}
    {/* {links.map(item => (
        <li key={item.slug} >{item.title}</li>
      ))} */}
    {/* </ul> */}
  </>
);

export default Main
