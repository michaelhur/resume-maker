import { Career } from '@typings/resume';

export const careerList: Array<Career> = [
    {
        userId: 'e050ef0a-007a-4268-9039-a7c147b9f207',
        careerId: '7968acb4-d0f3-43ee-9408-8ceefa449113',
        companyName: '링크스타터랩',
        startDate: '2021-08',
        endDate: '2022-12',
        isWorking: false,
        position: 'Frontend Engineer',
        description: '• 템플릿 언어인 Jinja로 작성되어있던 프론트엔드를 React로 리라이팅',
        order: 1,
        createdAt: 1677482136,
    },
    {
        userId: 'e050ef0a-007a-4268-9039-a7c147b9f207',
        careerId: '23e4340b-4747-4761-a23a-fc466e13c9e2',
        companyName: 'AGCO',
        startDate: '2016-09',
        endDate: '2018-11',
        isWorking: false,
        position: 'Data Scientist',
        description:
            '• Regulatory Intelligence에서 작동하는 iGaming 대시보드 구성 및 이용자 프로필 분석\n• 토론토시의 Liquor Compliance Demography 분석을 통하여 효과적인 조사원 인원 배치\n• 몬테카를로 방법을 적용하여경주에서 각 경주마의 순위를 예측하고 이를 통하여 부정행위를 방지하는 모델 개발',
        order: 2,
        createdAt: 1677482136,
    },
];
