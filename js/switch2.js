/*
*У деяких випадках незручність читання складних розгалужень if...else можна уникнути, використовуючи «плоскіший» синтаксис інструкції розгалуження switch.

Сфера застосування switch обмежена задачами з одним загальним питанням (що порівнювати) і безліччю варіантів відповідей (з чим порівнювати).

switch (значення) {
  case значення:
    інструкції;
    break;

  case значення:
    інструкції;
    break;
}
Його синтаксис складається з блоку switch(значення) - що потрібно порівняти та безлічі окремих випадків case значення: - з чим потрібно порівняти. Для порівняння використовується оператор строгої рівності ===. Тобто не можна порівняти на більше або менше, тільки на рівність.

Значення в блоці switch(значення) - рядок або число, яке порівнюється на строгу рівність з усіма значеннями в блоках case значення: по черзі, зверху вниз.

Оператор break в кінці кожного блоку case необхідний, щоб перервати подальші перевірки та одразу перейти до коду після switch у тому разі, коли перевірка на рівність повернула true.
*/

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

//    switch (password) { // Change this line
//     case null: // Change this line
//       message = "Canceled by user!"; // Change this line
//       break;

//     case ADMIN_PASSWORD: // Change this line
//       message = "Welcome!"; // Change this line
//       break;
// default: message ="Access denied, wrong password!"

//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

/*
*Список країн і вартість доставки:

China - 100 кредитів
Chile - 250 кредитів
Australia - 170 кредитів
Jamaica - 120 кредитів
*/ 

function getShippingCost(country) {
  let message;
  const china = 100;
  const chile = 250;
  const australia = 170;
  const jamaica = 100;

  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost ${china} credits`;
      break;
    case "Chile":
      message = `Shipping to ${country} will cost ${chile}  credits`;
      break;
    case "Australia":
      message = `Shipping to ${country} will cost ${australia}  credits`;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost ${jamaica} credits`;
      break;
    default: message = "Sorry, there is no delivery to your country";
  }
  return message;
}
  console.log(getShippingCost("Australia"));
  console.log(getShippingCost("Germany"));
  console.log(getShippingCost("China"));
  console.log(getShippingCost("Chile"));
  console.log(getShippingCost("Jamaica"));
  console.log(getShippingCost("Sweden"));
