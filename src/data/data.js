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
    rating: 4,
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
    rating: 3,
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
    rating: 4,
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
    rating: 4,
  },
  
  {
    id: 9,
    title: "Train to Busan",
    description:
      "Passengers on a high-speed train fight for survival after a zombie outbreak spreads rapidly across South Korea.",
    year: 2016,
    genre: "Action, horror, thriller",
    director: "Yeon Sang-ho",
    actors: ["Gong Yoo", "Ma Dong-seok", "Jung Yu-mi"],
    image:
      "https://www.themoviedb.org/t/p/original/3H1WFCuxyNRP35oiL2qqwhAXxc0.jpg",
    rating: 3
  },
  
  {
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
  
  {
    id: 15,
    title: "John Wick",
    description: "John Wick is a retired hitman trying to live a quiet life. After a personal tragedy, his past catches up with him in a brutal way. He returns to the underworld to take revenge with skill and precision.",
    year: 2014,
    genre: "Action",
    director: "Chad Stahelski",
    actors: ["Keanu Reeves"],
    image: "https://tse3.mm.bing.net/th/id/OIP.knrcWto1G0eIm6rTBTR9bgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 3
  },
  
  {
    id: 16,
    title: "Mad Max: Fury Road",
    image: "https://tse4.mm.bing.net/th/id/OIP.zWhqu0_mLT7ypQ463OHusQHaKx?rs=1&pid=ImgDetMain&o=7&rm=3",
    year: 2015,
    genre: "Action",
    rating: 4,
    director: "George Miller",
    actors: ["Tom Hardy", "Charlize Theron"],
    description: "In a desert wasteland, Max joins Furiosa in a daring escape. They flee from a tyrant who controls water and power. The journey becomes a high-speed chase filled with chaos and survival."
  },
  
  {
    id: 17,
    title: "The Promised Neverland",
    image: "https://1.bp.blogspot.com/-ageCnju0B-k/XSFhY8RPvxI/AAAAAAAAcbg/-_yX4o8-pyANrsEI1CqgGFPySvNsSiihgCLcBGAs/s1600/07f56cb3c9220952600b0975a883b0f91546997210_full.jpg",
    year: 2019,
    genre: "Anime, Action",
    rating: 4,
    director: "Kaiu Shirai and Posuka Demizu",
    actors: ["Eren", "Mikasa"],
    description: "Humanity lives behind massive walls to protect itself from giant titans. When the walls are breached, chaos spreads and many lives are lost. Eren and his friends join the fight to reclaim their world."
  },
  
  {
    id: 18,
    title: "Your Name",
    image: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    year: 2016,
    genre: "Anime, Romance",
    rating: 4,
    director: "Makoto Shinkai",
    actors: ["Taki", "Mitsuha"],
    description: "Two teenagers from different worlds mysteriously swap bodies. They begin to communicate and understand each other's lives. As they grow closer, a hidden truth changes everything."
  },
  
  {
    id: 19,
    title: "Forrest Gump",
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    year: 1994,
    genre: "Drama",
    rating: 3,
    director: "Robert Zemeckis",
    actors: ["Tom Hanks"],
    description: "Forrest Gump is a simple man with a kind heart. Despite his low intelligence, he accidentally influences major events in the 20th century. His journey is filled with love, loss, and unexpected success."
  },
  
  {
    id: 20,
    title: "The Shawshank Redemption",
    image: "https://tse1.mm.bing.net/th/id/OIP.4VaSguF9FOJxPIKHUM1HaQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    year: 1994,
    genre: "Drama",
    rating: 2,
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman"],
    description: "Andy Dufresne is wrongly imprisoned for murder. Inside Shawshank prison, he forms a deep friendship with Red. Over time, hope and patience become his greatest tools for freedom."
  },
  
  {
    id: 21,
    title: "Joker",
    image: "https://tse4.mm.bing.net/th/id/OIP.TUyndwXEQLmigtnYCb7XWwHaFk?rs=1&pid=ImgDetMain&o=7&rm=3",
    year: 2019,
    genre: "Crime, Drama",
    rating: 1,
    director: "Todd Phillips",
    actors: ["Joaquin Phoenix"],
    description: "Arthur Fleck struggles with mental health and isolation. Society rejects him, pushing him deeper into darkness. His transformation into Joker becomes a symbol of chaos."
  },
  {
    id: 22,
    title: "Breaking Bad",
    image: "https://th.bing.com/th/id/R.ac712b68c934c70f38ed8532dbd1c691?rik=Q0ee6jjCl1R7uA&pid=ImgRaw&r=0",
    year: 2008,
    genre: "Crime, Drama",
    rating: 4,    
    actors: ["Joaquin Phoenix"],
    director: "Todd Phillips",
    description: "Un professeur de chimie devient fabricant de drogue. Il plonge dans un monde dangereux pour assurer l’avenir de sa famille."
  }
];

export default movies;