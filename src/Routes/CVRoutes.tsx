import { Fragment, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { Education, Experience, Skills, Summary } from '@pages/CV';

export const useCVRoutes = () => {
    return (
        <Fragment>
            <Route
                path={'/CV/Summary'}
                element={
                    <Suspense>
                        <Summary />
                    </Suspense>
                }
            />
            <Route
                path={'/CV/Experience'}
                element={
                    <Suspense>
                        <Experience />
                    </Suspense>
                }
            />
            <Route
                path={'/CV/Education'}
                element={
                    <Suspense>
                        <Education />
                    </Suspense>
                }
            />
            <Route
                path={'/CV/Skills'}
                element={
                    <Suspense>
                        <Skills />
                    </Suspense>
                }
            />{' '}
        </Fragment>
    );
};
