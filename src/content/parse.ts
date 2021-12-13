import parser from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { serializerOptions } from './config';

type ParsedContent = string

export async function parseContent(source: string): Promise<ParsedContent> {
  const { content } = parser(source)
  const { compiledSource } = await serialize(content, serializerOptions)

  return compiledSource
}