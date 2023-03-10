import * as Styled from './Header.styles';
import { users } from '@src/mocks/data/users';
import { ListItem } from '@components/ListItem/ListItem';
import { TabMenu } from '@components/TabMenu/TabMenu';

const menus = [
    { name: 'Profile', icon: 'Ui/apps', path: '/profile' },
    { name: 'Blog', icon: 'Editor/Filter', path: '/blog' },
    { name: 'Portfolio', icon: 'Communication/shopping_cart', path: '/portfolio' },
];

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
                            iconName={'Editor/location'}
                            iconSize={16}
                            iconColor={'purple'}
                            itemName={'프론트엔드 개발자'}
                            itemSize={'16px'}
                            itemColor={'black'}
                        />
                        <ListItem
                            iconName={'Ui/apps'}
                            iconSize={16}
                            iconColor={'red'}
                            itemName={'신입'}
                            itemSize={'16px'}
                            itemColor={'black'}
                        />
                    </Styled.ProfileSummaryBottomSection>
                </Styled.ProfileSummarySection>
            </Styled.ProfileSummaryWrapper>
            <TabMenu menus={menus} size={'large'} position={'all'} />
        </Styled.Header>
    );
};
