function getArrayParams(...arr) {

	let min = arr[0];
	let max = arr[0];
	let sum = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		} else if (arr[i] > max) {
			max = arr[i]
		};
		sum += arr[i];
	}

	let avg = sum / arr.length;
	avg = +(avg.toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	};

	let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return sum;
}

function differenceMaxMinWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	};

	let diff = Math.max(...arr) - Math.min(...arr);
	return diff;

}

function differenceEvenOddWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	};

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		};
	};

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

	if (arr.length === 0) {
		return 0;
	};

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		};
	};

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {

	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		};
	};

	return maxWorkerResult;
}