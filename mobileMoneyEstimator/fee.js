// Function to estimate mobile money transaction fee
function estimateTransactionFee(amountToSend) {
  const feeRate = 0.015;
  const minFee = 10;
  const maxFee = 70;

  let fee = amountToSend * feeRate;

  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebited = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("Send Money Securely!");
}

// Prompt user and call the function
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);
estimateTransactionFee(amountToSend);


