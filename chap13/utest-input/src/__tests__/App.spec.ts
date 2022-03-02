import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import App from "@/App.vue";

describe(
	"App.vueのテスト",
	() => {
		test(
			"初期値の場合のテスト",
			() => {
				const wrapper = mount(App);
				const actual = wrapper.get(`[data-testid="ans"]`).text();
				const expected = "2";
				expect(actual).toBe(expected);
			}
		);
		test(
			"分子8で分母2を入力した場合のテスト",
			async () => {
				const wrapper = mount(App);
				await wrapper.get(`[data-testid="num1"]`).setValue(8);
				await wrapper.get(`[data-testid="num2"]`).setValue(2);
				const actual = wrapper.get(`[data-testid="ans"]`).text();
				const expected = "4";
				expect(actual).toBe(expected);
			}
		);
	}
);
