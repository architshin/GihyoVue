import {mount} from "@vue/test-utils";
import OneMember from "@/components/OneMember.vue";

describe(
	"OneMember.vueのテスト",
	() => {
		test(
			"Noteデータがある場合のテスト",
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
				expect(actualText).toContain(String(propsData.id));
				expect(actualText).toContain(propsData.name);
				expect(actualText).toContain(propsData.email);
				expect(actualText).toContain(String(propsData.points));
				expect(actualText).toContain(propsData.note);
			}
		);
	}
);
