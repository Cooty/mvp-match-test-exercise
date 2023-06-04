function formatMoney(amount: number, currency = "USD"): string {
  const parts = amount.toFixed(2).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${parts.join(".")} ${currency.toUpperCase()}`;
}

export default formatMoney;
