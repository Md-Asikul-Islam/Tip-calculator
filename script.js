const generateBillButton = document.querySelector(".generate-bill");
const billAmount = document.querySelector(".bill-amount");
const discountPercentage = document.querySelector(".discount-percentage");
const tipPercentage = document.querySelector(".tip-percentage");
const noOfCustomers = document.querySelector(".no-of-customers");

const totalTipPaid = document.querySelector(".total-tip-paid");
const totalAmountToPay = document.querySelector(".total-amount-to-pay");
const totalTipPercentageValue = document.querySelector(".tip-value");
const discountPercentageValue = document.querySelector(".discount-value");
const totalNoOfCustomersValue = document.querySelector(".no-of-customers-value");
const eachCustomerToPay = document.querySelector(".each-customer-to-pay");

function calculateBill() {
  console.log(
    billAmount.value,
    tipPercentage.value,
    discountPercentage.value,
    noOfCustomers.value
  );

  const billAmountAfterDiscount =
    billAmount.value - (discountPercentage.value * billAmount.value) / 100;

  const getTipAmount = (billAmountAfterDiscount * tipPercentage.value) / 100;
  const totalBill = billAmountAfterDiscount + getTipAmount;
  const eachCustomerToPayAmount = totalBill / noOfCustomers.value;

  totalTipPaid.textContent = getTipAmount.toFixed(2);
  totalAmountToPay.textContent = totalBill.toFixed(2);
  totalTipPercentageValue.textContent = tipPercentage.value;
  discountPercentageValue.textContent = discountPercentage.value;
  totalNoOfCustomersValue.textContent = noOfCustomers.value;
  eachCustomerToPay.textContent = eachCustomerToPayAmount.toFixed(2);
}

generateBillButton.addEventListener("click", calculateBill);
