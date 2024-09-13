// Function to format a number as currency with the specified currency code
export function formatCurrency(number, currencyCode) {
  return number
    .toLocaleString("en-US", {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "symbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/,/g, ".");
}
