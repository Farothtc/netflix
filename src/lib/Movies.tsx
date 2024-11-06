export type MoviesData = {
  id: number;
  banner: string;
  name: string;
  imdb: number;
  imdbmax: number;
  featured: boolean;
  movfont: string;
  tcolor: string;
  description: string;
};

const Movies: MoviesData[] = [
  {
    id: 1,
    banner: "./src/assets/outlaw/outlaw-king.jpg",
    name: "Outlaw King",
    imdb: 6.9,
    imdbmax: 10,
    featured: false,
    movfont: "'Ancient', serif",
    tcolor: "white",
    description:
      "A true David vs. Goliath story of how the 14th century Scottish 'Outlaw King' Robert the Bruce used cunning and bravery to defeat the much larger and better equipped occupying English army.",
  },
  {
    id: 2,
    banner: "./src/assets/watchmen/watchmen.jpg",
    name: "Watchmen",
    imdb: 7.6,
    imdbmax: 10,
    featured: false,
    movfont: "'Ethnocentric', serif",
    tcolor: "yellow",
    description:
      "In a version of 1985 where superheroes exist, the murder of a colleague sends active vigilante Rorschach on the trail of a conspiracy that will change the course of history.",
  },
  {
    id: 3,
    banner: "./src/assets/schindler/schindler.jpg",
    name: "Schindler's List",
    imdb: 9,
    imdbmax: 10,
    featured: false,
    movfont: "'Western Bang Bang', serif",
    tcolor: "antiquewhite",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  },
  {
    id: 4,
    banner: "./src/assets/inter/inter.jpg",
    name: "Interstellar",
    imdb: 8.7,
    imdbmax: 10,
    featured: false,
    movfont: "'Ancient', serif",
    tcolor: "black",
    description:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  },
];

export default Movies;
