import * as Styled from './Header.styles';
import { users } from '@src/mocks/data/users';
import { ButtonGroup, DisplayName, ProfileBio } from './Header.styles';
import { Icon } from '@components/Icon/Icon';

export const Header = () => {
    const user = users[0];
    return (
        <Styled.Header>
            <Styled.ProfileCoverImageWrapper>
                <img src={user.coverImageUrl} alt="Cover Image" />
            </Styled.ProfileCoverImageWrapper>
            <Styled.ProfileSummaryWrapper>
                <Styled.ProfileImageWrapper>
                    <img src={user.profileImageUrl} alt="Profile Image" />
                </Styled.ProfileImageWrapper>
                <Styled.ProfileSummarySection>
                    <Styled.ProfileSummaryTopSection>
                        <Styled.DisplayName>{user.displayName}</Styled.DisplayName>
                    </Styled.ProfileSummaryTopSection>
                    {/*<Styled.ProfileSummaryMidSection>*/}
                    {/*    <Styled.ProfileBio>{user.bio}</Styled.ProfileBio>*/}
                    {/*</Styled.ProfileSummaryMidSection>*/}
                    <Styled.ProfileSummaryBottomSection>1</Styled.ProfileSummaryBottomSection>
                    <Styled.ProfileBio>{user.bio}</Styled.ProfileBio>
                </Styled.ProfileSummarySection>
            </Styled.ProfileSummaryWrapper>
            <Icon name={'add'} />
        </Styled.Header>
    );
};
