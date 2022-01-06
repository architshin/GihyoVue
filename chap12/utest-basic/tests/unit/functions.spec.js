import {divideTwoNums} from "@/functions";

describe(
	"functions.tsのdivideTwoNums()関数のテスト",
	() => {
		test(
			"単純な割り算の場合",
			() => {
				const num1 = 6;
				const num2 = 3;
				const ans = divideTwoNums(num1, num2);
				expect(ans).toBe(2);
			}
		);
		test(
			"分子が0の場合",
			() => {
				const num1 = 0;
				const num2 = 3;
				const ans = divideTwoNums(num1, num2);
				expect(ans).toBe(0);
			}
		);
		test(
			"分母が0の場合",
			() => {
				const num1 = 6;
				const num2 = 0;
				const ans = divideTwoNums(num1, num2);
				expect(ans).toBe(Infinity);
			}
		);
	}
);
