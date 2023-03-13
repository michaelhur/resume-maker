import { Icon } from '@components/Icon/Icon';
import * as Styled from './Roadmap.styles';
import { Tag } from '@components/Tag/Tag';
import { Degree, DegreeCategory } from '@typings/resume';

interface EduRoadmapProps {
    schoolName: string;
    startDate: string;
    endDate: string;
    isAttending: boolean;
    major: string;
    degree: DegreeCategory;
}

interface CareerRoadmapProps {
    companyName: string;
    startDate: string;
    endDate: string;
    isWorking: boolean;
    position: string;
    description?: string;
}

export const EduRoadmap = ({ schoolName, startDate, endDate, isAttending, major, degree }: EduRoadmapProps) => {
    const period = `${startDate} ~ ${isAttending ? '재학중' : endDate}`;
    const degreeString = Degree['degree'];

    return (
        <Styled.RoadmapItem>
            <Icon name={'Arrow/Point'} size={10} color={'var(--primary500)'} hoverable={false} />
            <Styled.RoadmapDetailWrap>
                <Styled.DetailTopSection>
                    <Styled.DetailTitleSection>
                        <Styled.RoadmapTitle>{schoolName}</Styled.RoadmapTitle>
                        <Styled.RoadmapSubTitle>{major}</Styled.RoadmapSubTitle>
                    </Styled.DetailTitleSection>
                    <Styled.RoadmapTagSection>
                        <Tag keyword={degreeString} size={'medium'} theme={'offStyle'} />
                    </Styled.RoadmapTagSection>
                </Styled.DetailTopSection>
                <Styled.RoadmapDetailSection>
                    <Styled.EduRoadmapDetail>
                        <span>{period}</span>
                        <span>|</span>
                        <span>{isAttending ? '재학중' : '졸업'}</span>
                    </Styled.EduRoadmapDetail>
                </Styled.RoadmapDetailSection>
            </Styled.RoadmapDetailWrap>
        </Styled.RoadmapItem>
    );
};

export const CareerRoadmap = ({
    companyName,
    startDate,
    endDate,
    isWorking,
    position,
    description,
}: CareerRoadmapProps) => {
    const period = `${startDate} ~ ${isWorking ? '재직중' : endDate}`;

    return (
        <Styled.RoadmapItem>
            <Icon name={'Arrow/Point'} size={10} color={'var(--primary500)'} hoverable={false} />
            <Styled.RoadmapDetailWrap>
                <Styled.DetailTopSection>
                    <Styled.DetailTitleSection>
                        <Styled.RoadmapTitle>{period}</Styled.RoadmapTitle>
                        <Styled.RoadmapSubTitle>{position}</Styled.RoadmapSubTitle>
                    </Styled.DetailTitleSection>
                    <Styled.RoadmapTagSection>
                        <Tag keyword={companyName} size={'medium'} theme={'offStyle'} />
                    </Styled.RoadmapTagSection>
                </Styled.DetailTopSection>
                <Styled.RoadmapDetailSection>
                    <Styled.CareerRoadmapDetail>
                        {description &&
                            description.split('\n').map((desc, index) => {
                                return (
                                    <li key={index}>
                                        <span>{desc.trim()}</span>
                                    </li>
                                );
                            })}
                    </Styled.CareerRoadmapDetail>
                </Styled.RoadmapDetailSection>
            </Styled.RoadmapDetailWrap>
        </Styled.RoadmapItem>
    );
};
