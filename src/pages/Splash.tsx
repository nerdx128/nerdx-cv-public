import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Images } from '@assets/Images';
import GoogleLoginButton from '@components/Google/Login';

type SplashProps<P = {}> = P;

export const Splash: FC<SplashProps> = (props) => {
    const {} = props;

    return (
        <SplashContainer id={'splash-container'}>
            <SplashBackground id={'splash-background'} />
            <SplashTitle>Johnny Nguyen</SplashTitle>
            <SplashSubtitle>
                <div>Nerd by day, Nerd by night</div>
            </SplashSubtitle>
            <Memo className={'z-100'}>
                <p>
                    Hello! Welcome to my page. This page is my continuous effort
                    to showcase the skills I've learned over time. This page is
                    currently built using Node.js, React, TypeScript and Redux
                    on the frontend. The backend is built on with Express.js,
                    TypeScript, and TypeORM. Both projects are committed to a
                    private repository on GitHub. For deployment, Google Cloud
                    Platform was used with Cloud Run. The builds uses Continuous
                    Integration/Continuous Development to detect a push to the
                    repository. Once triggered, it builds the project into a
                    Docker container. Google SQL is used as the database with
                    PostGreSQL.
                </p>
            </Memo>
        </SplashContainer>
    );
};

const SplashContainer = styled.div`
    ${tw`flex flex-col justify-center bg-gray-700 items-center h-full`}
`;

const SplashBackground = styled.div`
    ${tw`absolute h-full w-full opacity-70 blur-[6px]`}
    background: url(${Images.MeSplash}) no-repeat center center;
    background-size: cover;
`;

const SplashTitle = styled.div`
    ${tw`flex flex-row justify-center items-center w-full text-white text-8xl md:text-[12rem] font-abuget -rotate-6 opacity-30 animate-fadeIn30`}
    text-shadow: 6px 6px 12px black;
`;

const SplashSubtitle = styled.div`
    ${tw`flex flex-row justify-center items-center w-full text-white font-bold text-xl md:text-[2rem] mt-8 md:mt-0 opacity-30 pt-8`}
    text-shadow: 4px 4px 8px black;

    > div {
        ${tw`text-center px-4`}
    }
`;

const Memo = styled.div`
    ${tw`w-1/3 flex flex-row bg-gray-200/40 text-gray-700 text-base mt-8 p-4`}
`;

export default Splash;
