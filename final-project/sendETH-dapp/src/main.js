import {
    BrowserProvider,
    Contract,
    formatEther,
    parseEther,
    isAddress,
  } from 'ethers';
  
  // HTML elements
  const connectButton = document.getElementById('connectButton');
  const accountDisplay = document.getElementById('account');
  const balanceDisplay = document.getElementById('balance');
  const sendButton = document.getElementById('sendButton');
  const recipientInput = document.getElementById('recipient');
  const amountInput = document.getElementById('amount');
  const voteProposal1Button = document.getElementById('voteProposal1');
  const voteProposal2Button = document.getElementById('voteProposal2');
  
  let provider;
  let signer;
  
  // Connect to MetaMask wallet
  async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        provider = new BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
  
        const address = await signer.getAddress();
        accountDisplay.innerText = `Connected: ${address}`;
  
        // Get and display balance
        const balance = await provider.getBalance(address);
        const balanceInEth = formatEther(balance);
        balanceDisplay.innerText = `Balance: ${balanceInEth} ETH`;
      } catch (error) {
        console.error(error);
        accountDisplay.innerText = 'Connection failed.';
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this DApp.');
    }
  }
  
  // Event listener for connect button
  connectButton.addEventListener('click', connectWallet);
  
  // Send ETH to another address
  async function sendETH() {
    if (!signer) {
      alert('Please connect your wallet first.');
      return;
    }
  
    const recipient = recipientInput.value;
    const amount = amountInput.value;
  
    if (!isAddress(recipient)) {
      alert('Invalid recipient address.');
      return;
    }
  
    if (isNaN(amount) || amount <= 0) {
      alert('Invalid amount.');
      return;
    }
  
    try {
      const tx = await signer.sendTransaction({
        to: recipient,
        value: parseEther(amount),
      });
  
      alert(`Transaction sent! Tx Hash: ${tx.hash}`);
  
      // Wait for transaction confirmation
      await tx.wait();
  
      alert('Transaction confirmed!');
  
      // Update balance
      const balance = await provider.getBalance(await signer.getAddress());
      const balanceInEth = formatEther(balance);
      balanceDisplay.innerText = `Balance: ${balanceInEth} ETH`;
    } catch (error) {
      console.error(error);
      alert('Transaction failed.');
    }
  }
  
  // Event listener for send button
  sendButton.addEventListener('click', sendETH);
  
  // Contract address on Sepolia test network
  const contractAddress = '0xB2E1185468e57A801a54162F27725CbD5B0EB4a6';
  
  // Define the ABI of the voting contract
  const contractABI = ['function vote(uint8 proposal) public'];
  
  // Vote for a proposal
  async function vote(proposalNumber) {
    if (!signer) {
      alert('Please connect your wallet first.');
      return;
    }
  
    try {
      const contract = new Contract(contractAddress, contractABI, signer);
      const tx = await contract.vote(proposalNumber);
  
      alert(`Vote transaction sent! Tx Hash: ${tx.hash}`);
  
      // Wait for transaction confirmation
      await tx.wait();
  
      alert('Vote confirmed!');
    } catch (error) {
      console.error(error);
      alert('Voting failed.');
    }
  }
  
  // Event listeners for voting buttons
  voteProposal1Button.addEventListener('click', () => vote(1));
  voteProposal2Button.addEventListener('click', () => vote(2));
  