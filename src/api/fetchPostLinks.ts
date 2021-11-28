import path from 'path'
import fs from 'fs'
import parser from 'gray-matter'

import { POSTS_DIR } from './const'
import { mdxOnly } from './utils/mdxOnly'

export async function fetchPostLinks() {
  const posts = fs
    .readdirSync(POSTS_DIR)
    .filter(mdxOnly)
    .map(filename => {
      const filePath = path.join(POSTS_DIR, filename)

      return fs.readFileSync(filePath, "utf-8")
    })

  const metas = [];

  posts.forEach(post => {
    const meta = parser(post).data
    metas.push(meta);
  })

  return metas;
}
