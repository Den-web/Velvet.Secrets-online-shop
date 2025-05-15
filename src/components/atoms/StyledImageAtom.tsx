import React from 'react';
import { Image as AntImage } from "antd";
import fallback from '../../assets/imagesSection2/image2@2x.jpg';

interface StyledImageAtomProps {
    src: string;
    alt: string;
    className?: string;
    wrapperClassName?: string;
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const StyledImageAtom: React.FC<StyledImageAtomProps> = ({
    src,
    alt,
    className = "h-full w-full object-cover object-center",
    wrapperClassName = "aspect-w-3 aspect-h-4 w-full overflow-hidden",
    onError,
}) => {
return (
    <div className={wrapperClassName}>
        <AntImage
        src={src}
        alt={alt}
        className={`${className} transition-transform duration-300 group-hover:scale-105`}
        preview={false}
        fallback={fallback}
        onError={onError}
        />
    </div>
);
}