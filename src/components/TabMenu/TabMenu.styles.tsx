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
}

export const StyledTab = styled(NavLink)(
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        '& .active': {
            color: 'var(--primary500)',
            borderBottom: '1px solid var(--primary500)',
        },
    },
    ({ size }: StyledTabProps) => ({
        fontSize: size === 'large' ? '16px' : '12px',
        padding: size === 'large' ? '24px 16px' : '16px 8px',
    }),
);
