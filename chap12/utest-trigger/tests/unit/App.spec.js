import {mount} from "@vue/test-utils";
import App from "@/App";

describe(
	"App.vueのテスト",
	() => {
		test(
			"初期状態(隠し領域非表示)のテスト",
			() => {
				const wrapper = mount(App);
				const actual = wrapper.find("#invisible").exists();
				const expected = false;
				expect(actual).toBe(expected);
			}
		);
		test(
			"表示ボタンをクリックした場合のテスト",
			async () => {
				const wrapper = mount(App);
				await wrapper.get("#showButton").trigger("click");
				const actual = wrapper.find("#invisible").exists();
				const expected = true;
				expect(actual).toBe(expected);
			}
		);
	}
);
