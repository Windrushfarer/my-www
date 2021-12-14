import { FC } from 'react'

import { PostMeta } from '@shared/types/post';
import { Recent } from '@components/Recent';
import { Content } from '@components/Content';
import { Hero } from '@components/Hero';
import { StickyWrapper } from '@components/Header';
import { Bio } from '@components/Bio';

type Props = {
  posts: PostMeta[];
};

export const Main: FC<Props> = ({ posts }) => {
  return (
    <>
      <Hero>
        <Content>
          <Bio />
        </Content>
      </Hero>

      <StickyWrapper />

      <Content>
        <Recent posts={posts} />
      </Content>
    </>
  )
}
