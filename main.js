// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner();
console.log(signer);
const contract = new ethers.Contract(contractAddress,contractABI,provider);


const contractWithSigner = contract.connect(signer);

// async function init(){
//     // MetaMask requires requesting permission to connect users accounts
//     await provider.sende("eth_requestAccounts",[]);
// }

init();

checkNum();
checkCode();
$('contractAddress').text(contractAddress);
setInterval(function(){
    checkNum();
    checkCode();
},2000);

$('#checkCOde').click(function(){
    checkCOde();
})

async function checkCode(){
    const myNum = await contract.checkCode();
    const convertedNum =+myNum;
    $('#checkCOde').text(`${convertedNum}`);
}

async function checkCOde() {
    await provider.send("eth_requestAccounts", []);
    const tokenWithSigner = contract.connect(signer);
    tokenWithSigner.checkCode();
}