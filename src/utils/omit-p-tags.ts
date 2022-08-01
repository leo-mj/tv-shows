export function omitPTags(summary: string): string {
  const withoutOpeningTags: string[] = summary.split("<p>");
  const withoutClosingTags: string[] =
    withoutOpeningTags[withoutOpeningTags.length - 1].split("</p>");
  return withoutClosingTags[0];
}
