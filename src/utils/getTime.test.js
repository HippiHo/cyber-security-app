import { expect, test } from "vitest";
import { getReadableTime } from "./getTime.js";

test("Transforms old time string into more readable string", () => {
  expect(getReadableTime("2025-02-11T12:45:44.286Z")).toBe(
    "2025-02-11 at 12:45"
  );
});
