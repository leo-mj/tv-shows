import IShow from "./i-show";

export function showMatch(show: IShow, searchText: string): boolean {
  const showValuesArray = [show.name, show.genres, show.summary];
  for (const value of showValuesArray) {
    if (value.includes(searchText)) {
      return true;
    }
  }
  return false;
}
