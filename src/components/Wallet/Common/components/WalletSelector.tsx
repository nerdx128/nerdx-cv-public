import { OverridableProps } from '@components/Overridable';
import { FC } from 'react';
import { setCurrentWalletType } from '@state/slices';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';

type WalletSelectorProps<P = OverridableProps> = P;
export const WalletSelector: FC<WalletSelectorProps> = (props) => {
    const { id, className, style, children, ...otherProps } = props;
    const dispatch = useDispatch();

    const handleWalletTypeChange = (e: any) => {
        console.log('Wallet type changed: ', e.target.value);
        dispatch(setCurrentWalletType(e.target.value));
    };

    return (
        <Fieldset onChange={handleWalletTypeChange}>
            <Legend>Choose you wallet type:</Legend>
            <FieldsetContainer>
                <FieldContainer>
                    <FieldInput
                        id={'walletconnect'}
                        type={'radio'}
                        name={'walletType'}
                        value={'walletconnect'}
                    />
                    <FieldLabel htmlFor={'walletconnect'}>
                        WalletConnect
                    </FieldLabel>
                </FieldContainer>
                <FieldContainer>
                    <FieldInput
                        id={'magic'}
                        type={'radio'}
                        name={'walletType'}
                        value={'magic'}
                    />
                    <FieldLabel htmlFor={'magic'}>Magic</FieldLabel>
                </FieldContainer>
            </FieldsetContainer>
        </Fieldset>
    );
};

const Fieldset = styled.fieldset`
    ${tw`mt-4`}
`;

const Legend = styled.legend`
    ${tw`mb-2 text-center`}
`;

const FieldsetContainer = styled.div`
    ${tw`space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0`}
`;

const FieldContainer = styled.div`
    ${tw`flex items-center`}
`;

const FieldInput = styled.input`
    ${tw`h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600`}
`;

const FieldLabel = styled.label`
    ${tw`ml-3 block text-sm font-medium leading-6 text-gray-200`}
`;
export default WalletSelector;
