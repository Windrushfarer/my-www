const extenstion = 'mdx'

export function onlyMdx(filename: string) {
  return filename.endsWith(`.${extenstion}`)
}

export function mdxExtension(filename: string) {
  return `${filename}.${extenstion}`
}

export function removeMdxExtension(filename: string) {
  return filename.replace(`.${extenstion}`, '')
}