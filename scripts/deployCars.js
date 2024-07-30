const hre = require("hardhat");

async function main(){
    const Car = await hre.ethers.getContractFactory("Cars");
    const car = await Car.deploy();
    await car.waitForDeployment();
    console.log("Car contract deployed to:", await car.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });