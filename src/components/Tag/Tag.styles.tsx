import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface StyledTagProps {
    size: string;
}

export const lineStyle = css`
    color: var(--primary500);
    background: var(--grey50);
    border: 1px solid var(--primary500);

    & span {
        color: var(--primary300);
    }

    & svg {
        fill: var(--primary500);
    }
`;

export const onStyle = css`
    color: var(--grey0);
    background: var(--primary500);
    border: 1px solid transparent;

    & span {
        color: var(--yellow);
    }

    & svg {
        fill: var(--grey0);
    }
`;

export const offStyle = css`
    color: var(--primary800);
    background: var(--primary100);
    border: 1px solid transparent;

    & span {
        color: var(--primary500);
    }

    & svg {
        fill: var(--primary800);
    }
`;

export const StyledTag = styled.span(
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        margin: '0',

        lineHeight: '1.5',
    },
    ({ size }: StyledTagProps) => ({
        fontSize: size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px',
        padding: size === 'large' ? '0 24px' : size === 'medium' ? '4px 16px' : '3px 12px',
        gap: size === 'small' ? '2px' : '4px',
        borderRadius: size === 'large' ? '48px' : size === 'medium' ? '40px' : '32px',

        '& span': {
            fontSize: size === 'large' ? '10px' : size === 'medium' ? '8px' : '6px',
        },

        '& svg': {
            width: size === 'small' ? '16px' : '24px',
            height: size === 'small' ? '16px' : '24px',
        },
    }),
);
