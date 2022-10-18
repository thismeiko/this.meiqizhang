// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page

async function main() {

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
    console.log(signer);
    await provider.send("eth_requestAccounts", []);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const contractWithSigner = contract.connect(signer);

    
    viewViewers();

    $('#codeViewersButton').click(function () {
        contractWithSigner.sawCode();
    })



    async function viewViewers() {
        const numViewers = await contract.viewViewers();
        $('#codeViewers').text(`${numViewers}`);
    }
}

main();



// const contractWithSigner = contract.connect(signer);

// async function init(){
//     // MetaMask requires requesting permission to connect users accounts
//     await provider.sende("eth_requestAccounts",[]);
// }

// init();

// setInterval(function(){
//     viewVotes();
// },2000);
