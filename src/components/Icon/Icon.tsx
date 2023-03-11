import React, { lazy, Suspense } from 'react';
import { css } from '@emotion/react';

interface IconProps {
    name: string;
    size?: number | string;
    color?: string;
    hoverable?: boolean;
}

export const Icon = ({ name, size = 24, color = 'var(--grey900)', hoverable = false }: IconProps) => {
    const splitName = name.split('/');
    const SvgComponent = lazy(() =>
        import(`../../assets/icons/${splitName[0]}/${splitName[1]}.svg`).then((module) => ({
            default: module.ReactComponent,
        })),
    );

    const hoverColor = hoverable ? 'var(--primary500)' : 'var(--grey900)';

    console.log(`icon: ${name}`);

    return (
        <Suspense fallback={<></>}>
            <SvgComponent
                css={css`
                    &.active,
                    :active,
                    &:hover {
                        color: ${hoverColor};
                    }
                `}
                width={size}
                height={size}
                fill={color}
            />
        </Suspense>
    );
};
