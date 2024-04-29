function getArrayParams(...arr) {
  let [min, max, sum] = [Infinity, -Infinity, 0];
  for (let i = 0; i < arr.length; i++){
    console.log(min);
  //   if (arr[i] < min){
  //     min = arr[i];
  //   }
  //   if (arr[i] > max){
  //     max = arr[i];
  //   }
  //   sum += arr[i]
  max = Math.max(...arr);
  min = Math.min(...arr);
  sum  = arr.reduce(function (a, b) {
    return a + b;
  });

  }
    return { min: min, max: max, avg: +(sum / arr.length).toFixed(2) };
  }

function summElementsWorker(...arr) {
  if (arr.length <= 0){
    return 0;
  } 
  return( arr.reduce(function (a, b) {
    return a + b;
  }));

}

function differenceMaxMinWorker(...arr) {
  if (arr.length <= 0){
    return 0;
  } 
  return (Math.max(...arr) - Math.min(...arr));
}

function differenceEvenOddWorker(...arr) {
  if (arr.length <= 0){
    return 0;
  } 
  let [sumEvenElement, sumOddElement] = [0, 0];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      sumEvenElement += arr[i];
    }else{
      sumOddElement += arr[i];
    }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  if (arr.length <= 0){
    return 0;
  } 
let [sumEvenElement, countEvenElement] = [0, 0];
for (let i = 0; i < arr.length; i++){
  if (arr[i] % 2 == 0){
    sumEvenElement += arr[i];
    countEvenElement +=1;
  }
}
return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i = 0; i < arrOfArr.length; i++){
  const func_result = func(...arrOfArr[i]);
  if (func_result > maxWorkerResult){
    maxWorkerResult = func_result;
  }
}
return (maxWorkerResult);
}
