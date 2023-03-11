import { PageContainer } from '@layouts/Main/Main.styles';

interface MainProps {
    children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
    return <PageContainer>{children}</PageContainer>;
};
