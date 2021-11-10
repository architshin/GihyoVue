import {ref} from "vue";

export function setupTimeStrRef() {
	const now = new Date();
	const nowStr = now.toLocaleTimeString();
	const timeStrRef = ref(nowStr);
	const changeTime = (): void => {
		const newTime = new Date();
		const newTimeStr = newTime.toLocaleTimeString();
		timeStrRef.value = newTimeStr;
	}
	setInterval(changeTime, 1000);
	return timeStrRef;
}
