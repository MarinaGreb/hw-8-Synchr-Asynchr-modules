let expensesArray = [
  { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390]},
  { expenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200]},
  { expenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000]},
];


let arrayOfMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь'];


function monthlyExpenses(arr, mounth) {
    arr.forEach((e, index) => {//для всех элементов в массиве
    if (e <= 1000) {
    //  new Date(2022, index, 01);
      console.log(mounth[index])
    }
  });



  //console.log(sumExpense);
  return sumExpense;
}

for (let i=0; i < expectedResults.length; i++){
  console.log(monthlyExpenses(expensesArray[i].expenses, arrayOfMonths))
}


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

//console.log(testCalculateSum(expensesArray[0].expenses, 40590))

let expectedResults = [40590, 148200, 25709];
for (let i=0; i < expectedResults.length; i++){
    console.log(testCalculateSum(expensesArray[i].expenses, expectedResults[i]))
}

