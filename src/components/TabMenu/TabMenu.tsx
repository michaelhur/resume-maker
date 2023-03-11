import { StyledMenu, StyledTab } from '@components/TabMenu/TabMenu.styles';
import { Icon } from '@components/Icon/Icon';

interface Menu {
    name: string;
    path: string;
    icon?: string;
}

interface TabMenuProps {
    menus: Array<Menu>;
    size: 'small' | 'large';
    position: 'all' | 'bottom';
}

export const TabMenu = ({ menus, size, position }: TabMenuProps) => {
    const iconSize = size === 'large' ? '24px' : '16px';

    return (
        <StyledMenu>
            {menus.map((menu) => {
                return (
                    <StyledTab key={menu.name} to={menu.path} size={size} position={position} aria-current="page">
                        {menu.icon && (
                            <Icon name={menu.icon} size={iconSize} color={'var(--primary500)'} hoverable={true} />
                        )}
                        {menu.name}
                    </StyledTab>
                );
            })}
        </StyledMenu>
    );
};
