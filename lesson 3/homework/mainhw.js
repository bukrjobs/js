// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let arr = [321,3,4,7,10];
// let arr2 = ['fkuk','okten','Juravlev','Bukreev','html'];
// let arr3 = [321,'fkuk',true,false,3.14];
// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let a = [];
// a[0]='Bukreev';
// a[1]='Igor';
// a[2]=33;
// a[3]=true;
// a[4]=false;
// a[5]='12345';
// console.log(a);

// -- Створити пустий масив вторая версия.
// let arr = [];
// for (let i = 0; i <= 4; i++) {
//     arr[i] = i + 1;
// }
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let r=0; r<10; r++){
//     document.write(`<div> блок </div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let r=0; r<10; r++){
//     document.write(`<div> блок  ${r}</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let g=1;
// while (g <= 20){
//     document.write(`<h1> блок </h1>`);
//     g++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let g=1;
// while (g <= 20){
//     document.write(`<h1> блок ${g} </h1>`);
//     g++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr=[1,2,3,4,5,6,7,8,9,10];
// for (let r=0; r < arr.length; r++){
//     console.log(arr[r]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr=['Bukreev','Igor','html','33','google','Bukreev2','Igor2','html2','332','google2'];
// for (let r=0; r < arr.length; r++){
//     console.log(arr[r]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr=['Bukreev','Igor','html',33, true, false,3.12,'html2',332,'google2'];
// for (let r=0; r < arr.length; r++){
//     console.log(arr[r]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [321, 3, 4, 7, 10, 321, 3, 4, 7, 10, 'fkuk', 'okten', 'Juravlev', 'Bukreev', 'html', 'katya', 'atb', 'run','best','css',true, false,true, false,true];
// for (let r=0;r<arr.length; r++){
//     if (typeof arr[r] === "boolean"){
//         console.log(arr[r]);
//     }
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [321, 3, 4, 7, 10, 321, 3, 4, 7, 10, 'fkuk', 'okten', 'Juravlev', 'Bukreev', 'html', 'katya', 'atb', 'run','best','css',true, false,true, false,true];
// for (let r=0;r<arr.length; r++){
//     if (typeof arr[r] === "number"){
//         console.log(arr[r]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [321, 3, 4, 7, 10, 321, 3, 4, 7, 10, 'fkuk', 'okten', 'Juravlev', 'Bukreev', 'html', 'katya', 'atb', 'run','best','css',true, false,true, false,true];
// for (let r=0;r<arr.length; r++){
//     if (typeof arr[r] === "string"){
//         console.log(arr[r]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// array = ["Igor", true, "bukreev", 4, 7, false, 5, false, true, 'run'];
// arr = [];
// arr[0] = "Igor";
// arr[4] = true;
// arr[2] = "bukreev";
// arr[3] = 4;
// arr[6] = 7;
// arr[5] = false;
// arr[1] = 5;
// arr[9] = false;
// arr[8] = true;
// arr[7] = 'run';
// for (let r = 0; r < arr.length; r++){
//     console.log(arr[r]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <10; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }