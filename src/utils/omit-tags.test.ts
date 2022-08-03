import { omitTags } from "./omit-tags";

test("omitPTags returns summary without <p> and </p> tags", () => {
  expect(omitTags("<p>Hello World!</p>")).toBe("Hello World!");
  expect(omitTags("Hello World!")).toBe("Hello World!");
});
