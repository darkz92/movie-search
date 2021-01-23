import { Rating } from './rating';
import { Result } from './result';

export class DetailResult extends Result {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}
