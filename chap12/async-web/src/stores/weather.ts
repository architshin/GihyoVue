import {defineStore} from "pinia";

export interface City {
	name: string;
	q: string;
}

interface State {
	cityList: Map<string, City>;
	selectedCity: City;
	isLoding: boolean;
	weatherDescription: string;
}

export const useWeatherStore = defineStore({
	id: "weather",
	state: (): State => {
		return {
			cityList: new Map<string, City>(),
			selectedCity: {
				name: "",
				q: ""
			},
			isLoding: true,
			weatherDescription: ""
		};
	},
	getters: {
	},
	actions: {
		prepareCityList() {
			this.cityList.set("Osaka",
				{
					name: "大阪",
					q: "Osaka"
				});
			this.cityList.set("Kobe",
				{
					name: "神戸",
					q: "Kobe"
				});
			this.cityList.set("Himeji",
				{
					name: "姫路",
					q: "Himeji"
				});
		},
		async recieveWeatherInfo(id: string) {
			this.selectedCity = this.cityList.get(id) as City;
			//アクセス先URLの基本部分の変数を用意。
			const weatherinfoUrl = "http://api.openweathermap.org/data/2.5/weather";
			//クエリパラメータの元データとなるオブジェクトリテラルを用意。
			const params:{
				lang: string,
				q: string,
				appId: string
			} =
			{
				//言語設定のクエリパラメータ
				lang: "ja",
				//都市名を表すクエリパラメータ。
				q: "Himeji",
				//APIキーのクエリパラメータ。ここに各自の文字列を記述する!!
				appId: "913136635cfa3182bbe18e34ffd44849"
			}
			//クエリパラメータを生成。
			const queryParams = new URLSearchParams(params);
			//実際にアクセスするURLを生成。
			const urlFull = `${weatherinfoUrl}?${queryParams}`;
			//URLに非同期でアクセスしてデータを取得。
			const response = await fetch(urlFull);
			//取得したデータを非同期でJSONに変換。
			const weatherInfoJSON = await response.json();
			//お天気情報JSONから天気データを取得し、ステートに格納。
			const weatherArray = weatherInfoJSON.weather;
			const weather = weatherArray[0];
			this.weatherDescription = weather.description;
			//isLodingステートをfalseに変更。
			this.isLoding = false;
		}
	}
})
