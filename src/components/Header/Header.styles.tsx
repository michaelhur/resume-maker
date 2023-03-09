import styled from '@emotion/styled';
import { TabMenu } from '@components/TabMenu/TabMenu';

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ProfileCoverImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    //max-height: 250px;

    & img {
        width: 100vw;
        max-height: 250px;
        object-fit: cover;
    }
`;

export const ProfileSummaryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    padding: 16px;

    width: 100%;

    margin-top: -56px;
`;

export const ProfileImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 200px;
    height: 200px;

    border: 4px solid var(--grey50);
    border-radius: 50%;

    flex-shrink: 0;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        border-radius: 50%;
    }
`;

export const ProfileSummarySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;

    width: 100%;
`;

export const ProfileSummaryTopSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    padding-top: 72px;
`;

export const ProfileSummaryMidSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const ProfileSummaryBottomSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    gap: 8px;
`;

export const DisplayName = styled.h2`
    font-family: 'BMHANNAPro';
    font-size: 30px;
    color: var(--grey900);
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
`;

export const ProfileBio = styled.span`
    color: var(--grey700);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
    //flex-shrink: 1;

    @media (max-width: 600px) {
        -webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3;

        text-align: center;
    }
`;
