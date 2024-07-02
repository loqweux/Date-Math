// DZ 1

// Math.round - возвращает значение числа, округлённое до ближайшего целого

x = Math.round(5.4); // 5
y = Math.round(5.5); // 6
z = Math.round(5.6); // 6
console.log(x, y, z); // 5,6,6

// Math.ceil - Возвращает значение числа, округлённое к большему целому(округление вверх)

a = Math.ceil(5.4); // 6
b = Math.ceil(5.5); // 6
c = Math.ceil(5.6); // 6
console.log(a, b, c); // 6,6,6

// Math.floor - округляет аргумент до ближайшего меньшего целого(округление вниз)

d = Math.floor(5.4); // 5
e = Math.floor(5.5); // 5
f = Math.floor(5.6); // 5
console.log(d, e, f); // 5,5,5

// DZ 2

let now = new Date();

let option = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
let today = `Сегодня ${now.toLocaleString("ru-RU", option)}`;
console.log(today);

let minutes = now.getMinutes();
let hours = now.getHours();

let date = `${hours} часов ${minutes} минут`;
console.log(date);
