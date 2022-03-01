import {describe, test, expect} from "vitest";
import {divideTwoNums} from "@/functions";

describe(
	"functions.tsのdivideTwoNums()関数のテスト",
	() => {
		test(
			"単純な割り算の場合のテスト",
			() => {
				const num1 = 6;
				const num2 = 3;
				const actual = divideTwoNums(num1, num2);
				const expected = 2;
				expect(actual).toBe(expected);
			}
		);
		test(
			"分子が0の場合のテスト",
			() => {
				const num1 = 0;
				const num2 = 3;
				const actual = divideTwoNums(num1, num2);
				const expected = 0;
				expect(actual).toBe(expected);
			}
		);
		test(
			"分母が0の場合のテスト",
			() => {
				const num1 = 6;
				const num2 = 0;
				const actual = divideTwoNums(num1, num2);
				const expected = Infinity;
				expect(actual).toBe(expected);
			}
		);
	}
);
