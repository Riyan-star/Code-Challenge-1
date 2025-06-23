// Function to calculate fare based on distance
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;

  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

// Prompt user and call the function
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distanceInKm = Number(input);
calculateBodaFare(distanceInKm);
