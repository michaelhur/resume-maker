import styled from '@emotion/styled';

interface ItemSpanProps {
    fontsize: number | string;
    color: string;
}

export const ItemWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0px;
`;

export const ItemSpan = styled.span<ItemSpanProps>`
    font-size: ${(props) => props.fontsize};
    color: ${(props) => props.color};
`;
