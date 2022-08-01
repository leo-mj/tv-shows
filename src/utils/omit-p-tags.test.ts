import { omitPTags } from "./omit-p-tags";

test("omitPTags returns summary without <p> and </p> tags", () => {
  expect(omitPTags("<p>Hello World!</p>")).toBe("Hello World!");
  expect(omitPTags("Hello World!")).toBe("Hello World!");
});
