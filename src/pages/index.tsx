import { GetStaticProps } from 'next'
import Head from "next/head"
import { fetchPostLinks } from '@api/fetchPostLinks'

type Props = {
  links: any[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      links: await fetchPostLinks(),
    },
  };
}

const Main = ({ links }: Props) => (
  <>
    <Head>
      <title>Любите котов, а не баги</title>
      <meta name="description" content="Коты и баги" />
    </Head>

    <ul>
      {/* {links.map(item => (
        <li key={item.slug} >{item.title}</li>
      ))} */}
    </ul>
  </>
);

export default Main
