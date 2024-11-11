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
      "A true David vs. Goliath story of how the 14th century Scottish 'Outlaw King' Robert the Bruce used cunning and bravery to defeat the much larger and better equipped occupying English army. After being crowned King of Scotland, legendary warrior Robert the Bruce is forced into exile by the English and leads a band of outlaws to help him reclaim the throne.",
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
      "In an alternate 1985 America, costumed superheroes are part of everyday life. When one of his former comrades is murdered, masked vigilante Rorschach (Jackie Earle Haley) uncovers a plot to kill and discredit all past and present superheroes. As he reconnects with his retired associates, only one of which has true powers, Rorschach glimpses a far-reaching conspiracy involving their shared past and catastrophic consequences for the world's future.",
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
      "Businessman Oskar Schindler (Liam Neeson) arrives in Krakow in 1939, ready to make his fortune from World War II, which has just started. After joining the Nazi party primarily for political expediency, he staffs his factory with Jewish workers for similarly pragmatic reasons. When the SS begins exterminating Jews in the Krakow ghetto, Schindler arranges to have his workers protected to keep his factory in operation, but soon realizes that in so doing, he is also saving innocent lives.",
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
      "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
  },
];

export default Movies;
