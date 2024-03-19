import { FC } from 'react';
import { MePage } from '@pages/Common';
import { Header, Title } from '@components/Base';
import { SkillsBody } from '@pages/CV/Skills/Components';

type EducationProps<P = {}> = P;
export const Skills: FC<EducationProps> = (props) => {
    const {} = props;

    return (
        <MePage id={'page-education'}>
            <Header title={'Skills & Education'}>
                <Title>Skills</Title>
                <p className={'quote'}>
                    "And knowing is half the battle." —G.I Joe
                </p>
                <p>
                    As an example, this website is created using React with
                    TypeScript and Redux as the state store. The site is styled
                    using Tailwind CSS and styled-components. The site is built
                    into a Docker container and deployed to Google Cloud
                    Platform with Cloud Run. The site also utilized an API
                    developed in Node.js and Express. The API is also built into
                    a Docker container and deployed to Google Cloud Platform
                    with Cloud Run. Data is stored in datafiles and Google SQL
                    Postgres.
                </p>
                <p>
                    The Blockchain sections uses WalletConnect to connect to
                    Ethereum wallets, including Magic.link email wallets.
                    Ethers.js is used to interact with the Ethereum blockchain.
                    OpenSea API is used to retrieve OpenSea NFT information.
                    Alchemy is my preferred provider for Ethereum node access
                    and data, but for this site, I'm just using the browser's
                    Ethereum provider.
                </p>
                <p>
                    I've been fortunate to have had the opportunity to learn
                    from some of the best in the industry. I've learned to work
                    efficiently and effectively. Here are some of the skills
                    I've picked up along the way.
                </p>
            </Header>
            <SkillsBody />
        </MePage>
    );
};

export default Skills;
