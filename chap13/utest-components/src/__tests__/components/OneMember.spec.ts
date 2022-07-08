import {describe, test, expect} from "vitest";
import {mount} from "@vue/test-utils";
import OneMember from "@/components/OneMember.vue";

describe(
	"OneMember.vueのテスト",
	() => {
		test(
			"備考データがある場合のPropsのテスト",
			() => {
				const propsData = {
					id: 22458,
					name: "中野三郎",
					email: "mue@wow.com",
					points: 200,
					note: "すばらしい!"
				};
				const wrapper = mount(OneMember, {props: propsData});
				const actualText = wrapper.text();
				// console.log(actualText);
				// console.log(wrapper.html());
				expect(actualText).toContain(String(propsData.id));
				expect(actualText).toContain(propsData.name);
				expect(actualText).toContain(propsData.email);
				expect(actualText).toContain(String(propsData.points));
				expect(actualText).toContain(propsData.note);
			}
		);
		test(
			"備考データがない場合のPropsのテスト",
			() => {
				const propsData = {
					id: 55148,
					name: "江口四郎",
					email: "egu@chi.com",
					points: 300
				};
				const wrapper = mount(OneMember, {props: propsData});
				const actualText = wrapper.text();
				expect(actualText).toContain(String(propsData.id));
				expect(actualText).toContain(propsData.name);
				expect(actualText).toContain(propsData.email);
				expect(actualText).toContain(String(propsData.points));
				expect(actualText).toContain("--");
			}
		);
		test(
			"［ポイント加算］ボタンクリックのテスト（Emitのテスト）",
			async () => {
				const propsData = {
					id: 22458,
					name: "中野三郎",
					email: "mue@wow.com",
					points: 200,
					note: "すばらしい!"
				};
				const wrapper = mount(OneMember, {props: propsData});
				await wrapper.get("button").trigger("click");
				const incrementPointEvent = wrapper.emitted("incrementPoint");
				// console.log(incrementPointEvent);
				expect(incrementPointEvent).toHaveLength(1);
				const expectedIncrementPointEvent = [[propsData.id]];
				expect(incrementPointEvent).toEqual(expectedIncrementPointEvent);
			}
		);
	}
);
