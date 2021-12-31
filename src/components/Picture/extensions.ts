const exentions = ['webp', 'avif', 'png', 'jpg', 'jpeg'] as const;

type Extension = typeof exentions[number]

export function setExtension(src: string, newExtension: Extension) {
  const current = new RegExp(exentions.join('|'), 'i')

  return src.replace(current, newExtension)
}