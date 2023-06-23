"use strict";

/* 
Базовый уровень:
1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4)
*/

const N = 4;
function calculateSum(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  return sum;
}
const sum = calculateSum(N);
console.log(sum);

/*
2.1 Создать объект client который содержит следующие свойства: имя, фамилию, пол, контактные данные, id., номер кредитной карты, уровень карты.
2.2 Создать объект банка у которого есть название и адрес.
2.3 Добавить банку свойство cardLevels, значением которого будет Мапа, связывающая возможные уровни карточки в этом банке с обьектами, в которорых хранятся свойства скидка, кешбек, кредитный лимит 
2.4 Реализовать функцию вывода на экран всей информации о клиенте, вкрлючая данные о скидке кредитном лимите и тд.
*/
const client = {
  firstName: "Boris",
  lastName: "Ushakov",
  sex: "male",
  contacts: "Kyiv",
  id: "1212",
  cardNumber: "1212121212",
  cardLevel: "Gold",
};

const bank = {
  bankName: "Privat",
  address: "UA.Kyiv",
};

bank.cardLevels = new Map();
const silverLevel = {
  discount: "5%",
  cashback: "5%",
  creditLimit: 50000,
};
bank.cardLevels.set("Silver", silverLevel);

const goldLevel = {
  discount: "10%",
  cashback: "10%",
  creditLimit: 100000,
};
bank.cardLevels.set("Gold", goldLevel);

function clientInfo(client, bank) {
  console.log("First Name: " + client.firstName);
  console.log("Last Name: " + client.lastName);
  console.log("Sex: " + client.sex);
  console.log("Contacts: " + client.contacts);
  console.log("ID: " + client.id);
  console.log("Card Number: " + client.cardNumber);
  console.log("Card Level: " + client.cardLevel);

  const level = bank.cardLevels.get(client.cardLevel);
  console.log("Discount: " + level.discount);
  console.log("Cashback: " + level.cashback);
  console.log("Credit Limit: " + level.creditLimit);
}

clientInfo(client, bank);

/*
3.1 Создать числовой массив и проинициализировать его из 20+ элементов.
3.2 Вывести элементы с четными индексами
3.3 Вывести только нечетные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы элементов, равных нулю ( если таковых нет то добавить 1-2 для проверки)
3.5 Подсчитать количество отрицательных чисел в массиве
*/
let numArray = [
  -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10,
];

for (let i = 0; i < numArray.length; i++) {
  const num = numArray[i];

  if (num % 2 === 0) {
    console.log(num);
  }
}
//
for (let i = 0; i < numArray.length; i++) {
  const num = numArray[i];

  if (num % 3 === 0) {
    console.log(num);
  }
}
//
for (let i = 0; i < numArray.length; i++) {
  const num = numArray[i];

  if (num === 0) {
    console.log(num);
  }
}

for (let i = 0; i < numArray.length; i++) {
  let negativeCount = 0;
  const num = numArray[i];
  if (num < 0) {
    0;
    console.log(negativeCount++);
  }
}
//
/*
4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)
*/
class Book {
  constructor(author, title, yearOfPublication, publisher) {
    this.author = author;
    this.title = title;
    this.yearOfPublication = yearOfPublication;
    this.publisher = publisher;
  }
}

class EBook extends Book {
  constructor(author, title, yearOfPublication, publisher, format, eNumber) {
    super(author, title, yearOfPublication, publisher);
    this.format = format;
    this.eNumber = eNumber;
  }
}

const ebook1 = new EBook("author", "title", 2000, "publisher", "pdf", 12123312);

/*
5
Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

/*
6
С сервера передается обьект, имеющий следующую структуру:
*/
const serverResponse = {
  data: {
    data: [
      {
        id: 0,
        name: "John",
        lastName: "Doe",
      },
      {
        id: 1,
        name: "Jane",
        lastName: "Doe",
      },
      {
        id: 2,
        name: "Admin",
        lastName: "Tiranovich",
      },
      {
        id: 3,
        name: "User",
        lastName: "Undefinovich",
      },
    ],
  },
};

const {
  data: { data: users },
} = serverResponse;
console.log(users);
const [, , user3, user4] = users;
console.log(user3);
console.log(user4);

/*
С помощью деструктуризации:
- создать переменную users на основании массива в обьекте serverResponse
- создать отдельные переменные для 3 и 4 пользователя 
*/
