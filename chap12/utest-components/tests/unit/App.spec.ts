import {mount} from "@vue/test-utils";
import App from "@/App.vue";
import OneMember from "@/components/OneMember.vue"

describe(
	"App.vueのテスト",
	() => {
		test(
			"合計点数表示のテスト",
			() => {
				const stubData = {
					OneMember: true
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
		test(
			"Emitメソッドのテスト",
			async () => {
				const stubData = {
					OneMember: true
				};
				const wrapper = mount(App, {
					global: {
						stubs: stubData
					}
				});
				const oneMemberComponent = wrapper.findComponent(OneMember);
				await oneMemberComponent.vm.$emit("incrementPoint", 33456);
				const actualHTML = wrapper.html();
				const expected = "全会員の保有ポイントの合計: 89";
				expect(actualHTML).toContain(expected);
			}
		);
	}
);
