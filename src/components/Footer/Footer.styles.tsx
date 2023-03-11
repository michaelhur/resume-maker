import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
`;

export const StyledFooterSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100vw;

    background: var(--grey200);
    color: var(--grey900);

    & span {
        font-family: 'BM Hanna Pro';
        font-size: 12px;
        line-height: 3;
    }
`;
