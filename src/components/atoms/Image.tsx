import React from 'react';
import { Image as AntImage } from 'antd';

interface ImageProps extends React.ComponentProps<typeof AntImage> {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  ...rest
}) => (
  <AntImage
    src={src}
    alt={alt}
    className={className}
    preview={false}
    {...rest}
  />
);
