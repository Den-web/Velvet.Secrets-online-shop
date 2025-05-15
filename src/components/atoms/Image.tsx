import React from 'react';
import { Image as AntImage } from "antd";
import fallback from '../../assets/imagesSection2/image2@2x.jpg';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Image: React.FC<ImageProps> = ({
    src,
    alt,
    className,
    onError,
}) => {
return (
    <div>
        <AntImage
        src={src}
        alt={alt}
        className={className}
        preview={false}
        fallback={fallback}
        onError={onError}
        />
    </div>
);
}