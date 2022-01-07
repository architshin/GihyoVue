import {mount} from "@vue/test-utils";
import App from "@/App.vue";

describe(
	"App.vueのテスト",
	() => {
		test(
			"合計点数表示のテスト",
			async () => {
				const stubData = {
					OneMember: {
						template: "<p>One Member</p>"
					}
				};
				const wrapper = mount(App, {
					global: {
						stubs: stubData
					}
				});
				const actualHTML = wrapper.html();
				const expected = "全会員の保有ポイントの合計: 88";
				expect(actualHTML).toContain(expected);
			}
		);
	}
);
