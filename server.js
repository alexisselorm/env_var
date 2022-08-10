
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const mood=process.env.MOOD
async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`I am ${mood}`)
    await sleep(5000);
  }
}

main();
