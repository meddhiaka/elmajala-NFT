require('dotenv').config()

async function main() {
    const EmajalaNFT = await ethers.getContractFactory("EmajalaNFT");
    const emajalaNFT = await EmajalaNFT.deploy();
    console.log(process.env.NODE_API_URL)
    console.log(process.env.NODE_PRIVATE_KEY)
    console.log("Contract Deployed to Address:", emajalaNFT.address);
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });