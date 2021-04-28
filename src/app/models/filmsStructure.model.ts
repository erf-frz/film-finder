export class MoviesObj{
  constructor(
    public Search:FilmInformation[],
    public totalResults:string,
    public Response: boolean
  ){}
}


export class FilmInformation{
  constructor(
    public Title:string,
    public Year:string,
    public imbdID:string,
    public Type:string,
    public Poster:string
  ){}
}


export class FilmFullDetails{
  constructor(
    public Title:string,
    public Year:string,
    public Rated:string,
    public Released:string,
    public Runtime:string,
    public Genre:string,
    public Director:string,
    public Writer:string,
    public Actors:string,
    public Plot:string,
    public Language:string,
    public Country:string,
    public Awards:string,
    public Poster:string,
    public Ratings:{Source:string,Value:string}[],
    public Metascore:string,
    public imdbRating:string,
    public imdbVotes:string,
    public imdbID:string,
    public Type:string,
    public DVD: string,
    public BoxOffice:string,
    public Production:string,
    public Website:string,
    public Response:boolean
  ){}
}


