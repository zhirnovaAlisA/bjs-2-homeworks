function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum  = arr.reduce((a, b) => a + b, 0);
  return { min: min, max: max, avg: +(sum / arr.length).toFixed(2) };
  }

function summElementsWorker(...arr) {
  if (arr.length == 0){
    return 0;
  } 
  return arr.reduce((a, b) => a + b, 0);

}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0){
    return 0;
  } 
  return (Math.max(...arr) - Math.min(...arr));
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0){
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
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0){
    return 0;
  } 
let [sumEvenElement, countEvenElement] = [0, 0];
for (let i = 0; i < arr.length; i++){
  if (arr[i] % 2 == 0){
    sumEvenElement += arr[i];
    countEvenElement +=1;
  }
}
return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i = 0; i < arrOfArr.length; i++){
  const funcResult = func(...arrOfArr[i]);
  if (funcResult > maxWorkerResult){
    maxWorkerResult = funcResult;
  }
}
return maxWorkerResult;
}
