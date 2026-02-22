// Currency Converter
// Take a currency code (USD, EUR, GBP) and print its full name (e.g., "United States Dollar") using a switch. Hint: Use string cases for each currency code.

let currencyCode = "EUR";
switch (currencyCode) {
    case "USD":
        console.log("United States Dollar");
        break;
    case "EUR":
        console.log("Euro");
        break;
    case "GBP":
        console.log("British Pound");
        break;
    default:
        console.log("Unknown currency code");
}