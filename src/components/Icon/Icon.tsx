import SVG, { Props as SVGProps } from 'react-inlinesvg';
import styled from '@emotion/styled';

interface IconProps {
    name: string;
    size?: number | string;
    color?: string;
    hoverable?: boolean;
}

interface StyledSVGProps extends SVGProps {
    fill: string;
    hoverable: number;
}

export const Icon = ({ name, size = 24, color = 'var(--grey900)', hoverable = true }: IconProps) => {
    const svgPath = `./assets/icons/${name}.svg`;

    // Emotion이 Transient Props를 지원하지 않아서 1, 0으로 변환하여 보냄.
    const hoverableProp = hoverable ? 1 : 0;
    return <StyledSVG src={svgPath} height={size} width={size} fill={color} hoverable={hoverableProp} />;
};

const StyledSVG = styled(SVG)(
    {
        '&:active, .active': {
            fill: 'var(--primary500)',
        },
    },
    ({ fill, hoverable }: StyledSVGProps) => ({
        '&:hover': {
            fill: !hoverable ? 'var(--primary500)' : fill,
        },
    }),
);
