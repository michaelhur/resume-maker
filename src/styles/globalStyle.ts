import { css } from '@emotion/react';
import { theme } from './theme';

export const globalStyle = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: inherit;
        color: inherit;
        flex-shrink: 0;
    }

    :root {
        letter-spacing: -0.03px;

        --primary50: ${theme.colors.light.primary_50};
        --primary100: ${theme.colors.light.primary_100};
        --primary200: ${theme.colors.light.primary_200};
        --primary300: ${theme.colors.light.primary_300};
        --primary400: ${theme.colors.light.primary_400};
        --primary500: ${theme.colors.light.primary_500};
        --primary600: ${theme.colors.light.primary_600};
        --primary700: ${theme.colors.light.primary_700};
        --primary800: ${theme.colors.light.primary_800};
        --primary900: ${theme.colors.light.primary_900};

        --grey50: ${theme.colors.light.grey_50};
        --grey100: ${theme.colors.light.grey_100};
        --grey200: ${theme.colors.light.grey_200};
        --grey300: ${theme.colors.light.grey_300};
        --grey400: ${theme.colors.light.grey_400};
        --grey500: ${theme.colors.light.grey_500};
        --grey600: ${theme.colors.light.grey_600};
        --grey700: ${theme.colors.light.grey_700};
        --grey800: ${theme.colors.light.grey_800};
        --grey900: ${theme.colors.light.grey_900};

        --red: ${theme.colors.light.red};
        --orange: ${theme.colors.light.orange};
        --yellow: ${theme.colors.light.yellow};
        --green: ${theme.colors.light.green};
        --blue: ${theme.colors.light.blue};
        --pink: ${theme.colors.light.pink};

        --black: ${theme.colors.light.black};
        --white: ${theme.colors.light.white};
    }

    .dark-mode {
        --primary50: ${theme.colors.dark.primary_50};
        --primary100: ${theme.colors.dark.primary_100};
        --primary200: ${theme.colors.dark.primary_200};
        --primary300: ${theme.colors.dark.primary_300};
        --primary400: ${theme.colors.dark.primary_400};
        --primary500: ${theme.colors.dark.primary_500};
        --primary600: ${theme.colors.dark.primary_600};
        --primary700: ${theme.colors.dark.primary_700};
        --primary800: ${theme.colors.dark.primary_800};
        --primary900: ${theme.colors.dark.primary_900};

        --grey50: ${theme.colors.dark.grey_50};
        --grey100: ${theme.colors.dark.grey_100};
        --grey200: ${theme.colors.dark.grey_200};
        --grey300: ${theme.colors.dark.grey_300};
        --grey400: ${theme.colors.dark.grey_400};
        --grey500: ${theme.colors.dark.grey_500};
        --grey600: ${theme.colors.dark.grey_600};
        --grey700: ${theme.colors.dark.grey_700};
        --grey800: ${theme.colors.dark.grey_800};
        --grey900: ${theme.colors.dark.grey_900};

        --red: ${theme.colors.dark.red};
        --orange: ${theme.colors.dark.orange};
        --yellow: ${theme.colors.dark.yellow};
        --green: ${theme.colors.dark.green};
        --blue: ${theme.colors.dark.blue};
        --pink: ${theme.colors.dark.pink};

        --black: ${theme.colors.dark.black};
        --white: ${theme.colors.dark.white};
    }

    body {
        background-color: var(--grey100);
        color: var(--grey900);
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    ol,
    ul {
        list-style: none;
    }
    li {
        list-style: none;
    }
    button {
        cursor: pointer;
        border: 0;
        background-color: inherit;
    }
    div {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    div::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;
