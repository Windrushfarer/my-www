import { AnchorHTMLAttributes, FC } from 'react'
import { default as NextLink } from "next/link"

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

function isInternalHref(url: string): boolean {
  return url.startsWith("/");
}

export const Link: FC<Props> = ({ href, ...props }) => {
  if (isInternalHref(href)) {
    return (
      <NextLink href={href}>
        <a {...props} />
      </NextLink>
    );
  }

  return (
    <a href={href} {...props} />
  )
}