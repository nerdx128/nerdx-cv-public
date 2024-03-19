import React, { FC, useEffect, useState } from 'react';
import {
    CredentialResponse,
    GoogleLogin,
    googleLogout,
    TokenResponse,
    useGoogleLogin,
} from '@react-oauth/google';
import { OverridableProps } from '@components/Overridable';
import { classNames } from '@libs/utils';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SiGoogle } from 'react-icons/si';

type GoogleLoginButtonProps<P = OverridableProps> = P;

const GoogleLoginButton: FC<GoogleLoginButtonProps> = (props) => {
    const { id, className, children, ...rest } = props;
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        console.log('GoogleLoginButton mounted');
    }, []);

    const responseMessage = async (
        response: Omit<
            TokenResponse,
            'error' | 'error_description' | 'error_uri'
        >
    ) => {
        console.log(await response);
        setLoggedIn(true);
    };
    const errorMessage = async (error: () => void) => {
        console.log(error);
    };

    const login = useGoogleLogin({
        onSuccess: (response) => responseMessage(response),
        onError: () => errorMessage,
    });

    const logout = () => {
        googleLogout();
        setLoggedIn(false);
    };

    return (
        <GoogleLoginContainer className={classNames(className!)}>
            {loggedIn ? (
                <button onClick={() => logout()}>Logout</button>
            ) : (
                <button onClick={() => login()}>Login with Google</button>
            )}
            {/*<GoogleLogin*/}
            {/*    onSuccess={(res) => responseMessage(res)}*/}
            {/*    onError={() => errorMessage}*/}
            {/*/>*/}
        </GoogleLoginContainer>
    );
};

const GoogleLoginContainer = styled.div`
    ${tw`absolute right-0 flex flex-row justify-center items-center z-[99999] h-full pr-1`}
`;

export default GoogleLoginButton;
