//Задача № 1
function cachingDecoratorNew(func) {
	let cache = {};
	return function(...args) {
		const hash = md5(args);
		if (hash in cache) {
			console.log("Из кеша: " + cache[hash]);
			return "Из кеша: " + cache[hash];
		}

		const hashArray = Object.keys(cache);
		if (hashArray.length === 5) {
			delete cache[hashArray[0]];
		}
		const result = func(...args);
		cache[hash] = result;
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;

	function wrapper(...args) {
		wrapper.allCount++;
		if (timeoutId) {
			console.log("удалили текущий таймаут");
			clearTimeout(timeoutId);
		} else {
			func(...args);
			wrapper.count++;
		}

		console.log("создаем новый таймаут");
		timeoutId = setTimeout(() => {
			func(...args);
			wrapper.count++;
		}, delay);
	}

	wrapper.allCount = 0;
	wrapper.count = 0;

	return wrapper;
}