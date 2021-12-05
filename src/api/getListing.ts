import path from 'path'
import fs from 'fs'
import { POSTS_DIR } from './const';
import { onlyMdx, removeMdxExtension } from './utils/mdx';

export function getListing() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter(onlyMdx)
    .map(removeMdxExtension)
}