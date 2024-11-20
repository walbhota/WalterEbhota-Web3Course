# **SendETH DApp**

## **Project Description**

The **SendETH DApp** is a decentralized application built using `ethers.js` that allows users to:

- **Connect an Ethereum wallet** (e.g., MetaMask).
- **View their ETH account balance**.
- **Send ETH** to another Ethereum address.
- **Interact with a voting smart contract** deployed on the Sepolia ETH test network by `Projectstake`.

This project applies the knowledge gained over the past few weeks to create a functional and user-friendly DApp.

---

## **Table of Contents**

- [Project Description](#project-description)
- [Project Details](#project-details)
  - [Main Objectives](#main-objectives)
  - [Project Extension](#project-extension)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the DApp Locally](#running-the-dapp-locally)
- [Usage Guide](#usage-guide)
  - [Connecting Your Wallet](#connecting-your-wallet)
  - [Viewing Account Information](#viewing-account-information)
  - [Sending ETH](#sending-eth)
  - [Voting for a Proposal](#voting-for-a-proposal)
- [Architecture Overview](#architecture-overview)
- [Resources](#resources)
- [Dependencies](#dependencies)
- [Getting Test ETH on Sepolia](#getting-test-eth-on-sepolia)
- [Important Notes](#important-notes)
- [License](#license)
- [Contact Information](#contact-information)
- [Submission](#submission)
- [Appendices](#appendices)

---

## **Project Details**

### **Main Objectives**

- **Create a DApp** using `ethers.js` that:
  - Allows users to **connect to an Ethereum wallet** (e.g., MetaMask).
  - Enables users to **view their account balance**.
  - Provides functionality to **send ETH** to another address.

### **Project Extension**

**If you're feeling confident**, the DApp also interacts with a simple voting contract deployed on the Sepolia ETH test network by `Projectstake`. This contract allows voters to cast a vote between two proposals.

#### **Eligibility**

- As a learner, you are eligible to participate in this voting process.

#### **Objectives**

- Cast a vote by using the external `vote` function within the contract.

#### **Instructions**

1. **Contract Address**: `0xB2E1185468e57A801a54162F27725CbD5B0EB4a6`
2. **Voting Process**:
   - Pass an argument of `1` to vote for Proposal 1.
   - Pass an argument of `2` to vote for Proposal 2.
3. **Hint**: Use `ethers.js` to interact with a deployed smart contract.

---

## **Setup Instructions**

### **Prerequisites**

Before setting up the project, ensure you have the following installed:

- **Node.js and npm**: Download and install from [https://nodejs.org/](https://nodejs.org/).
- **MetaMask**: Install the browser extension from [https://metamask.io/](https://metamask.io/).
- **Git**: For cloning the repository, install from [https://git-scm.com/](https://git-scm.com/).
- **Sepolia Test Network Configuration**: Add the Sepolia network to your MetaMask wallet.
- **Test ETH**: Obtain test ETH from a Sepolia faucet for testing transactions.

### **Installation**

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/sendETH-dapp.git
```

2. **Navigate to the Project Directory**
```bash
cd sendETH-dapp
```

3. **Install Dependencies**
```bash
npm install
```
This will install all the required packages listed in `package.json`.

## **Running the DApp Locally**

To start the development server and run the DApp locally:
```bash
npm run start
```

This command will:
- Build the project using Webpack.
- Start the development server.
- Automatically open your browser at [http://localhost:8080](http://localhost:8080).

---

## **Usage Guide**

### **Connecting Your Wallet**
1. Click on the **Connect Wallet** button.
2. MetaMask will prompt you to connect your account.
3. Approve the connection in MetaMask.

### **Viewing Account Information**
- After connecting, your **account address** will be displayed.
- Your **ETH balance** will be shown in the balance section.

### **Sending ETH**

#### **Enter Recipient Address**
- In the **Recipient Address** field, enter the Ethereum address you wish to send ETH to.

#### **Enter Amount**
- In the **Amount in ETH** field, enter the amount of ETH you wish to send.

#### **Send ETH**
1. Click the **Send ETH** button.
2. Confirm the transaction in MetaMask.
3. Wait for the transaction confirmation alerts.

### **Voting for a Proposal**

#### **Choose a Proposal**
- Click on **Vote for Proposal 1** or **Vote for Proposal 2**.

#### **Confirm the Vote**
1. MetaMask will prompt you to confirm the transaction.
2. Approve the transaction to cast your vote.
3. Wait for the vote confirmation alerts.

> **Note:** Ensure MetaMask is connected to the **Sepolia test network** when interacting with the voting contract.

---

## **Architecture Overview**

The project structure is organized as follows:
- **public/**: Contains the `index.html`, `styles.css`, and the bundled `bundle.js` files.
  - **index.html**: The main HTML file that structures the UI.
  - **styles.css**: The CSS file that styles the UI components.
- **src/**: Contains the `main.js` file, which includes all the JavaScript code for the DApp's functionality.
- **webpack.config.js**: Configuration file for Webpack, specifying entry and output points.
- **package.json**: Lists project dependencies and scripts for building and running the project.
- **README.md**: Provides comprehensive project documentation.

---

## **Resources**
- **How to Deploy Your Website to Vercel for Free**: [YouTube Video](https://www.youtube.com/watch?v=xDRaaAKnq4o)
- **Use Ethers.js to Interact with a Deployed Smart Contract**: [YouTube Video](https://www.youtube.com/watch?v=GPc0t0Swct0)
- **Ethers.js Documentation**: [https://docs.ethers.io/](https://docs.ethers.io/)
- **MetaMask Documentation**: [https://docs.metamask.io/](https://docs.metamask.io/)

---

## **Dependencies**
- **ethers.js**: Library for interacting with the Ethereum blockchain.
  - **Version**: ^6.6.2
- **webpack**: Module bundler.
- **webpack-cli**: Command-line interface for Webpack.
- **webpack-dev-server**: Development server for live reloading.
- **style-loader** and **css-loader**: Loaders for handling CSS files in Webpack.

---

## **Important Notes**
- **MetaMask Installation**: Ensure MetaMask is installed and properly configured in your browser.
- **Network Selection**: Always make sure MetaMask is set to the **Sepolia Test Network**.
- **Security**: Never share your private keys or seed phrases.

---

## **License**
This project is open-source and available under the [MIT License](LICENSE).