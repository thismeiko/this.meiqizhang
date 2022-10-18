// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner();
console.log(signer);
const contract = new ethers.Contract(contractAddress,contractABI,provider);

viewVotes();

// const contractWithSigner = contract.connect(signer);

// async function init(){
//     // MetaMask requires requesting permission to connect users accounts
//     await provider.sende("eth_requestAccounts",[]);
// }

// init();

setInterval(function(){
    viewVotes();
},2000);

$('#voteSelectA').click(function(){
    voteA();
})

$('#voteSelectB').click(function(){
    voteB();
})

async function viewVotes(){
    const voteCount = await contract.viewVotes();
    $('#voteA').text(`${voteCount[0]}`);
    $('#voteB').text(`${voteCount[1]}`);
}

async function voteSlectA() {
    await provider.send("eth_requestAccounts", []);
    const tokenWithSigner = contract.connect(signer);
    tokenWithSigner.voteSlectA();
}

async function voteSlectB() {
    await provider.send("eth_requestAccounts", []);
    const tokenWithSigner = contract.connect(signer);
    tokenWithSigner.voteSlectB();
}