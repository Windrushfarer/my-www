import { AnchorHTMLAttributes, FC } from 'react'
import { default as NextLink } from "next/link"
import styles from './Link.module.css'

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

function isInternalHref(url: string): boolean {
  return url.startsWith("/");
}

export const Link: FC<Props> = ({ href, ...props }) => {
  if (isInternalHref(href)) {
    return (
      <NextLink href={href}>
        <a className={styles.link} {...props} />
      </NextLink>
    );
  }

  return (
    <a href={href} className={styles.link}  {...props} />
  )
}