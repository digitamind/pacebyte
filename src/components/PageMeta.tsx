import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

const baseUrl = import.meta.env.VITE_BASE_URL || 'https://pacebyte.com';

export const PageMeta = ({ title, description, path = '', ogImage = '/og-image.png' }: PageMetaProps) => {
  const fullTitle = path === '/' ? title : `${title} | Pacebyte`;
  const url = `${baseUrl}${path}`;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
