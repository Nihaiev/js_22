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
