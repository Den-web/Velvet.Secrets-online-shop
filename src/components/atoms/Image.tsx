import React from 'react';
import { Image as AntImage } from 'antd';
import fallback from '../../assets/imagesSection2/image2@2x.jpg';

interface ImageProps extends React.ComponentProps<typeof AntImage> {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className, ...rest }) => (
  <AntImage
    src={src}
    alt={alt}
    className={className}
    preview={false}
    fallback={fallback as string}
    {...rest}
  />
);
