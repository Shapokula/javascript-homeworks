class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		};

		if (this.alarmCollection.findIndex((alarm) => alarm.time === time) !== -1) {
			console.warn('Уже присутствует звонок на это же время');
		};

		this.alarmCollection.push({
			callback,
			time,
			canCall: true,
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		let currentTime = new Date();
		return currentTime.toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		if (this.intervalId) {
			return;
		}

		function checkAlarm() {
			this.alarmCollection.forEach(alarm => {
				if ((alarm.time === this.getCurrentFormattedTime()) && alarm.canCall === true) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}

		this.intervalId = setInterval(() => checkAlarm.call(this), 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}