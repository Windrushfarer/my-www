import { setExtension } from "./extensions";
import styles from "./Picture.module.css";

type Props = {
  src: string
  alt: string
  caption?: string
}

export const Picture = ({ src, alt, caption }: Props) => {
  return (
    <figure className={styles.wrapper}>
      <picture className={styles.picture}>
        <source srcSet={setExtension(src, 'avif')} type="image/avif" />
        <source srcSet={setExtension(src, 'webp')} type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.image}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
      </picture>
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  );
};
