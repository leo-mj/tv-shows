export function episodeCode(epSeason: number, epNum: number): string {
  let seasonCode = "";
  if (epSeason < 10) {
    seasonCode = `S0${epSeason}`;
  } else {
    seasonCode = `S${epSeason}`;
  }
  let numCode = "";
  if (epNum < 10) {
    numCode = `E0${epNum}`;
  } else {
    numCode = `E${epNum}`;
  }
  return seasonCode + numCode;
}
