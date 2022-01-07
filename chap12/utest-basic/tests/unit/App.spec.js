import {mount} from "@vue/test-utils";
import App from "@/App";

describe(
	"App.vueのテスト",
	() => {
		test(
			"初期値でのpタグの内容テスト",
			() => {
				const wrapper = mount(App);
				const actual = wrapper.get("p").text();
				const expected = "6÷3=2";
				expect(actual).toBe(expected);
			}
		);
	}
);
