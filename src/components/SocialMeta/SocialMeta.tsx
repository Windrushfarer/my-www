import { FC } from 'react'

type Props = {
  title: string
  description: string
}

const PREVIEW_URL = 'https://catsandbugs.com/image/preview.png'

export const SocialMeta: FC<Props> = ({ title, description }) => {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={PREVIEW_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bespoyasov" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={PREVIEW_URL} />
    </>
  )
}
