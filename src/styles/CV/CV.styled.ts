import styled from 'styled-components';
import tw from 'twin.macro';

export const Details = styled.div`
    ${tw`flex flex-col w-full gap-y-4 bg-gray-200/90 border-t border-gray-900/5`}
`;

export const DetailsList = styled.dl`
    ${tw`-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6`}
`;

export const CompanyInfoStyled = styled.div`
    ${tw`flex flex-col justify-between py-2 gap-y-2`}
`;

export const EducationInfoStyled = styled.div`
    ${tw`flex flex-col justify-between py-2 gap-y-2`}
`;

export const ResponsibilitiesStyled = styled.div`
    ${tw`flex flex-col justify-between py-2 gap-y-2`}
`;
export const CoursesStyled = styled.div`
    ${tw`flex flex-col justify-between py-2 gap-y-2`}
`;
export const CollaborationsStyled = styled.div`
    ${tw`flex flex-col justify-between py-2 gap-y-2`}
`;
