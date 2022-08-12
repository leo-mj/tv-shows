export default interface IShow {
  name: string;
  id: number;
  summary: string;
  genres: string[];
  status: string;
  image: {
    medium: string;
  };
  rating: {
    average: null | number;
  };
  runtime: null | number;
}
