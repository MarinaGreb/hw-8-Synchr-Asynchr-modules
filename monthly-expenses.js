let expensesArray = [
  { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390]},
  { expenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200]},
  { expenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000]},
];


const arrayOfMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 
                      'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function monthlyExpenses(arr) {
    arr.forEach((e, index) => {//для всех элементов в массиве
    if (e <= 1000) {
    let month = new Date(2022, index).getMonth();
    //console.log(month.getMonth())
    //console.log(arrayOfMonths[index])//я бы лучше использовала данный вариант, особо не вижу смысла в использовании Date(
    console.log(arrayOfMonths[month])
    }
  });
}

for (let i=0; i < expensesArray.length; i++){
  console.log(`Месяцы для ${i+1}-го массива затрат:`)
  monthlyExpenses(expensesArray[i].expenses);
}
