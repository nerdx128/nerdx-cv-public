import { Fragment, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { Cards, Plants } from '@pages/Hobbies';

export const useHobbiesRoutes = () => {
    return (
        <Fragment>
            <Route
                path={'/Hobbies/Plants'}
                element={
                    <Suspense>
                        <Plants />
                    </Suspense>
                }
            />
            <Route
                path={'/Hobbies/Cards'}
                element={
                    <Suspense>
                        <Cards />
                    </Suspense>
                }
            />
        </Fragment>
    );
};
