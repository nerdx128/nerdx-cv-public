This is a personal project. To run, you will need to have keys in the .env file and Dockerfile. My set is currently deployed on Google Cloud Platform using Cloud Run and Cloud SQL. Cloud Run builds are triggered by pushes to the Development branch of the Private Repository.

You can see the live version at [https://dev.nerdx128.com/](https://dev.nerdx128.com/). Please be aware that to minimize costs, the server is set to sleep after 15 minutes of inactivity. It may take a few seconds to wake up. This projects also calls endpoint from my own API backend.

This project is built with:

* [Node.js v20](https://nodejs.org/en/)
* [React v18](https://reactjs.org/)
* [JavaScript](https://reactjs.org/)
* [TypeScript v5](https://www.typescriptlang.org/docs/)
* [Redux v5](https://redux.js.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Styled Components](https://styled-components.com/)
* [Twin.Macro](https://github.com/ben-rogerson/twin.macro)
* [Ethers v6](https://docs.ethers.io/v6/)
* [WalletConnect](https://walletconnect.org/)
* [Wagmi v2](https://wagmi.io/)
* [Magic.link](https://magic.link/)
* [OpenSea](https://opensea.io/)

In the project directory, you can run:

### `npm run start:dev`

