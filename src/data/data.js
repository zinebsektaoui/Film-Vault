const movies = [
  {
    id: 1,
    title: "The Flu",
    description:
      "Chaos ensues when a lethal, airborne virus infects the population of a South Korean city less than 20 kilometers from Seoul.",
    year: 2013,
    genre: "Disaster, thriller, and medical drama",
    director: "Kim Sung-su",
    actors: ["Jang Hyuk", "Soo Ae", "Park Min-ha"],
    image:
      "https://www.themoviedb.org/t/p/original/mvTXhTddHIZbOU9pmrcPODI1kRx.jpg",
    rating: 5,
  },

  {
    id: 2,
    title: "Straw",
    description: "A psychological crime thriller full of mystery and suspense.",
    year: 2020,
    genre: "Psychological, crime and drama",
    director: "Tyler Perry",
    actors: ["Taraji P. Henson", "Sherri Shepherd"],
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/05/straw-poster.jpg",
    rating: 5,
  },

  {
    id: 3,
    title: "The Pianist",
    description: "The story of a brilliant pianist surviving World War II.",
    year: 2002,
    genre: "Psychological drama, tragedy and biography",
    director: "Roman Polanski",
    actors: ["Adrien Brody", "Thomas Kretschmann"],
    image:
      "https://th.bing.com/th/id/R.f8d6be1567e44a0505ede3410217d170?rik=KRxy9rxDKrSLhQ&pid=ImgRaw&r=0",
    rating: 5,
  },

  {
    id: 4,
    title: "The Silence",
    description:
      "A family struggles to survive mysterious creatures hunting by sound.",
    year: 2019,
    genre: "Drama,sci-fi, horror and thriller",
    director: "John R. Leonetti",
    actors: ["Stanley Tucci", "Kiernan Shipka"],
    image:
      "https://tse3.mm.bing.net/th/id/OIP.IWlRa_TleW2cM3O5YoSYEgHaK9?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.5,
  },

  {
    id: 5,
    title: "Bird Box",
    description:
      "Survivors must avoid looking at terrifying supernatural entities.",
    year: 2018,
    genre: "Horror",
    director: "Susanne Bier",
    actors: ["Sandra Bullock", "Trevante Rhodes"],
    image:
      "https://www.themoviedb.org/t/p/original/z6m7s4w4Erxnr5k2jc1TZR1AMva.jpg",
    rating: 4.8,
  },

  {
    id: 6,
    title: "My Name",
    description: "A woman joins a criminal organization to avenge her father.",
    year: 2021,
    genre: "Action and crime",
    director: "Kim Jin-min",
    actors: ["Han So-hee", "Park Hee-soon"],
    image:
      "https://m.media-amazon.com/images/M/MV5BN2ZiZWU3MzMtNGM5OC00ZWVkLTkxNjUtMTYwZGU4MzgxYzk0XkEyXkFqcGc@._V1_.jpg",
    rating: 4.9,
  },

  {
    id: 7,
    title: "Tokyo Godfathers",
    description:
      "Three homeless people discover an abandoned baby on Christmas Eve.",
    year: 2003,
    genre: "Animation, humour and romance",
    director: "Satoshi Kon",
    actors: ["Toru Emori", "Yoshiaki Umegaki"],
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/77f2a059ef7ef91394ea6223f7a0e85c7f7c9946cf44f862ca120d0193c6c929._SX1080_FMjpg_.jpg",
    rating: 4,
  },

  {
    id: 8,
    title: "Parasite",
    description: "A poor family infiltrates the life of a wealthy household.",
    year: 2019,
    genre: "Thriller",
    director: "Bong Joon-ho",
    actors: ["Song Kang-ho", "Cho Yeo-jeong"],
    image:
      "https://i.redd.it/nw5ebr64zb3b1.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Train to Busan",
    description:
      "Passengers on a high-speed train fight for survival after a zombie outbreak spreads rapidly across South Korea.",
    year: 2016,
    genre: "Action, horror, thriller",
    director: "Yeon Sang-ho",
    actors: ["Gong Yoo", "Ma Dong-seok", "Jung Yu-mi"],
    image:
      "https://www.themoviedb.org/t/p/original/3H1WFCuxyNRP35oiL2qqwhAXxc0.jpg",
    rating: 5,
  },
  {
    id: 4,
    title: "Alive",
    description:
      "A young gamer trapped alone in his apartment struggles to survive during a mysterious zombie apocalypse.",
    year: 2020,
    genre: "Horror, thriller, action",
    director: "Cho Il-hyung",
    actors: ["Yoo Ah-in", "Park Shin-hye"],
    image:
      "https://th.bing.com/th/id/R.0bd0f3a980db194a2135a48f999adf2f?rik=pnXmobDrqRXjiA&pid=ImgRaw&r=0",
    rating: 4,
  },

  {
    id: 5,
    title: "Forgotten",
    description:
      "After his brother returns home following a kidnapping, a young man begins to suspect that something is terribly wrong.",
    year: 2017,
    genre: "Mystery, thriller",
    director: "Jang Hang-jun",
    actors: ["Kang Ha-neul", "Kim Mu-yeol"],
    image:
      "https://blog.asianwiki.com/wp-content/uploads/2017/10/Forgotten-KM.jpg",
    rating: 5,
  },

  {
    id: 6,
    title: "The Call",
    description:
      "Two women living in different timelines connect through a phone call and change each other's destinies.",
    year: 2020,
    genre: "Thriller, mystery, sci-fi",
    director: "Lee Chung-hyun",
    actors: ["Park Shin-hye", "Jeon Jong-seo"],
    image:
      "https://image.tmdb.org/t/p/w300/89kuSCazBEn7JiJYLVEJennK8SH.jpg",
    rating: 4,
  },

  {
    id: 7,
    title: "Snowpiercer",
    description:
      "In a frozen future, the last survivors of humanity live aboard a train divided by social classes.",
    year: 2013,
    genre: "Sci-fi, action, drama",
    director: "Bong Joon-ho",
    actors: ["Chris Evans", "Song Kang-ho", "Tilda Swinton"],
    image:
      "https://image.tmdb.org/t/p/original/33dV6HAnXBmwKl640gO3U4auqUN.jpg",
    rating: 3,
  },

  {
    id: 8,
    title: "The Host",
    description:
      "A family fights to rescue their daughter after a mutant creature emerges from the Han River.",
    year: 2006,
    genre: "Horror, drama, sci-fi",
    director: "Bong Joon-ho",
    actors: ["Song Kang-ho", "Byun Hee-bong"],
    image:
      "https://image.tmdb.org/t/p/w1280/1bDa2d9VqqBQlk42Gduu37Rz1ob.jpg",
    rating: 2,
  },
];

export default movies;
