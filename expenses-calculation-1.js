let expensesArray = [
  { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390]},
  { expenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200]},
  { expenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000]},
];

let sumArr = [];//массив с суммами затрат по всем объектам
let sumAllExpenses =0;//сумма затрат по всем массивам- во всех объектах

function calculateSum(arr) {//функция для расчёта суммы затрат в одном объекте, значение которого представлено массивом
    let sumExpense = 0;// сумма затрат в одном объекте 
    arr.forEach((e) => {//для всех элементов в массиве
    if (e > 1000) {
      sumExpense += e;
    }
  });
  //console.log(sumExpense);
  return sumExpense;
}
//calculateAmount(arr1);

expensesArray.forEach((e) => { //для всех объектов-"e" в массиве "expensesArray"
  let expensesArrItem = e.expenses; //массив для передачи значения - массива, из объекта "e" по ключу expenses
  let arrItemSum = calculateSum(expensesArrItem);//переменная куда возвращено значение "sumExpense"-сумма по одному массиву
  sumArr.push(arrItemSum);
  sumAllExpenses += arrItemSum;
});

console.log(`Сумма затрат по каждому объекту в массиве: ${sumArr}`);
console.log(`Расчет суммы затрат по всем объектам: ${sumAllExpenses}`)

//TESTS

function testCalculateSum(arr, expectedResult){
    return calculateSum(arr) == expectedResult;
}

let expectedResults = [40590, 148200, 25709];
for (let i=0; i < expectedResults.length; i++){
    console.log(`Результат прохождения теста для ${i}-го массива`);
    console.log(testCalculateSum(expensesArray[i].expenses, expectedResults[i]))
}
