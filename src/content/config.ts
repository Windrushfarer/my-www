import headingIds from 'rehype-slug';
import headingAnchors from 'rehype-autolink-headings';
import unwrapImages from 'remark-unwrap-images';
import * as typography from '@mavrin/remark-typograf'
import { SerializeOptions } from "next-mdx-remote/dist/types";

export const serializerOptions = {
  remarkPlugins: [
    unwrapImages,
    [
      typography,
      {
        locale: ['ru'],
        disableRule: ['*'],
        enableRule: ['common/nbsp/*', 'ru/nbsp/*'],
      },
    ],
  ],

  rehypePlugins: [
    headingIds,
    [
      headingAnchors,
      {
        behavior: 'wrap',
        content: [],
        properties: {
          className: 'anchor',
        },
      },
    ],
  ],
} as SerializeOptions
