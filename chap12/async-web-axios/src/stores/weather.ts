import {defineStore} from "pinia";
import axios from "axios";

export interface City {
	name: string;
	q: string;
}

interface State {
	cityList: Map<string, City>;
	selectedCity: City;
	isLoading: boolean;
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
			isLoading: true,
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
			const weatherInfoUrl = "http://api.openweathermap.org/data/2.5/weather";
			//クエリパラメータの元データとなるオブジェクトリテラルを用意。
			const params:{
				lang: string,
				q: string,
				appId: string
			} =
			{
				//言語設定のクエリパラメータ
				lang: "ja",
				//都市を表すクエリパラメータ。
				q: this.selectedCity.q,
				//APIキーのクエリパラメータ。ここに各自の文字列を記述する!!
				appId: "xxxxxxxxxxxx"
			}
			//クエリパラメータを生成。
			const queryParams = new URLSearchParams(params);
			//実際にアクセスするURLを生成。
			const urlFull = `${weatherInfoUrl}?${queryParams}`;
			//URLに非同期でアクセスしてデータを取得。
			const response = await axios.get(urlFull);
			// console.log(response);
			//取得したデータからJSONデータを取得。
			const weatherInfoJSON = response.data;
			// console.log(weatherInfoJSON);
			//お天気情報JSONから天気データを取得し、ステートに格納。
			const weatherArray = weatherInfoJSON.weather;
			const weather = weatherArray[0];
			this.weatherDescription = weather.description;
			//isLoadingステートをfalseに変更。
			this.isLoading = false;
		}
	}
})
