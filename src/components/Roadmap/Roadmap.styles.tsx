import styled from '@emotion/styled';

export const RoadmapItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 0px 16px 16px;
    gap: 8px;

    border-left: 1px solid var(--primary100);

    & svg {
        transform: translateX(-21.5px);
        flex: 0 0 10px;
    }
`;

export const RoadmapDetailWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const RoadmapDetailSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    gap: 0px;

    width: 100%;
`;

export const RoadmapTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: var(--primary500);
`;

export const RoadmapSubTitle = styled.span`
    font-size: 18px;
    color: var(-grey1000);
`;

export const EduRoadmapDetail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    & span {
        font-size: 14px;
        color: var(--grey500);
    }
`;

export const CareerRoadmapDetail = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    & li {
        flex-wrap: wrap;

        & span {
            font-size: 14px;
            color: var(--grey500);
            line-height: 1;
        }
    }
`;

export const RoadmapTagSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    width: 100%;
    margin: 0;
`;
