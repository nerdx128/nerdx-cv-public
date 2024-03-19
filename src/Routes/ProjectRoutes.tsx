import { Fragment, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { OpenEdition, Personal, Portal, Professional } from '@pages/Projects';

export const useProjectRoutes = () => {
    return (
        <Fragment>
            <Route
                path={'/Projects/Professional'}
                element={
                    <Suspense>
                        <Professional />
                    </Suspense>
                }
            />
            <Route
                path={'/Projects/Personal'}
                element={
                    <Suspense>
                        <Personal />
                    </Suspense>
                }
            />
            <Route
                path={'/Projects/Professional/OE'}
                element={
                    <Suspense>
                        <OpenEdition />
                    </Suspense>
                }
            />
            <Route
                path={'/Projects/Professional/Portal'}
                element={
                    <Suspense>
                        <Portal />
                    </Suspense>
                }
            />
        </Fragment>
    );
};
