import * as Styled from './Header.styles';
import { users } from '@src/mocks/data/users';
import { ListItem } from '@components/ListItem/ListItem';

export const Header = () => {
    const user = users[0];
    return (
        <Styled.Header>
            <Styled.ProfileCoverImageWrapper>
                <img src={user.coverImageUrl} alt="Cover Image" />
            </Styled.ProfileCoverImageWrapper>
            <Styled.ProfileSummaryWrapper>
                <Styled.ProfileImageWrapper>
                    <img src={user.profileImageUrl} alt="Index Image" />
                </Styled.ProfileImageWrapper>
                <Styled.ProfileSummarySection>
                    <Styled.ProfileSummaryTopSection>
                        <Styled.DisplayName>{user.displayName ? user.displayName : user.name}</Styled.DisplayName>
                    </Styled.ProfileSummaryTopSection>
                    {user.bio && (
                        <Styled.ProfileSummaryMidSection>
                            <Styled.ProfileBio>{user.bio}</Styled.ProfileBio>
                        </Styled.ProfileSummaryMidSection>
                    )}
                    <Styled.ProfileSummaryBottomSection>
                        <ListItem
                            iconName={'Editor/source_code'}
                            iconSize={16}
                            iconColor={'black'}
                            itemName={'프론트엔드 개발자'}
                            itemSize={'16px'}
                            itemColor={'black'}
                        />
                        <ListItem
                            iconName={'Communication/growth_graph'}
                            iconSize={16}
                            iconColor={'black'}
                            itemName={'신입'}
                            itemSize={'16px'}
                            itemColor={'black'}
                        />
                    </Styled.ProfileSummaryBottomSection>
                </Styled.ProfileSummarySection>
            </Styled.ProfileSummaryWrapper>
        </Styled.Header>
    );
};
