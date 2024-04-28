const dotenv = require('dotenv')
dotenv.config()

async function main() {
  const EmajalaNFT = await ethers.getContractFactory("EmajalaNFT");
  const emajalaNFT = await EmajalaNFT.deploy();

  console.log("MyContract deployed to:", emajalaNFT.runner.address);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
