import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

export interface Props extends ImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const ImageWithFallback = ({
  fallbackSrc = '/icons/default-fallback.svg',
  src,
  alt,
  ...rest
}: Props) => {
  const [error, setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={setError}
      {...rest}
    />
  );
};

export { ImageWithFallback };
