# "Truth Platform" Prototype

## Project Overview

"Truth Platform" is a decentralized platform built on the Ethereum blockchain that allows users to create and retrieve posts. The platform leverages smart contracts written in Solidity and a frontend powered by React and Web3.js for seamless interaction with the Ethereum network. It is still in it's very early version, and this is just a "blue-print"/prototype version of what could be created. Thus far, this project demonstrates the basic functionality of posting content in a censorship-resistant and immutable manner.

**Features**
**Create Posts**: Users can create posts that are stored permanently on the blockchain.

**Retrieve Posts**: All posts can be retrieved, ensuring transparency and traceability.

**Decentralized**: Operates on the Ethereum blockchain, making it censorship-resistant.

**Frontend**: A simple React-based UI that interacts with the blockchain via Web3.js.

## Project Structure

The project is divided into several key components:

**Contracts**: Contains Solidity smart contracts (TruthPlatform.sol) that govern the platform’s behavior.

**Frontend**: A React application that serves as the user interface, interacting with the smart contracts via Web3.js.

**Migrations**: Includes scripts for deploying the smart contracts to a local or public Ethereum network using Truffle.

**Tests**: Contains unit tests to ensure proper contract behavior.

## GOALS

**1 Immutable Posts**: All posts created on the platform are stored on the blockchain and cannot be deleted or altered.

**2 Decentralization**: The platform runs on a decentralized Ethereum network to avoid centralized control or censorship.

**3 Smart Contract Integration**: Efficient and secure use of smart contracts to manage content creation and retrieval.

## Prerequisites

To run this project, you will need:

**Node.js (v14.x or above)**

**Truffle (v5.x)**

**Ganache CLI (for local Ethereum network)**

**MetaMask extension (for connecting to the Ethereum network)**

**Git for version control**

## Installation

### Step 1: Clone the Repository

Clone this repository to your local machine:

**git clone https://github.com/2000dann/TruthPlatformPrototype.git**

**cd TruthPlatformPrototype**

### Step 2: Install Dependencies

Navigate to the project’s root directory and install all necessary dependencies:

**cd frontend**

**npm install**

### Step 3: Run Ganache (Local Blockchain)

Open a new terminal and start Ganache CLI:

**ganache-cli**

### Step 4: Compile and Migrate Contracts

Ensure Truffle is installed globally, then compile and deploy the smart contracts:

**truffle compile**

**truffle migrate**

### Step 5: Start the Frontend

Navigate to the frontend directory and start the development server:

**npm start**

### Step 6: Interact with the Platform

**Open your browser and navigate to http://localhost:3000/.

**Ensure MetaMask is connected to the local blockchain.

You should now be able to create and view posts on the decentralized platform.

### Running Tests

To run the smart contract tests, execute the following command:

**truffle test**

### Tech Stack

**Solidity**: For smart contract development.

**Truffle**: For contract compilation, testing, and migration.

**Web3.js**: For interacting with the Ethereum blockchain.

**React**: For the user interface.

**Ganache CLI**: For running a local Ethereum blockchain.

### Future Improvements

**User Authentication**: Integrate ENS for user-friendly account names.

**Post Voting**: Add a feature where users can upvote or downvote posts.

**Search Functionality**: Implement a search feature to find posts by keywords.

### License

This project is licensed under the MIT License.

### Ethical Considerations

This platform when fully functional promotes freedom of expression and resists censorship. In today’s digital landscape, centralized platforms have the power to control what information gets seen and shared. By using blockchain technology, "TruthPlatform" ensures that no single entity can silence or manipulate posts. The platform is designed to be transparent, immutable, and open, ensuring that everyone has equal access to share their voice without fear of repression. This aligns with the values of democratic participation, accountability, and truth. 



