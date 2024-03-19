import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { useProjectRoutes } from '@routes/ProjectRoutes';
import { useCVRoutes } from '@routes/CVRoutes';
import { useHobbiesRoutes } from '@routes/HobbiesRoutes';
import styled from 'styled-components';
import tw from 'twin.macro';
import Dragon from '@assets/backgrounds/DragonStencil.png';

const Splash = lazy(() => import('@pages/Splash'));
const Me = lazy(() => import('@pages/Me/Me'));

const projectRoutes = useProjectRoutes();
const cvRoutes = useCVRoutes();
const hobbiesRoutes = useHobbiesRoutes();

const NRoutes = () => {
    return (
        <MainContainer>
            <Routes>
                <Route
                    path={'/'}
                    element={
                        <Suspense>
                            <Splash />
                        </Suspense>
                    }
                />
                <Route
                    path={'/Me'}
                    element={
                        <Suspense>
                            <Me />
                        </Suspense>
                    }
                />
                {cvRoutes}
                {projectRoutes}
                {hobbiesRoutes}
            </Routes>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    ${tw`h-full`}
`;

export default NRoutes;
