import {mount} from "@vue/test-utils";
import OneMember from "@/components/OneMember.vue";

describe(
	"OneMember.vueのテスト",
	() => {
		test(
			"Noteデータがある場合のPropsのテスト",
			() => {
				const propsData = {
					id: 22458,
					name: "中野三郎",
					email: "mue@wow.com",
					points: 200,
					note: "すばらしい!"
				};
				const wrapper = mount(OneMember, {props: propsData});
				const actualHtml = wrapper.html();
				expect(actualHtml).toContain(String(propsData.id));
				expect(actualHtml).toContain(propsData.name);
				expect(actualHtml).toContain(propsData.email);
				expect(actualHtml).toContain(String(propsData.points));
				expect(actualHtml).toContain(propsData.note);
			}
		);
		test(
			"Noteデータがない場合のPropsのテスト",
			() => {
				const propsData = {
					id: 55148,
					name: "江口四郎",
					email: "egu@chi.com",
					points: 300
				};
				const wrapper = mount(OneMember, {props: propsData});
				const actualHtml = wrapper.html();
				expect(actualHtml).toContain(String(propsData.id));
				expect(actualHtml).toContain(propsData.name);
				expect(actualHtml).toContain(propsData.email);
				expect(actualHtml).toContain(String(propsData.points));
				expect(actualHtml).toContain("--");
			}
		);
		test(
			"Emitのテスト",
			() => {
				const propsData = {
					id: 22458,
					name: "中野三郎",
					email: "mue@wow.com",
					points: 200,
					note: "すばらしい!"
				};
				const wrapper = mount(OneMember, {props: propsData});
				wrapper.get("button").trigger("click");
				const incrementPointEvent = wrapper.emitted("incrementPoint");
				expect(incrementPointEvent).toHaveLength(1);
				const expectedIncrementPointEvent = [[propsData.id]];
				expect(incrementPointEvent).toEqual(expectedIncrementPointEvent);
			}
		);
	}
);
