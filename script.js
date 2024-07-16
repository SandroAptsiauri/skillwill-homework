// 1.დაწერე ფუნქცია, რომელიც მიიღებს a და b
// პარამეტრებს და დააბრუნებს ტექსტს
// “ტოლია” თუ a უდრის b-ს, ხოლო
// წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
// არის ტოლი”

// function equal(a, b) {
//   if (typeof a !== typeof b) {
//     return false;
//   } else if (a === b) {
//     return "ტოლია";
//   } else {
//     return "არ არის ტოლი";
//   }
// }
// console.log(equal("სადასდ", "სადასდ"));

// 2.დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ტემპერატურას ფარენჰეიტებში და
// დააბრუნებს ტემპერატურას ცელსიუსში

// function FahrenheitToCelsius(fahrenheit) {
//   if (typeof fahrenheit !== "number") {
//     return false;
//   } else {
//     return ((fahrenheit - 32) * 5) / 9;
//   }
// }
// console.log(FahrenheitToCelsius(34));

// 3. დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს a (პირველი რიცხვი), b (მეორე
// რიცხვი) და operation (+, -, *, /) და
// დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე operation
// ცვლადში განსაზღვრული ოპერაციით

// function operations(a, b, operation) {
//   if (typeof a !== "number" || typeof b !== "number") return false;
//   switch (operation) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//   }
// }
// console.log(operations(3, 4, "*"));