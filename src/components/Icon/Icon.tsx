import SVG from 'react-inlinesvg';
import React from 'react';
import { HoverableSVG } from '@components/Icon/Icon.styles';

interface IconProps {
    name: string;
    size?: number | string;
    color?: string;
    hoverable?: boolean;
}

export const Icon = ({ name, size = 24, color = 'var(--grey900)', hoverable = true }: IconProps) => {
    const svgPath = `./assets/icons/${name}.svg`;

    // TODO: Make it one component 'StyledSVG' and make 'hoverable' a prop.
    if (hoverable) return <SVG src={svgPath} height={size} width={size} fill={color} />;
    return <HoverableSVG src={svgPath} height={size} width={size} fill={color} />;
};
