// Function to calculate ingredients based on number of cups
function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200;
  const milkPerCup = 50;
  const teaLeavesPerCup = 1;
  const sugarPerCup = 2;

  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves: ${totalTeaLeaves} tablespoon(s)`);
  console.log(`Sugar: ${totalSugar} teaspoon(s)`);
  console.log("Enjoy your Chai Bora!");
}

// Prompt user and call the function
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);
calculateChaiIngredients(numberOfCups);
