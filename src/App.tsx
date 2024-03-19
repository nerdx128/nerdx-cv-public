import './styles/output.css';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { http, createConfig, WagmiProvider } from 'wagmi';
import {
    mainnet,
    sepolia,
    goerli,
    polygon,
    polygonMumbai,
} from '@wagmi/chains';
import { walletConnect, injected, coinbaseWallet } from '@wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import NRoutes from './NRoutes';
import * as process from 'process';
import { OverridableProps } from '@components/Overridable';
import { NavBar } from '@components/Navigation';

const queryClient = new QueryClient();
const projectId = process.env.REACT_APP_WC_APP_ID as string;

const metadata = {
    name: '',
    description: '',
    url: '',
    icons: [],
};

declare module 'wagmi' {
    interface Register {
        config: typeof config;
    }
}

const config = createConfig({
    chains: [sepolia, goerli, mainnet, polygon, polygonMumbai] as const,
    transports: {
        [mainnet.id]: http('https://mainnet.infura.io/v3/'),
        [sepolia.id]: http('https://sepolia.infura.io/v3/'),
        [goerli.id]: http('https://goerli.infura.io/v3/'),
        [polygon.id]: http('https://polygon-rpc.com/'),
        [polygonMumbai.id]: http('https://polygon-mumbai-rpc.com/'),
    },
    connectors: [
        walletConnect({
            projectId: '',
            metadata,
            showQrModal: false,
        }),
        injected({ shimDisconnect: true }),
        coinbaseWallet({
            appName: metadata.name,
            appLogoUrl: metadata.icons[0],
        }),
    ],
});

createWeb3Modal({
    wagmiConfig: config,
    projectId: projectId,
    enableAnalytics: true,
});

type AppProps<P = OverridableProps> = P;

const App: FC<AppProps> = (props) => {
    const { children, ...rest } = props;
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <NavBar />
                <div className="App">
                    <NRoutes />
                </div>
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default App;
// import { FC } from 'react';
// import './styles/output.css';
// import NRoutes from './NRoutes';
// import { EthereumClient } from '@web3modal/ethereum';
// import { Me as MeType } from '@definitions/Me';
// import { NavBar } from '@components/Navigation/NavBar';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { goerli, mainnet, polygon, polygonMumbai, sepolia } from 'wagmi/chains';
// import { walletConnectProvider } from '@web3modal/wagmi';
// import { publicProvider } from 'wagmi/providers/public';
// import { Plants } from '@assets/Plants';
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
// import { InjectedConnector } from 'wagmi/connectors/injected';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
// import {
//     DedicatedWalletConnector,
//     UniversalWalletConnector,
// } from '@magiclabs/wagmi-connector';
// import { createWeb3Modal } from '@web3modal/wagmi/react';
// import { Logos } from '@assets/Logos';
//
// type appProps<P = {}> = P;
//
// const projectId = process.env.REACT_APP_WC_APP_ID as string;
// const magicKey = process.env.REACT_APP_MAGIC_API_KEY as string;
//
// const { chains, publicClient, webSocketPublicClient } = configureChains(
//     [sepolia, goerli, mainnet, polygon, polygonMumbai],
//     [walletConnectProvider({ projectId }), publicProvider()]
// );
//
// const metadata = {
//     name: 'Nerdx128 Company',
//     description: 'Nerdx128 Company',
//     url: 'https://nerdx128.com',
//     icons: [Plants.Me],
// };
//
// const wagmiConfig = createConfig({
//     autoConnect: true,
//     publicClient,
//     webSocketPublicClient,
//     connectors: [
//         new WalletConnectConnector({
//             chains,
//             options: { projectId, showQrModal: false, metadata },
//         }),
//         new InjectedConnector({ chains, options: { shimDisconnect: true } }),
//         new CoinbaseWalletConnector({
//             chains,
//             options: { appName: metadata.name, chainId: sepolia.id },
//         }),
//         new UniversalWalletConnector({
//             chains,
//             options: {
//                 apiKey: magicKey,
//                 networks: [
//                     {
//                         rpcUrl:
// `${sepolia.rpcUrls.alchemy.http[0]}/${process.env.REACT_APP_ALCHEMY_API_SEPOLIA_KEY}`, chainId: sepolia.id, }, {
// rpcUrl: `${polygon.rpcUrls.alchemy.http[0]}/${process.env.REACT_APP_ALCHEMY_API_POLYGON_KEY}`, chainId: polygon.id,
// }, { rpcUrl: `${polygonMumbai.rpcUrls.alchemy.http[0]}/${process.env.REACT_APP_ALCHEMY_API_MUMBAI_KEY}`, chainId:
// polygonMumbai.id, }, { rpcUrl: `${goerli.rpcUrls.alchemy.http[0]}/${process.env.REACT_APP_ALCHEMY_API_GOERLI_KEY}`,
// chainId: goerli.id, }, { rpcUrl:
// `${mainnet.rpcUrls.alchemy.http[0]}/${process.env.REACT_APP_ALCHEMY_API_MAINNET_KEY}`, chainId: mainnet.id, }, ], },
// }), ], });  createWeb3Modal({ wagmiConfig, projectId, chains, enableAnalytics: true, connectorImages: { magic:
// Logos.EmailWhite, }, defaultChain: sepolia, });  const App: FC<appProps> = (props) => { return ( <WagmiConfig
// config={wagmiConfig}> <NavBar /> <div className="App"> <NRoutes /> </div> </WagmiConfig> ); };  export default App;
