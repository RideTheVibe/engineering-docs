"use client";

import { useTheme } from "next-themes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';

interface OwnProps {
    lightImage: StaticImport | string;
    darkImage: StaticImport | string;
    width?: number;
    height?: number;
}

export const ImageProvider = ({ lightImage, darkImage, width, height }: OwnProps) => {
    // eslint-disable-next-line prefer-const
    let { theme, systemTheme } = useTheme();

    if (theme === "system") {
        theme = systemTheme;
    }

    const src = theme === "dark" ? darkImage : lightImage;

    return <ImageZoom src={src} alt={"Image "} width={width} height={height} />;
};

export default ImageProvider;