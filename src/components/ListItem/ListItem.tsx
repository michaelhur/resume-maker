import { Icon } from '@components/Icon/Icon';
import { ItemSpan, ItemWrap } from '@components/ListItem/ListItem.styles';

interface ListItemProps {
    iconName: string;
    iconSize?: number | string;
    iconColor?: string;
    itemName: string;
    itemSize?: number | string;
    itemColor?: string;
}

export const ListItem = ({
    iconName,
    iconSize = 24,
    iconColor = 'var(--grey900)',
    itemName,
    itemSize = 24,
    itemColor = 'var(--grey900)',
}: ListItemProps) => {
    return (
        <ItemWrap>
            <Icon name={iconName} size={iconSize} color={iconColor} />
            <ItemSpan fontsize={itemSize} color={itemColor}>
                {itemName}
            </ItemSpan>
        </ItemWrap>
    );
};
