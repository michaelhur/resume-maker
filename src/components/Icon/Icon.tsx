import SVG from 'react-inlinesvg';

interface IconProps {
    name: string;
    size?: number | string;
    color?: string;
}

export const Icon = ({ name, size = 24, color = 'var(--grey900)' }: IconProps) => {
    const svgPath = `./assets/icons/${name}.svg`;
    return <SVG src={svgPath} height={size} width={size} fill={color} />;
};
