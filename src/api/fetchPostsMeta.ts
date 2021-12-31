import path from 'path'
import fs from 'fs'
import parser from 'gray-matter'

import { POSTS_DIR } from './const'
import { onlyMdx } from './utils/mdx'
import { PostMeta } from '@shared/types/post'

export async function fetchPostsMeta(): Promise<PostMeta[]> {
  const posts = fs
    .readdirSync(POSTS_DIR)
    .filter(onlyMdx)
    .map(filename => {
      const filePath = path.join(POSTS_DIR, filename)

      return fs.readFileSync(filePath, "utf-8")
    })

  const metas: PostMeta[] = [];

  posts.forEach(post => {
    const meta = parser(post).data as PostMeta

    metas.push(meta)
  })

  metas.sort((a, b) => new Date(b.date) - new Date(a.date))

  return metas
}