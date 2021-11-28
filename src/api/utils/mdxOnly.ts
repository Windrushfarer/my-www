const extenstion = 'mdx'

export function mdxOnly(filename: string) {
  return filename.endsWith(`.${extenstion}`)
}