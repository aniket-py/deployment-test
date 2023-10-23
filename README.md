# Automated Contract Deployment and Interaction
This GitHub Actions workflow is designed to automate the deployment and interaction with Ethereum contracts on different networks using Hardhat.

## Overview

This workflow deploys three types of contracts (ERC20, ERC721, and ERC1155) to specified networks (e.g., "dappnet" and "validator"). After deployment, it interacts with the deployed contracts.

## Trigger

The workflow is triggered automatically on every push to the `master` branch.

## Matrix Strategy

The workflow uses a matrix strategy for network and contract type, allowing deployment and interaction with different contract types on different networks.

- Network: ["dappnet", "validator"]
- Contract Type: ["ERC20", "ERC721", "ERC1155"]

## Steps

1. **Checkout code:** This step checks out the code from the repository.

2. **Setup Node.js:** It sets up Node.js with version 18.14.2 for executing the workflow.

3. **Install dependencies:** This step installs project dependencies using npm.

4. **Compile contracts:** The contracts are compiled using Hardhat.

5. **Deploy contract:** It deploys the contract based on the matrix configuration for network and contract type. Deployment scripts are located in the `scripts` directory.

6. **Store deployed contract address:** This step stores the contract address in the `contract-info.json` file.

7. **Interact with deployed contract:** It interacts with the deployed contract based on the contract type and network configuration. Interaction scripts are located in the `scripts` directory.

## Environment Variables

- `CONTRACT_ADDRESS`: This environment variable is set with the contract address obtained from the deployment step, allowing interaction scripts to use the correct contract address.

## Usage

1. Create deployment and interaction scripts for your specific contracts. Make sure they match the contract names and configurations in your project.

2. Customize the deployment and interaction scripts in the matrix strategy section to match your specific needs.

3. Push your code to the `master` branch to trigger the workflow. It will deploy and interact with contracts based on the matrix configurations.

## License

This GitHub Actions pipeline is provided under the [MIT License](LICENSE).
