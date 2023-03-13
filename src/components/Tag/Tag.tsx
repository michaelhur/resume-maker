import { lineStyle, offStyle, onStyle, StyledTag } from '@components/Tag/Tag.styles';
import { Icon } from '@components/Icon/Icon';

interface TagProps {
    keyword: string;
    size: 'small' | 'medium' | 'large';
    theme: 'lineStyle' | 'onStyle' | 'offStyle';
    label?: string;
    closeButton?: boolean;
}

export const Tag = ({ keyword, size, theme, closeButton, label }: TagProps) => {
    const themeCss = theme === 'lineStyle' ? lineStyle : theme === 'onStyle' ? onStyle : offStyle;

    return (
        <StyledTag css={themeCss} size={size}>
            {keyword}
            {label && <span>{label}</span>}
            {closeButton && <Icon name={'Action/close'} />}
        </StyledTag>
    );
};
