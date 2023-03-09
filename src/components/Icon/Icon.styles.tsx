import styled from '@emotion/styled';
import SVG from 'react-inlinesvg';

export const HoverableSVG = styled(SVG)`
    &.active,
    :active {
        color: var(--primary500);
    }
`;
