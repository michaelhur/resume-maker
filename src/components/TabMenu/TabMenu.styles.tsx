import styled from '@emotion/styled';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
`;

interface StyledTabProps extends NavLinkProps {
    size: 'small' | 'large';
    position: 'all' | 'bottom';
}

export const StyledTab = styled(NavLink)(
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',

        flex: '1 0 0',

        color: 'var(--grey500)',
        borderColor: 'var(--grey300)',
        borderStyle: 'solid',
        borderCollapse: 'collapse',

        '&.active, :hover, :active': {
            fontWeight: '600',
            color: 'var(--primary500)',
            borderColor: 'var(--primary500)',
        },
    },
    ({ size, position }: StyledTabProps) => ({
        fontSize: size === 'large' ? '16px' : '12px',
        padding: size === 'large' ? '24px 16px' : '16px 8px',
        borderWidth: position === 'all' ? '1px' : '0 0 1px 0',
    }),
);
