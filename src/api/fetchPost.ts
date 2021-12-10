import path from 'path'
import fs from 'fs'
import { parseContent } from '@content/parse'

import { POSTS_DIR } from './const'
import { mdxExtension } from './utils/mdx'

export async function fetchPost(id: string): Promise<string> {
  const filename = mdxExtension(id)
  const rawContent = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8")

  return await parseContent(rawContent)
}
