import React, { lazy, memo, Suspense } from 'react';
import Loading from '@components/Loading/Loading';
import { css } from '@emotion/react';

interface IconProps {
    name: string;
    size?: number | string;
    color?: string;
    hoverable?: boolean;
}

export const Icon = memo(({ name, size = 24, color = 'var(--grey900)', hoverable = false }: IconProps) => {
    const filePath = `../../assets/icons/${name}.svg`;
    const SvgComponent = lazy(() => import(filePath).then((module) => ({ default: module.ReactComponent })));

    const hoverColor = hoverable ? 'var(--primary500)' : 'var(--grey900)';

    console.log(`icon: ${name}`);

    return (
        <Suspense fallback={<Loading />}>
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
});

Icon.displayName = 'Icon';
