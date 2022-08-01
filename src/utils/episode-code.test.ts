import { episodeCode } from "./episode-code";

test("episodeCode returns correct code format", () => {
  expect(episodeCode(2, 7)).toBe("S02E07");
  expect(episodeCode(22, 27)).toBe("S22E27");
  expect(episodeCode(2, 27)).toBe("S02E27");
  expect(episodeCode(22, 7)).toBe("S22E07");
});
