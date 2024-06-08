import { AnimeResponse } from '@/types/animeServiceType';

/**
 * MOCK of 15 Anime's
 */
export const MOCK_ANIME_LIST: AnimeResponse[] = [
  {
    mal_id: 28977,
    url: 'https://myanimelist.net/anime/28977/Gintama°',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/3/72078.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/3/72078t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/3/72078l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/3/72078.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/3/72078t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/3/72078l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Gintama°',
      },
      {
        type: 'Synonym',
        title: "Gintama' (2015)",
      },
      {
        type: 'Japanese',
        title: '銀魂°',
      },
      {
        type: 'English',
        title: 'Gintama Season 4',
      },
      {
        type: 'German',
        title: 'Gintama Season 4',
      },
      {
        type: 'Spanish',
        title: 'Gintama Temporada 4',
      },
      {
        type: 'French',
        title: 'Gintama Saison 4',
      },
    ],
    title: 'Gintama°',
    title_english: 'Gintama Season 4',
    title_japanese: '銀魂°',
    title_synonyms: ["Gintama' (2015)"],
    type: 'TV',
    source: 'Manga',
    episodes: 51,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2015-04-08T00:00:00+00:00',
      to: '2016-03-30T00:00:00+00:00',
      prop: {
        from: {
          day: 8,
          month: 4,
          year: 2015,
        },
        to: {
          day: 30,
          month: 3,
          year: 2016,
        },
        string: 'Apr 8, 2015 to Mar 30, 2016',
      },
    },
    duration: '24 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 9.06,
    scored_by: 252376,
    rank: 4,
    popularity: 343,
    members: 633640,
    favorites: 16687,
    synopsis:
      "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet.\n\n[Written by MAL Rewrite]",
    background: '',
    season: 'spring',
    year: 2015,
    broadcast: {
      day: 'Wednesdays',
      time: '18:00',
      timezone: 'Asia/Tokyo',
      string: 'Wednesdays at 18:00 (JST)',
    },
    producers: [
      {
        mal_id: 16,
        type: 'anime',
        name: 'TV Tokyo',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
      },
      {
        mal_id: 17,
        type: 'anime',
        name: 'Aniplex',
        url: 'https://myanimelist.net/anime/producer/17/Aniplex',
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu',
      },
    ],
    licensors: [
      {
        mal_id: 102,
        type: 'anime',
        name: 'Funimation',
        url: 'https://myanimelist.net/anime/producer/102/Funimation',
      },
      {
        mal_id: 1468,
        type: 'anime',
        name: 'Crunchyroll',
        url: 'https://myanimelist.net/anime/producer/1468/Crunchyroll',
      },
    ],
    studios: [
      {
        mal_id: 1258,
        type: 'anime',
        name: 'Bandai Namco Pictures',
        url: 'https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures',
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
      },
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 57,
        type: 'anime',
        name: 'Gag Humor',
        url: 'https://myanimelist.net/anime/genre/57/Gag_Humor',
      },
      {
        mal_id: 13,
        type: 'anime',
        name: 'Historical',
        url: 'https://myanimelist.net/anime/genre/13/Historical',
      },
      {
        mal_id: 20,
        type: 'anime',
        name: 'Parody',
        url: 'https://myanimelist.net/anime/genre/20/Parody',
      },
      {
        mal_id: 21,
        type: 'anime',
        name: 'Samurai',
        url: 'https://myanimelist.net/anime/genre/21/Samurai',
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 38524,
    url: 'https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1517/100633.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1517/100633t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1517/100633l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1517/100633.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1517/100633t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1517/100633l.webp',
      },
    },
    trailer: {
      youtube_id: 'hKHepjfj5Tw',
      url: 'https://www.youtube.com/watch?v=hKHepjfj5Tw',
      embed_url:
        'https://www.youtube.com/embed/hKHepjfj5Tw?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/hKHepjfj5Tw/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/hKHepjfj5Tw/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/hKHepjfj5Tw/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/hKHepjfj5Tw/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/hKHepjfj5Tw/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Shingeki no Kyojin Season 3 Part 2',
      },
      {
        type: 'Japanese',
        title: '進撃の巨人 Season3 Part.2',
      },
      {
        type: 'English',
        title: 'Attack on Titan Season 3 Part 2',
      },
      {
        type: 'German',
        title: 'Attack on Titan Staffel 3 Teil 2',
      },
      {
        type: 'Spanish',
        title: 'Ataque a los Titanes Temporada 3 Parte 2',
      },
      {
        type: 'French',
        title: "L'Attaque des Titans Saison 3 Partie 2",
      },
    ],
    title: 'Shingeki no Kyojin Season 3 Part 2',
    title_english: 'Attack on Titan Season 3 Part 2',
    title_japanese: '進撃の巨人 Season3 Part.2',
    title_synonyms: [],
    type: 'TV',
    source: 'Manga',
    episodes: 10,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2019-04-29T00:00:00+00:00',
      to: '2019-07-01T00:00:00+00:00',
      prop: {
        from: {
          day: 29,
          month: 4,
          year: 2019,
        },
        to: {
          day: 1,
          month: 7,
          year: 2019,
        },
      },
      string: 'Apr 29, 2019 to Jul 1, 2019',
    },
    duration: '23 min per ep',
    rating: 'R - 17+ (violence & profanity)',
    score: 9.05,
    scored_by: 1596214,
    rank: 5,
    popularity: 21,
    members: 2290177,
    favorites: 58828,
    synopsis:
      "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again.\n\nReturning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. \n\nShingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement.\n\n[Written by MAL Rewrite]",
    background:
      "Shingeki no Kyojin Season 3 Part 2 adapts content from volumes 18-22 of Hajime Isayama's award-winning manga of the same name.",
    season: 'spring',
    year: 2019,
    broadcast: {
      day: 'Mondays',
      time: '00:10',
      timezone: 'Asia/Tokyo',
      string: 'Mondays at 00:10 (JST)',
    },
    producers: [
      {
        mal_id: 10,
        type: 'anime',
        name: 'Production I.G',
        url: 'https://myanimelist.net/anime/producer/10/Production_IG',
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu',
      },
      {
        mal_id: 143,
        type: 'anime',
        name: 'Mainichi Broadcasting System',
        url: 'https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System',
      },
      {
        mal_id: 144,
        type: 'anime',
        name: 'Pony Canyon',
        url: 'https://myanimelist.net/anime/producer/144/Pony_Canyon',
      },
      {
        mal_id: 159,
        type: 'anime',
        name: 'Kodansha',
        url: 'https://myanimelist.net/anime/producer/159/Kodansha',
      },
      {
        mal_id: 1499,
        type: 'anime',
        name: 'Techno Sound',
        url: 'https://myanimelist.net/anime/producer/1499/Techno_Sound',
      },
      {
        mal_id: 1557,
        type: 'anime',
        name: 'Pony Canyon Enterprises',
        url: 'https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprises',
      },
    ],
    licensors: [
      {
        mal_id: 102,
        type: 'anime',
        name: 'Funimation',
        url: 'https://myanimelist.net/anime/producer/102/Funimation',
      },
    ],
    studios: [
      {
        mal_id: 858,
        type: 'anime',
        name: 'Wit Studio',
        url: 'https://myanimelist.net/anime/producer/858/Wit_Studio',
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
      },
      {
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
      },
      {
        mal_id: 41,
        type: 'anime',
        name: 'Suspense',
        url: 'https://myanimelist.net/anime/genre/41/Suspense',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 58,
        type: 'anime',
        name: 'Gore',
        url: 'https://myanimelist.net/anime/genre/58/Gore',
      },
      {
        mal_id: 38,
        type: 'anime',
        name: 'Military',
        url: 'https://myanimelist.net/anime/genre/38/Military',
      },
      {
        mal_id: 76,
        type: 'anime',
        name: 'Survival',
        url: 'https://myanimelist.net/anime/genre/76/Survival',
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 39486,
    url: 'https://myanimelist.net/anime/39486/Gintama__The_Final',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1245/116760.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1245/116760t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1245/116760l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1245/116760.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1245/116760t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1245/116760l.webp',
      },
    },
    trailer: {
      youtube_id: 'Zn1filVUyf8',
      url: 'https://www.youtube.com/watch?v=Zn1filVUyf8',
      embed_url:
        'https://www.youtube.com/embed/Zn1filVUyf8?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/Zn1filVUyf8/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/Zn1filVUyf8/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/Zn1filVUyf8/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/Zn1filVUyf8/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/Zn1filVUyf8/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Gintama: The Final',
      },
      {
        type: 'Japanese',
        title: '銀魂 THE FINAL',
      },
      {
        type: 'English',
        title: 'Gintama: The Very Final',
      },
      {
        type: 'German',
        title: 'N/A',
      },
    ],
    title: 'Gintama: The Final',
    title_english: 'Gintama: The Very Final',
    title_japanese: '銀魂 THE FINAL',
    title_synonyms: [],
    type: 'Movie',
    source: 'Manga',
    episodes: 1,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2021-01-08T00:00:00+00:00',
      to: null,
      prop: {
        from: {
          day: 8,
          month: 1,
          year: 2021,
        },
        to: {
          day: null,
          month: null,
          year: null,
        },
      },
      string: 'Jan 8, 2021',
    },
    duration: '1 hr 44 min',
    rating: 'PG-13 - Teens 13 or older',
    score: 9.04,
    scored_by: 72884,
    rank: 6,
    popularity: 1531,
    members: 151879,
    favorites: 4286,
    synopsis:
      "Two years have passed following the Tendoshuu's invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuro's return, Gintoki Sakata begins surveying Earth's ley lines for traces of the other man's Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo.\n\nLater, the regrouped Shinsengumi and Yorozuya begin an attack on the occupied Central Terminal. With the Altana harvested by the wreckage of the Tendoshuu's ship in danger of detonating, the Yorozuya and their allies fight their enemies while the safety of Edo—and the rest of the world—hangs in the balance. Fulfilling the wishes of their teacher, Shouyou Yoshida's former students unite and relive their pasts one final time in an attempt to save their futures.\n\n[Written by MAL Rewrite]",
    background:
      'As of March 2021, Gintama: The Final has earned a franchise record of 1.85 billion yen (16.94 million USD) and debuted at No. 1 at the Japanese box office. The film concludes the Gintama anime series, adapting chapters 699-704 of the original manga with new story elements.',
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
    },
    producers: [
      {
        mal_id: 16,
        type: 'anime',
        name: 'TV Tokyo',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
      },
      {
        mal_id: 17,
        type: 'anime',
        name: 'Aniplex',
        url: 'https://myanimelist.net/anime/producer/17/Aniplex',
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu',
      },
      {
        mal_id: 230,
        type: 'anime',
        name: 'Bandai',
        url: 'https://myanimelist.net/anime/producer/230/Bandai',
      },
      {
        mal_id: 415,
        type: 'anime',
        name: 'Warner Bros. Japan',
        url: 'https://myanimelist.net/anime/producer/415/Warner_Bros_Japan',
      },
      {
        mal_id: 1365,
        type: 'anime',
        name: 'Shueisha',
        url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
      },
    ],
    licensors: [
      {
        mal_id: 531,
        type: 'anime',
        name: 'Eleven Arts',
        url: 'https://myanimelist.net/anime/producer/531/Eleven_Arts',
      },
    ],
    studios: [
      {
        mal_id: 1258,
        type: 'anime',
        name: 'Bandai Namco Pictures',
        url: 'https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures',
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
      },
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
      },
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 57,
        type: 'anime',
        name: 'Gag Humor',
        url: 'https://myanimelist.net/anime/genre/57/Gag_Humor',
      },
      {
        mal_id: 13,
        type: 'anime',
        name: 'Historical',
        url: 'https://myanimelist.net/anime/genre/13/Historical',
      },
      {
        mal_id: 20,
        type: 'anime',
        name: 'Parody',
        url: 'https://myanimelist.net/anime/genre/20/Parody',
      },
      {
        mal_id: 21,
        type: 'anime',
        name: 'Samurai',
        url: 'https://myanimelist.net/anime/genre/21/Samurai',
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 9969,
    url: 'https://myanimelist.net/anime/9969/Gintama',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/4/50361.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/4/50361t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/4/50361l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/4/50361.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/4/50361t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/4/50361l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: "Gintama'",
      },
      {
        type: 'Synonym',
        title: 'Gintama (2011)',
      },
      {
        type: 'Japanese',
        title: "銀魂'",
      },
      {
        type: 'English',
        title: 'Gintama Season 2',
      },
      {
        type: 'German',
        title: 'Gintama Staffel 2',
      },
      {
        type: 'Spanish',
        title: 'Gintama Temporada 2',
      },
      {
        type: 'French',
        title: 'Gintama Saison 2',
      },
    ],
    title: "Gintama'",
    title_english: 'Gintama Season 2',
    title_japanese: "銀魂'",
    title_synonyms: ['Gintama (2011)'],
    type: 'TV',
    source: 'Manga',
    episodes: 51,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2011-04-04T00:00:00+00:00',
      to: '2012-03-26T00:00:00+00:00',
      prop: {
        from: {
          day: 4,
          month: 4,
          year: 2011,
        },
        to: {
          day: 26,
          month: 3,
          year: 2012,
        },
      },
      string: 'Apr 4, 2011 to Mar 26, 2012',
    },
    duration: '24 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 9.03,
    scored_by: 238470,
    rank: 7,
    popularity: 393,
    members: 558863,
    favorites: 8162,
    synopsis:
      "After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child.\n\nBewildered, Shinpachi agrees to join the Shinsengumi at Otae and Kondou's request and finds even more startling transformations afoot both in and out of the ranks of the the organization. However, discovering that Vice Chief Toushirou Hijikata has remained unchanged, Shinpachi and his unlikely Shinsengumi ally set out to return the city of Edo to how they remember it.\n\nWith even more dirty jokes, tongue-in-cheek parodies, and shameless references, Gintama' follows the Yorozuya team through more of their misadventures in the vibrant, alien-filled world of Edo.\n\n[Written by MAL Rewrite]",
    background: '',
    season: 'spring',
    year: 2011,
    broadcast: {
      day: 'Mondays',
      time: '18:00',
      timezone: 'Asia/Tokyo',
      string: 'Mondays at 18:00 (JST)',
    },
    producers: [
      {
        mal_id: 16,
        type: 'anime',
        name: 'TV Tokyo',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
      },
      {
        mal_id: 17,
        type: 'anime',
        name: 'Aniplex',
        url: 'https://myanimelist.net/anime/producer/17/Aniplex',
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu',
      },
      {
        mal_id: 643,
        type: 'anime',
        name: 'Trinity Sound',
        url: 'https://myanimelist.net/anime/producer/643/Trinity_Sound',
      },
      {
        mal_id: 763,
        type: 'anime',
        name: 'Miracle Robo',
        url: 'https://myanimelist.net/anime/producer/763/Miracle_Robo',
      },
      {
        mal_id: 829,
        type: 'anime',
        name: 'Studio Jack',
        url: 'https://myanimelist.net/anime/producer/829/Studio_Jack',
      },
      {
        mal_id: 1365,
        type: 'anime',
        name: 'Shueisha',
        url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
      },
    ],
    licensors: [],
    studios: [
      {
        mal_id: 14,
        type: 'anime',
        name: 'Sunrise',
        url: 'https://myanimelist.net/anime/producer/14/Sunrise',
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
      },
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 57,
        type: 'anime',
        name: 'Gag Humor',
        url: 'https://myanimelist.net/anime/genre/57/Gag_Humor',
      },
      {
        mal_id: 13,
        type: 'anime',
        name: 'Historical',
        url: 'https://myanimelist.net/anime/genre/13/Historical',
      },
      {
        mal_id: 20,
        type: 'anime',
        name: 'Parody',
        url: 'https://myanimelist.net/anime/genre/20/Parody',
      },
      {
        mal_id: 21,
        type: 'anime',
        name: 'Samurai',
        url: 'https://myanimelist.net/anime/genre/21/Samurai',
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 11061,
    url: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1337/99013t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1337/99013l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1337/99013.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1337/99013t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1337/99013l.webp',
      },
    },
    trailer: {
      youtube_id: 'D9iTQRB4XRk',
      url: 'https://www.youtube.com/watch?v=D9iTQRB4XRk',
      embed_url:
        'https://www.youtube.com/embed/D9iTQRB4XRk?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/D9iTQRB4XRk/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/D9iTQRB4XRk/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/D9iTQRB4XRk/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/D9iTQRB4XRk/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/D9iTQRB4XRk/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Hunter x Hunter (2011)',
      },
      {
        type: 'Synonym',
        title: 'HxH (2011)',
      },
      {
        type: 'Japanese',
        title: 'HUNTER×HUNTER（ハンター×ハンター）',
      },
      {
        type: 'English',
        title: 'Hunter x Hunter',
      },
      {
        type: 'German',
        title: 'Hunter x Hunter',
      },
      {
        type: 'Spanish',
        title: 'Hunter x Hunter',
      },
      {
        type: 'French',
        title: 'Hunter X Hunter',
      },
    ],
    title: 'Hunter x Hunter (2011)',
    title_english: 'Hunter x Hunter',
    title_japanese: 'HUNTER×HUNTER（ハンター×ハンター）',
    title_synonyms: ['HxH (2011)'],
    type: 'TV',
    source: 'Manga',
    episodes: 148,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2011-10-02T00:00:00+00:00',
      to: '2014-09-24T00:00:00+00:00',
      prop: {
        from: {
          day: 2,
          month: 10,
          year: 2011,
        },
        to: {
          day: 24,
          month: 9,
          year: 2014,
        },
      },
      string: 'Oct 2, 2011 to Sep 24, 2014',
    },
    duration: '23 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 9.03,
    scored_by: 1771558,
    rank: 8,
    popularity: 9,
    members: 2846857,
    favorites: 211017,
    synopsis:
      "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.\n\nAmbitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.\n\nDuring the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.\n\n[Written by MAL Rewrite]",
    background: '',
    season: 'fall',
    year: 2011,
    broadcast: {
      day: 'Sundays',
      time: '10:55',
      timezone: 'Asia/Tokyo',
      string: 'Sundays at 10:55 (JST)',
    },
    producers: [
      {
        mal_id: 29,
        type: 'anime',
        name: 'VAP',
        url: 'https://myanimelist.net/anime/producer/29/VAP',
      },
      {
        mal_id: 1003,
        type: 'anime',
        name: 'Nippon Television Network',
        url: 'https://myanimelist.net/anime/producer/1003/Nippon_Television_Network',
      },
      {
        mal_id: 1365,
        type: 'anime',
        name: 'Shueisha',
        url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
      },
    ],
    licensors: [
      {
        mal_id: 119,
        type: 'anime',
        name: 'VIZ Media',
        url: 'https://myanimelist.net/anime/producer/119/VIZ_Media',
      },
    ],
    studios: [
      {
        mal_id: 11,
        type: 'anime',
        name: 'Madhouse',
        url: 'https://myanimelist.net/anime/producer/11/Madhouse',
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
      },
      {
        mal_id: 2,
        type: 'anime',
        name: 'Adventure',
        url: 'https://myanimelist.net/anime/genre/2/Adventure',
      },
      {
        mal_id: 10,
        type: 'anime',
        name: 'Fantasy',
        url: 'https://myanimelist.net/anime/genre/10/Fantasy',
      },
    ],
    explicit_genres: [],
    themes: [],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 15417,
    url: 'https://myanimelist.net/anime/15417/Gintama__Enchousen',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1452/123686.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1452/123686t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1452/123686l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1452/123686.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1452/123686t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1452/123686l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: "Gintama': Enchousen",
      },
      {
        type: 'Synonym',
        title: "Gintama' (2012)",
      },
      {
        type: 'Synonym',
        title: "Gintama' Overdrive",
      },
      {
        type: 'Synonym',
        title: 'Kintama',
      },
      {
        type: 'Japanese',
        title: "銀魂' 延長戦",
      },
      {
        type: 'English',
        title: 'Gintama: Enchousen',
      },
    ],
    title: "Gintama': Enchousen",
    title_english: 'Gintama: Enchousen',
    title_japanese: "銀魂' 延長戦",
    title_synonyms: ["Gintama' (2012)", "Gintama' Overdrive", 'Kintama'],
    type: 'TV',
    source: 'Manga',
    episodes: 13,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2012-10-04T00:00:00+00:00',
      to: '2013-03-28T00:00:00+00:00',
      prop: {
        from: {
          day: 4,
          month: 10,
          year: 2012,
        },
        to: {
          day: 28,
          month: 3,
          year: 2013,
        },
      },
      string: 'Oct 4, 2012 to Mar 28, 2013',
    },
    duration: '24 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 9.02,
    scored_by: 166130,
    rank: 10,
    popularity: 739,
    members: 326813,
    favorites: 3056,
    synopsis:
      "While Gintoki Sakata was away, the Yorozuya found themselves a new leader: Kintoki, Gintoki's golden-haired doppelganger. In order to regain his former position, Gintoki will need the help of those around him, a troubling feat when no one can remember him! Between Kintoki and Gintoki, who will claim the throne as the main character?\n\nIn addition, Yorozuya make a trip back down to red-light district of Yoshiwara to aid an elderly courtesan in her search for her long-lost lover. Although the district is no longer in chains beneath the earth's surface, the trio soon learn of the tragic backstories of Yoshiwara's inhabitants that still haunt them. With flashback after flashback, this quest has Yorozuya witnessing everlasting love and protecting it as best they can with their hearts and souls.\n\n[Written by MAL Rewrite]",
    background: '',
    season: 'fall',
    year: 2012,
    broadcast: {
      day: 'Thursdays',
      time: '18:00',
      timezone: 'Asia/Tokyo',
      string: 'Thursdays at 18:00 (JST)',
    },
    producers: [
      {
        mal_id: 16,
        type: 'anime',
        name: 'TV Tokyo',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
      },
      {
        mal_id: 17,
        type: 'anime',
        name: 'Aniplex',
        url: 'https://myanimelist.net/anime/producer/17/Aniplex',
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu',
      },
      {
        mal_id: 1365,
        type: 'anime',
        name: 'Shueisha',
        url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
      },
      {
        mal_id: 1406,
        type: 'anime',
        name: 'Miracle Bus',
        url: 'https://myanimelist.net/anime/producer/1406/Miracle_Bus',
      },
    ],
    licensors: [],
    studios: [
      {
        mal_id: 14,
        type: 'anime',
        name: 'Sunrise',
        url: 'https://myanimelist.net/anime/producer/14/Sunrise',
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
      },
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 57,
        type: 'anime',
        name: 'Gag Humor',
        url: 'https://myanimelist.net/anime/genre/57/Gag_Humor',
      },
      {
        mal_id: 13,
        type: 'anime',
        name: 'Historical',
        url: 'https://myanimelist.net/anime/genre/13/Historical',
      },
      {
        mal_id: 20,
        type: 'anime',
        name: 'Parody',
        url: 'https://myanimelist.net/anime/genre/20/Parody',
      },
      {
        mal_id: 21,
        type: 'anime',
        name: 'Samurai',
        url: 'https://myanimelist.net/anime/genre/21/Samurai',
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 820,
    url: 'https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1976/142016.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1976/142016t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1976/142016l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1976/142016.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1976/142016t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1976/142016l.webp',
      },
    },
    trailer: {
      youtube_id: 'Ou37P25tjJY',
      url: 'https://www.youtube.com/watch?v=Ou37P25tjJY',
      embed_url:
        'https://www.youtube.com/embed/Ou37P25tjJY?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/Ou37P25tjJY/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/Ou37P25tjJY/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/Ou37P25tjJY/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/Ou37P25tjJY/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/Ou37P25tjJY/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Ginga Eiyuu Densetsu',
      },
      {
        type: 'Synonym',
        title: 'LoGH',
      },
      {
        type: 'Synonym',
        title: 'LotGH',
      },
      {
        type: 'Synonym',
        title: "Gin'eiden",
      },
      {
        type: 'Synonym',
        title: 'GinEiDen',
      },
      {
        type: 'Synonym',
        title: 'Heldensagen Vom Kosmosinsel',
      },
      {
        type: 'Japanese',
        title: '銀河英雄伝説',
      },
      {
        type: 'English',
        title: 'Legend of the Galactic Heroes',
      },
      {
        type: 'French',
        title: 'Les Héros de la Galaxie',
      },
    ],
    title: 'Ginga Eiyuu Densetsu',
    title_english: 'Legend of the Galactic Heroes',
    title_japanese: '銀河英雄伝説',
    title_synonyms: [
      'LoGH',
      'LotGH',
      "Gin'eiden",
      'GinEiDen',
      'Heldensagen Vom Kosmosinsel',
    ],
    type: 'OVA',
    source: 'Novel',
    episodes: 110,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '1988-01-08T00:00:00+00:00',
      to: '1997-03-17T00:00:00+00:00',
      prop: {
        from: {
          day: 8,
          month: 1,
          year: 1988,
        },
        to: {
          day: 17,
          month: 3,
          year: 1997,
        },
      },
      string: 'Jan 8, 1988 to Mar 17, 1997',
    },
    duration: '26 min per ep',
    rating: 'R - 17+ (violence & profanity)',
    score: 9.02,
    scored_by: 79724,
    rank: 9,
    popularity: 744,
    members: 323918,
    favorites: 16323,
    synopsis:
      "The 150-year-long stalemate between the two interstellar superpowers, the Galactic Empire and the Free Planets Alliance, comes to an end when a new generation of leaders arises: the idealistic military genius Reinhard von Lohengramm, and the FPA's reserved historian, Yang Wenli.\n\nWhile Reinhard climbs the ranks of the Empire with the aid of his childhood friend, Siegfried Kircheis, he must fight not only the war, but also the remnants of the crumbling Goldenbaum Dynasty in order to free his sister from the Kaiser and unify humanity under one genuine ruler. Meanwhile, on the other side of the galaxy, Yang—a strong supporter of democratic ideals—has to stand firm in his beliefs, despite the struggles of the FPA, and show his pupil, Julian Mintz, that autocracy is not the solution.\n\nAs ideologies clash amidst the war's many casualties, the two strategic masterminds must ask themselves what the real reason behind their battle is.\n\n[Written by MAL Rewrite]",
    background:
      'Legend of the Galactic Heroes was adapted from a series of ten novels, published 1982–87, by Yoshiki Tanaka. The novels won the Seiun Award for the best long-form Japanese science fiction in 1988. At the start of its production the anime was distributed through a subscription system in which episodes were mailed to existing fans of the novels. It was made in four separate tranches over nearly a decade, with the production of side-stories continuing for several further years. The main series has the largest voice cast of any anime, with well over 300 voice actors, and it is the longest OVA series ever made. The novels have also been adapted into a manga, a stage musical by the Takarazuka Revue and a number of games.',
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
    },
    producers: [
      {
        mal_id: 16,
        type: 'anime',
        name: 'TV Tokyo',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
      },
      {
        mal_id: 99,
        type: 'anime',
        name: 'Kitty Films',
        url: 'https://myanimelist.net/anime/producer/99/Kitty_Films',
      },
      {
        mal_id: 382,
        type: 'anime',
        name: 'Tokuma Shoten',
        url: 'https://myanimelist.net/anime/producer/382/Tokuma_Shoten',
      },
      {
        mal_id: 1493,
        type: 'anime',
        name: 'Tokuma Japan Communications',
        url: 'https://myanimelist.net/anime/producer/1493/Tokuma_Japan_Communications',
      },
      {
        mal_id: 2434,
        type: 'anime',
        name: 'Wright Staff',
        url: 'https://myanimelist.net/anime/producer/2434/Wright_Staff',
      },
    ],
    licensors: [
      {
        mal_id: 376,
        type: 'anime',
        name: 'Sentai Filmworks',
        url: 'https://myanimelist.net/anime/producer/376/Sentai_Filmworks',
      },
    ],
    studios: [
      {
        mal_id: 1269,
        type: 'anime',
        name: 'K-Factory',
        url: 'https://myanimelist.net/anime/producer/1269/K-Factory',
      },
      {
        mal_id: 2256,
        type: 'anime',
        name: 'Kitty Film Mitaka Studio',
        url: 'https://myanimelist.net/anime/producer/2256/Kitty_Film_Mitaka_Studio',
      },
    ],
    genres: [
      {
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
      },
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 50,
        type: 'anime',
        name: 'Adult Cast',
        url: 'https://myanimelist.net/anime/genre/50/Adult_Cast',
      },
      {
        mal_id: 38,
        type: 'anime',
        name: 'Military',
        url: 'https://myanimelist.net/anime/genre/38/Military',
      },
      {
        mal_id: 29,
        type: 'anime',
        name: 'Space',
        url: 'https://myanimelist.net/anime/genre/29/Space',
      },
    ],
    demographics: [],
  },
  {
    mal_id: 43608,
    url: 'https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1160/122627.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1160/122627t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1160/122627l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1160/122627.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1160/122627t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1160/122627l.webp',
      },
    },
    trailer: {
      youtube_id: 'vFN5K-iAyV0',
      url: 'https://www.youtube.com/watch?v=vFN5K-iAyV0',
      embed_url:
        'https://www.youtube.com/embed/vFN5K-iAyV0?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/vFN5K-iAyV0/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/vFN5K-iAyV0/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/vFN5K-iAyV0/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/vFN5K-iAyV0/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/vFN5K-iAyV0/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Kaguya-sama wa Kokurasetai: Ultra Romantic',
      },
      {
        type: 'Synonym',
        title:
          'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season',
      },
      {
        type: 'Synonym',
        title: 'Kaguya-sama: Love is War Season 3rd Season',
      },
      {
        type: 'Japanese',
        title: 'かぐや様は告らせたい-ウルトラロマンティック-',
      },
      {
        type: 'English',
        title: 'Kaguya-sama: Love is War - Ultra Romantic',
      },
    ],
    title: 'Kaguya-sama wa Kokurasetai: Ultra Romantic',
    title_english: 'Kaguya-sama: Love is War - Ultra Romantic',
    title_japanese: 'かぐや様は告らせたい-ウルトラロマンティック-',
    title_synonyms: [
      'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season',
      'Kaguya-sama: Love is War Season 3rd Season',
    ],
    type: 'TV',
    source: 'Manga',
    episodes: 13,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2022-04-09T00:00:00+00:00',
      to: '2022-06-25T00:00:00+00:00',
      prop: {
        from: {
          day: 9,
          month: 4,
          year: 2022,
        },
        to: {
          day: 25,
          month: 6,
          year: 2022,
        },
      },
      string: 'Apr 9, 2022 to Jun 25, 2022',
    },
    duration: '23 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 9.01,
    scored_by: 528826,
    rank: 12,
    popularity: 175,
    members: 936508,
    favorites: 31302,
    synopsis:
      "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.\n\nMeanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code.\n\nAs love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts.\n\n[Written by MAL Rewrite]",
    background: '',
    season: 'spring',
    year: 2022,
    broadcast: {
      day: 'Saturdays',
      time: '00:00',
      timezone: 'Asia/Tokyo',
      string: 'Saturdays at 00:00 (JST)',
    },
    producers: [
      {
        mal_id: 17,
        type: 'anime',
        name: 'Aniplex',
        url: 'https://myanimelist.net/anime/producer/17/Aniplex',
      },
      {
        mal_id: 143,
        type: 'anime',
        name: 'Mainichi Broadcasting System',
        url: 'https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System',
      },
      {
        mal_id: 306,
        type: 'anime',
        name: 'Magic Capsule',
        url: 'https://myanimelist.net/anime/producer/306/Magic_Capsule',
      },
      {
        mal_id: 1365,
        type: 'anime',
        name: 'Shueisha',
        url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
      },
      {
        mal_id: 1501,
        type: 'anime',
        name: 'JR East Marketing & Communications',
        url: 'https://myanimelist.net/anime/producer/1501/JR_East_Marketing___Communications',
      },
    ],
    licensors: [
      {
        mal_id: 493,
        type: 'anime',
        name: 'Aniplex of America',
        url: 'https://myanimelist.net/anime/producer/493/Aniplex_of_America',
      },
    ],
    studios: [
      {
        mal_id: 56,
        type: 'anime',
        name: 'A-1 Pictures',
        url: 'https://myanimelist.net/anime/producer/56/A-1_Pictures',
      },
    ],
    genres: [
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 22,
        type: 'anime',
        name: 'Romance',
        url: 'https://myanimelist.net/anime/genre/22/Romance',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 23,
        type: 'anime',
        name: 'School',
        url: 'https://myanimelist.net/anime/genre/23/School',
      },
    ],
    demographics: [
      {
        mal_id: 42,
        type: 'anime',
        name: 'Seinen',
        url: 'https://myanimelist.net/anime/genre/42/Seinen',
      },
    ],
  },
  {
    mal_id: 41467,
    url: 'https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1908/135431.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1908/135431t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1908/135431l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1908/135431.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1908/135431t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1908/135431l.webp',
      },
    },
    trailer: {
      youtube_id: 'e8YBesRKq_U',
      url: 'https://www.youtube.com/watch?v=e8YBesRKq_U',
      embed_url:
        'https://www.youtube.com/embed/e8YBesRKq_U?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/e8YBesRKq_U/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/e8YBesRKq_U/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/e8YBesRKq_U/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/e8YBesRKq_U/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/e8YBesRKq_U/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Bleach: Sennen Kessen-hen',
      },
      {
        type: 'Synonym',
        title: 'Bleach: Thousand-Year Blood War Arc',
      },
      {
        type: 'Japanese',
        title: 'BLEACH 千年血戦篇',
      },
      {
        type: 'English',
        title: 'Bleach: Thousand-Year Blood War',
      },
    ],
    title: 'Bleach: Sennen Kessen-hen',
    title_english: 'Bleach: Thousand-Year Blood War',
    title_japanese: 'BLEACH 千年血戦篇',
    title_synonyms: ['Bleach: Thousand-Year Blood War Arc'],
    type: 'TV',
    source: 'Manga',
    episodes: 13,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2022-10-11T00:00:00+00:00',
      to: '2022-12-27T00:00:00+00:00',
      prop: {
        from: {
          day: 11,
          month: 10,
          year: 2022,
        },
        to: {
          day: 27,
          month: 12,
          year: 2022,
        },
      },
      string: 'Oct 11, 2022 to Dec 27, 2022',
    },
    duration: '24 min per ep',
    rating: 'R - 17+ (violence & profanity)',
    score: 9.01,
    scored_by: 284347,
    rank: 11,
    popularity: 405,
    members: 547349,
    favorites: 20603,
    synopsis:
      "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo carries out his quest with his closest allies: Orihime Inoue, his childhood friend with a talent for healing; Yasutora Sado, his high school classmate with superhuman strength; and Uryuu Ishida, Ichigo's Quincy rival.\n\nIchigo's vigilante routine is disrupted by the sudden appearance of Asguiaro Ebern, a dangerous Arrancar who heralds the return of Yhwach, an ancient Quincy king. Yhwach seeks to reignite the historic blood feud between Soul Reaper and Quincy, and he sets his sights on erasing both the human world and the Soul Society for good.\n\nYhwach launches a two-pronged invasion into both the Soul Society and Hueco Mundo, the home of Hollows and Arrancar. In retaliation, Ichigo and his friends must fight alongside old allies and enemies alike to end Yhwach's campaign of carnage before the world itself comes to an end.\n\n[Written by MAL Rewrite]",
    background:
      'Bleach: Sennen Kessen-hen adapts volume 55 to volume 61 of the original manga. It was released on Blu-ray on April 26, 2023.',
    season: 'fall',
    year: 2022,
    broadcast: {
      day: 'Tuesdays',
      time: '00:00',
      timezone: 'Asia/Tokyo',
      string: 'Tuesdays at 00:00 (JST)',
    },
    producers: [
      {
        mal_id: 16,
        type: 'anime',
        name: 'TV Tokyo',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
      },
      {
        mal_id: 17,
        type: 'anime',
        name: 'Aniplex',
        url: 'https://myanimelist.net/anime/producer/17/Aniplex',
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu',
      },
      {
        mal_id: 1365,
        type: 'anime',
        name: 'Shueisha',
        url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
      },
    ],
    licensors: [
      {
        mal_id: 119,
        type: 'anime',
        name: 'VIZ Media',
        url: 'https://myanimelist.net/anime/producer/119/VIZ_Media',
      },
    ],
    studios: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Pierrot',
        url: 'https://myanimelist.net/anime/producer/1/Pierrot',
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
      },
      {
        mal_id: 2,
        type: 'anime',
        name: 'Adventure',
        url: 'https://myanimelist.net/anime/genre/2/Adventure',
      },
      {
        mal_id: 10,
        type: 'anime',
        name: 'Fantasy',
        url: 'https://myanimelist.net/anime/genre/10/Fantasy',
      },
    ],
    explicit_genres: [],
    themes: [],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 34096,
    url: 'https://myanimelist.net/anime/34096/Gintama',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/3/83528.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/3/83528t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/3/83528l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/3/83528.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/3/83528t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/3/83528l.webp',
      },
    },
    trailer: {
      youtube_id: 'LOdAAEJiebM',
      url: 'https://www.youtube.com/watch?v=LOdAAEJiebM',
      embed_url:
        'https://www.youtube.com/embed/LOdAAEJiebM?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/LOdAAEJiebM/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/LOdAAEJiebM/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/LOdAAEJiebM/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/LOdAAEJiebM/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/LOdAAEJiebM/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Gintama.',
      },
      {
        type: 'Synonym',
        title: 'Gintama (2017)',
      },
      {
        type: 'Japanese',
        title: '銀魂。',
      },
      {
        type: 'English',
        title: 'Gintama Season 5',
      },
    ],
    title: 'Gintama.',
    title_english: 'Gintama Season 5',
    title_japanese: '銀魂。',
    title_synonyms: ['Gintama (2017)'],
    type: 'TV',
    source: 'Manga',
    episodes: 12,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2017-01-09T00:00:00+00:00',
      to: '2017-03-27T00:00:00+00:00',
      prop: {
        from: {
          day: 9,
          month: 1,
          year: 2017,
        },
        to: {
          day: 27,
          month: 3,
          year: 2017,
        },
      },
      string: 'Jan 9, 2017 to Mar 27, 2017',
    },
    duration: '24 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 8.98,
    scored_by: 146814,
    rank: 14,
    popularity: 762,
    members: 316228,
    favorites: 2731,
    synopsis:
      "After joining the resistance against the bakufu, Gintoki and the gang are in hiding, along with Katsura and his Joui rebels. The Yorozuya is soon approached by Nobume Imai and two members of the Kiheitai, who explain that the Harusame pirates have turned against 7th Division Captain Kamui and their former ally Takasugi. The Kiheitai present Gintoki with a job: find Takasugi, who has been missing since his ship was ambushed in a Harusame raid. Nobume also makes a stunning revelation regarding the Tendoushuu, a secret organization pulling the strings of numerous factions, and their leader Utsuro, the shadowy figure with an uncanny resemblance to Gintoki's former teacher.\n\nHitching a ride on Sakamoto's space ship, the Yorozuya and Katsura set out for Rakuyou, Kagura's home planet, where the various factions have gathered and tensions are brewing. Long-held grudges, political infighting, and the Tendoushuu's sinister overarching plan finally culminate into a massive, decisive battle on Rakuyou.\n\n[Written by MAL Rewrite]",
    background: '',
    season: 'winter',
    year: 2017,
    broadcast: {
      day: 'Mondays',
      time: '01:35',
      timezone: 'Asia/Tokyo',
      string: 'Mondays at 01:35 (JST)',
    },
    producers: [
      {
        mal_id: 16,
        type: 'anime',
        name: 'TV Tokyo',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
      },
      {
        mal_id: 17,
        type: 'anime',
        name: 'Aniplex',
        url: 'https://myanimelist.net/anime/producer/17/Aniplex',
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu',
      },
      {
        mal_id: 1365,
        type: 'anime',
        name: 'Shueisha',
        url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
      },
    ],
    licensors: [],
    studios: [
      {
        mal_id: 1258,
        type: 'anime',
        name: 'Bandai Namco Pictures',
        url: 'https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures',
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
      },
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 57,
        type: 'anime',
        name: 'Gag Humor',
        url: 'https://myanimelist.net/anime/genre/57/Gag_Humor',
      },
      {
        mal_id: 13,
        type: 'anime',
        name: 'Historical',
        url: 'https://myanimelist.net/anime/genre/13/Historical',
      },
      {
        mal_id: 20,
        type: 'anime',
        name: 'Parody',
        url: 'https://myanimelist.net/anime/genre/20/Parody',
      },
      {
        mal_id: 21,
        type: 'anime',
        name: 'Samurai',
        url: 'https://myanimelist.net/anime/genre/21/Samurai',
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 42938,
    url: 'https://myanimelist.net/anime/42938/Fruits_Basket__The_Final',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1085/114792.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1085/114792t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1085/114792l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1085/114792.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1085/114792t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1085/114792l.webp',
      },
    },
    trailer: {
      youtube_id: 'Ip8Btv2t_6c',
      url: 'https://www.youtube.com/watch?v=Ip8Btv2t_6c',
      embed_url:
        'https://www.youtube.com/embed/Ip8Btv2t_6c?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/Ip8Btv2t_6c/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/Ip8Btv2t_6c/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/Ip8Btv2t_6c/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/Ip8Btv2t_6c/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/Ip8Btv2t_6c/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Fruits Basket: The Final',
      },
      {
        type: 'Synonym',
        title: 'Fruits Basket 3rd Season',
      },
      {
        type: 'Synonym',
        title: 'Fruits Basket (2019) 3rd Season',
      },
      {
        type: 'Synonym',
        title: 'Furuba',
      },
      {
        type: 'Japanese',
        title: 'フルーツバスケット The Final',
      },
      {
        type: 'English',
        title: 'Fruits Basket: The Final Season',
      },
      {
        type: 'German',
        title: 'Fruits Basket Staffel 3',
      },
      {
        type: 'Spanish',
        title: 'Fruits Basket: The Final Season',
      },
      {
        type: 'French',
        title: 'Fruits Basket Saison 3',
      },
    ],
    title: 'Fruits Basket: The Final',
    title_english: 'Fruits Basket: The Final Season',
    title_japanese: 'フルーツバスケット The Final',
    title_synonyms: [
      'Fruits Basket 3rd Season',
      'Fruits Basket (2019) 3rd Season',
      'Furuba',
    ],
    type: 'TV',
    source: 'Manga',
    episodes: 13,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2021-04-06T00:00:00+00:00',
      to: '2021-06-29T00:00:00+00:00',
      prop: {
        from: {
          day: 6,
          month: 4,
          year: 2021,
        },
        to: {
          day: 29,
          month: 6,
          year: 2021,
        },
      },
      string: 'Apr 6, 2021 to Jun 29, 2021',
    },
    duration: '23 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 8.98,
    scored_by: 238968,
    rank: 13,
    popularity: 470,
    members: 481883,
    favorites: 20097,
    synopsis:
      'Hundreds of years ago, the Chinese zodiac spirits and their god swore to stay together eternally. United by this promise, the possessed members of the Souma family shall always return to each other under any circumstances. Yet, when these bonds shackle them from freedom, it becomes an undesirable burden—a curse. As head of the clan, Akito is convinced that he shares a special connection with the other Soumas. While he desperately clings to this fantasy, the rest of the family remains isolated and suppressed by the fear of punishment.\n\nTooru Honda, who has grown attached to the Soumas, is determined to break the chains that bind them. Her companionship with the family and her friends encourages her to move forward with lifting the curse. However, due to confounding revelations, she struggles to find the tenacity to continue her endeavors. With time slowly withering away, Tooru contends with an uncertain future in hopes of reaching the tranquility that may lie beyond all this commotion.\n\n[Written by MAL Rewrite]',
    background: '',
    season: 'spring',
    year: 2021,
    broadcast: {
      day: 'Tuesdays',
      time: '01:30',
      timezone: 'Asia/Tokyo',
      string: 'Tuesdays at 01:30 (JST)',
    },
    producers: [
      {
        mal_id: 16,
        type: 'anime',
        name: 'TV Tokyo',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
      },
      {
        mal_id: 100,
        type: 'anime',
        name: 'TV Osaka',
        url: 'https://myanimelist.net/anime/producer/100/TV_Osaka',
      },
      {
        mal_id: 139,
        type: 'anime',
        name: 'Nihon Ad Systems',
        url: 'https://myanimelist.net/anime/producer/139/Nihon_Ad_Systems',
      },
      {
        mal_id: 148,
        type: 'anime',
        name: 'Hakusensha',
        url: 'https://myanimelist.net/anime/producer/148/Hakusensha',
      },
      {
        mal_id: 1284,
        type: 'anime',
        name: 'Avex Pictures',
        url: 'https://myanimelist.net/anime/producer/1284/Avex_Pictures',
      },
      {
        mal_id: 2174,
        type: 'anime',
        name: 'TMS Music',
        url: 'https://myanimelist.net/anime/producer/2174/TMS_Music',
      },
      {
        mal_id: 2495,
        type: 'anime',
        name: '8PAN',
        url: 'https://myanimelist.net/anime/producer/2495/8PAN',
      },
    ],
    licensors: [
      {
        mal_id: 102,
        type: 'anime',
        name: 'Funimation',
        url: 'https://myanimelist.net/anime/producer/102/Funimation',
      },
    ],
    studios: [
      {
        mal_id: 73,
        type: 'anime',
        name: 'TMS Entertainment',
        url: 'https://myanimelist.net/anime/producer/73/TMS_Entertainment',
      },
    ],
    genres: [
      {
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
      },
      {
        mal_id: 22,
        type: 'anime',
        name: 'Romance',
        url: 'https://myanimelist.net/anime/genre/22/Romance',
      },
      {
        mal_id: 37,
        type: 'anime',
        name: 'Supernatural',
        url: 'https://myanimelist.net/anime/genre/37/Supernatural',
      },
    ],
    explicit_genres: [],
    themes: [],
    demographics: [
      {
        mal_id: 25,
        type: 'anime',
        name: 'Shoujo',
        url: 'https://myanimelist.net/anime/genre/25/Shoujo',
      },
    ],
  },
  {
    mal_id: 918,
    url: 'https://myanimelist.net/anime/918/Gintama',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/10/73274.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/10/73274t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/10/73274l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/10/73274.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/10/73274t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/10/73274l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Gintama',
      },
      {
        type: 'Synonym',
        title: 'Gin Tama',
      },
      {
        type: 'Synonym',
        title: 'Silver Soul',
      },
      {
        type: 'Synonym',
        title: 'Yorinuki Gintama-san',
      },
      {
        type: 'Japanese',
        title: '銀魂',
      },
      {
        type: 'English',
        title: 'Gintama',
      },
    ],
    title: 'Gintama',
    title_english: 'Gintama',
    title_japanese: '銀魂',
    title_synonyms: ['Gin Tama', 'Silver Soul', 'Yorinuki Gintama-san'],
    type: 'TV',
    source: 'Manga',
    episodes: 201,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2006-04-04T00:00:00+00:00',
      to: '2010-03-25T00:00:00+00:00',
      prop: {
        from: {
          day: 4,
          month: 4,
          year: 2006,
        },
        to: {
          day: 25,
          month: 3,
          year: 2010,
        },
      },
      string: 'Apr 4, 2006 to Mar 25, 2010',
    },
    duration: '24 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 8.94,
    scored_by: 397750,
    rank: 15,
    popularity: 141,
    members: 1068943,
    favorites: 59376,
    synopsis:
      'Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan\'s surrender to powerful aliens known as the "Amanto," those aspirations now seem unachievable. With the once-influential shogunate rebuilt as a puppet government, a new law is passed that promptly prohibits all swords in public. \n\nEnter Gintoki Sakata, an eccentric silver-haired man who always carries around a wooden sword and maintains his stature as a samurai despite the ban. As the founder of Yorozuya, a small business for odd jobs, Gintoki often embarks on endeavors to help other people—though usually in rather strange and unforeseen ways. \n\nAssisted by Shinpachi Shimura, a boy with glasses supposedly learning the way of the samurai; Kagura, a tomboyish girl with superhuman strength and an endless appetite; and Sadaharu, their giant pet dog who loves biting on people\'s heads, the Yorozuya encounter anything from alien royalty to scuffles with local gangs in the ever-changing world of Edo.\n\n[Written by MAL Rewrite]',
    background:
      "Gintama adapts chapters 1-292 of original manga. Several games based on Gintama have been released on a variety of platforms, such as the PlayStation 2, PlayStation Portable, and Nintendo DS. Characters from the series have also appeared in Weekly Shounen Jump's crossover titles, including Jump Super Stars and Jump Ultimate Stars. The series received high-definition reruns of older episodes by TV Tokyo from April 5, 2010 to March 28, 2011 under the name Yorinuki Gintama-san, which included 51 selected episodes as well as four new opening and ending songs. Gintama received a live-action movie adaptation that premiered on July 14, 2017. Shortly after the film's release, a sequel was announced in November 2017 and was later released on August 17, 2018.",
    season: 'spring',
    year: 2006,
    broadcast: {
      day: 'Thursdays',
      time: '18:00',
      timezone: 'Asia/Tokyo',
      string: 'Thursdays at 18:00 (JST)',
    },
    producers: [
      {
        mal_id: 16,
        type: 'anime',
        name: 'TV Tokyo',
        url: 'https://myanimelist.net/anime/producer/16/TV_Tokyo',
      },
      {
        mal_id: 17,
        type: 'anime',
        name: 'Aniplex',
        url: 'https://myanimelist.net/anime/producer/17/Aniplex',
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu',
      },
      {
        mal_id: 643,
        type: 'anime',
        name: 'Trinity Sound',
        url: 'https://myanimelist.net/anime/producer/643/Trinity_Sound',
      },
      {
        mal_id: 645,
        type: 'anime',
        name: 'Audio Highs',
        url: 'https://myanimelist.net/anime/producer/645/Audio_Highs',
      },
      {
        mal_id: 763,
        type: 'anime',
        name: 'Miracle Robo',
        url: 'https://myanimelist.net/anime/producer/763/Miracle_Robo',
      },
      {
        mal_id: 1365,
        type: 'anime',
        name: 'Shueisha',
        url: 'https://myanimelist.net/anime/producer/1365/Shueisha',
      },
    ],
    licensors: [
      {
        mal_id: 376,
        type: 'anime',
        name: 'Sentai Filmworks',
        url: 'https://myanimelist.net/anime/producer/376/Sentai_Filmworks',
      },
      {
        mal_id: 1468,
        type: 'anime',
        name: 'Crunchyroll',
        url: 'https://myanimelist.net/anime/producer/1468/Crunchyroll',
      },
    ],
    studios: [
      {
        mal_id: 14,
        type: 'anime',
        name: 'Sunrise',
        url: 'https://myanimelist.net/anime/producer/14/Sunrise',
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: 'anime',
        name: 'Action',
        url: 'https://myanimelist.net/anime/genre/1/Action',
      },
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 57,
        type: 'anime',
        name: 'Gag Humor',
        url: 'https://myanimelist.net/anime/genre/57/Gag_Humor',
      },
      {
        mal_id: 13,
        type: 'anime',
        name: 'Historical',
        url: 'https://myanimelist.net/anime/genre/13/Historical',
      },
      {
        mal_id: 20,
        type: 'anime',
        name: 'Parody',
        url: 'https://myanimelist.net/anime/genre/20/Parody',
      },
      {
        mal_id: 21,
        type: 'anime',
        name: 'Samurai',
        url: 'https://myanimelist.net/anime/genre/21/Samurai',
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 4181,
    url: 'https://myanimelist.net/anime/4181/Clannad__After_Story',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1299/110774.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1299/110774t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1299/110774l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1299/110774.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1299/110774t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1299/110774l.webp',
      },
    },
    trailer: {
      youtube_id: 'WiTwXIAcm5Q',
      url: 'https://www.youtube.com/watch?v=WiTwXIAcm5Q',
      embed_url:
        'https://www.youtube.com/embed/WiTwXIAcm5Q?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/WiTwXIAcm5Q/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/WiTwXIAcm5Q/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/WiTwXIAcm5Q/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/WiTwXIAcm5Q/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/WiTwXIAcm5Q/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Clannad: After Story',
      },
      {
        type: 'Japanese',
        title: 'CLANNAD〜AFTER STORY〜 クラナド アフターストーリー',
      },
      {
        type: 'English',
        title: 'Clannad: After Story',
      },
      {
        type: 'German',
        title: 'Clannad ~After Story~',
      },
      {
        type: 'Spanish',
        title: 'Clannad ~After Story~',
      },
      {
        type: 'French',
        title: 'Clannad ~After Story~',
      },
    ],
    title: 'Clannad: After Story',
    title_english: 'Clannad: After Story',
    title_japanese: 'CLANNAD〜AFTER STORY〜 クラナド アフターストーリー',
    title_synonyms: [],
    type: 'TV',
    source: 'Visual novel',
    episodes: 24,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2008-10-03T00:00:00+00:00',
      to: '2009-03-27T00:00:00+00:00',
      prop: {
        from: {
          day: 3,
          month: 10,
          year: 2008,
        },
        to: {
          day: 27,
          month: 3,
          year: 2009,
        },
      },
      string: 'Oct 3, 2008 to Mar 27, 2009',
    },
    duration: '24 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 8.93,
    scored_by: 662209,
    rank: 16,
    popularity: 118,
    members: 1197866,
    favorites: 70288,
    synopsis:
      "Tomoya Okazaki and Nagisa Furukawa have graduated from high school, and together, they experience the emotional rollercoaster of growing up. Unable to decide on a course for his future, Tomoya learns the value of a strong work ethic and discovers the strength of Nagisa's support. Through the couple's dedication and unity of purpose, they push forward to confront their personal problems, deepen their old relationships, and create new bonds.\n\nTime also moves on in the Illusionary World. As the plains grow cold with the approach of winter, the Illusionary Girl and the Garbage Doll are presented with a difficult situation that reveals the World's true purpose.\n\n[Written by MAL Rewrite]",
    background: '',
    season: 'fall',
    year: 2008,
    broadcast: {
      day: 'Fridays',
      time: '01:59',
      timezone: 'Asia/Tokyo',
      string: 'Fridays at 01:59 (JST)',
    },
    producers: [
      {
        mal_id: 144,
        type: 'anime',
        name: 'Pony Canyon',
        url: 'https://myanimelist.net/anime/producer/144/Pony_Canyon',
      },
      {
        mal_id: 145,
        type: 'anime',
        name: 'TBS',
        url: 'https://myanimelist.net/anime/producer/145/TBS',
      },
      {
        mal_id: 211,
        type: 'anime',
        name: 'Rakuonsha',
        url: 'https://myanimelist.net/anime/producer/211/Rakuonsha',
      },
      {
        mal_id: 929,
        type: 'anime',
        name: 'Animation Do',
        url: 'https://myanimelist.net/anime/producer/929/Animation_Do',
      },
    ],
    licensors: [
      {
        mal_id: 376,
        type: 'anime',
        name: 'Sentai Filmworks',
        url: 'https://myanimelist.net/anime/producer/376/Sentai_Filmworks',
      },
    ],
    studios: [
      {
        mal_id: 2,
        type: 'anime',
        name: 'Kyoto Animation',
        url: 'https://myanimelist.net/anime/producer/2/Kyoto_Animation',
      },
    ],
    genres: [
      {
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
      },
      {
        mal_id: 22,
        type: 'anime',
        name: 'Romance',
        url: 'https://myanimelist.net/anime/genre/22/Romance',
      },
      {
        mal_id: 37,
        type: 'anime',
        name: 'Supernatural',
        url: 'https://myanimelist.net/anime/genre/37/Supernatural',
      },
    ],
    explicit_genres: [],
    themes: [],
    demographics: [],
  },
  {
    mal_id: 28851,
    url: 'https://myanimelist.net/anime/28851/Koe_no_Katachi',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1122/96435.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1122/96435t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1122/96435l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1122/96435.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/1122/96435t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/1122/96435l.webp',
      },
    },
    trailer: {
      youtube_id: 'XBNWo25izJ8',
      url: 'https://www.youtube.com/watch?v=XBNWo25izJ8',
      embed_url:
        'https://www.youtube.com/embed/XBNWo25izJ8?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/XBNWo25izJ8/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/XBNWo25izJ8/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/XBNWo25izJ8/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/XBNWo25izJ8/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/XBNWo25izJ8/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Koe no Katachi',
      },
      {
        type: 'Synonym',
        title: 'The Shape of Voice',
      },
      {
        type: 'Japanese',
        title: '聲の形',
      },
      {
        type: 'English',
        title: 'A Silent Voice',
      },
      {
        type: 'German',
        title: 'A Silent Voice',
      },
      {
        type: 'Spanish',
        title: 'Una Voz Silenciosa',
      },
      {
        type: 'French',
        title: 'A Silent Voice',
      },
    ],
    title: 'Koe no Katachi',
    title_english: 'A Silent Voice',
    title_japanese: '聲の形',
    title_synonyms: ['The Shape of Voice'],
    type: 'Movie',
    source: 'Manga',
    episodes: 1,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2016-09-17T00:00:00+00:00',
      to: null,
      prop: {
        from: {
          day: 17,
          month: 9,
          year: 2016,
        },
        to: {
          day: null,
          month: null,
          year: null,
        },
      },
      string: 'Sep 17, 2016',
    },
    duration: '2 hr 10 min',
    rating: 'PG-13 - Teens 13 or older',
    score: 8.93,
    scored_by: 1622629,
    rank: 17,
    popularity: 20,
    members: 2341979,
    favorites: 88143,
    synopsis:
      "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.\n\nNow in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends.\n\nKoe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.\n \n[Written by MAL Rewrite]",
    background:
      'Koe no Katachi won the following awards: Japanese Movie Critics Awards for Best Animation Feature Film in 2016; Japanese Academy Award for Excellent Animation of the Year in 2016; Tokyo Anime Award Festival for Anime of the Year (movie) & Best Screenplay / Original Story (Reiko Yoshida) in 2017; Japan Media Arts Festival for Animation Division - Excellence Award in 2017; Japan Movie Critics Awards for Best Animation of the Year in 2017; and Camera Japan Festival for Feature Film in 2017.',
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
    },
    producers: [
      {
        mal_id: 109,
        type: 'anime',
        name: 'Shochiku',
        url: 'https://myanimelist.net/anime/producer/109/Shochiku',
      },
      {
        mal_id: 144,
        type: 'anime',
        name: 'Pony Canyon',
        url: 'https://myanimelist.net/anime/producer/144/Pony_Canyon',
      },
      {
        mal_id: 159,
        type: 'anime',
        name: 'Kodansha',
        url: 'https://myanimelist.net/anime/producer/159/Kodansha',
      },
      {
        mal_id: 1500,
        type: 'anime',
        name: 'ABC Animation',
        url: 'https://myanimelist.net/anime/producer/1500/ABC_Animation',
      },
      {
        mal_id: 1574,
        type: 'anime',
        name: 'Quaras',
        url: 'https://myanimelist.net/anime/producer/1574/Quaras',
      },
    ],
    licensors: [
      {
        mal_id: 531,
        type: 'anime',
        name: 'Eleven Arts',
        url: 'https://myanimelist.net/anime/producer/531/Eleven_Arts',
      },
      {
        mal_id: 595,
        type: 'anime',
        name: 'NYAV Post',
        url: 'https://myanimelist.net/anime/producer/595/NYAV_Post',
      },
    ],
    studios: [
      {
        mal_id: 2,
        type: 'anime',
        name: 'Kyoto Animation',
        url: 'https://myanimelist.net/anime/producer/2/Kyoto_Animation',
      },
    ],
    genres: [
      {
        mal_id: 46,
        type: 'anime',
        name: 'Award Winning',
        url: 'https://myanimelist.net/anime/genre/46/Award_Winning',
      },
      {
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 74,
        type: 'anime',
        name: 'Romantic Subtext',
        url: 'https://myanimelist.net/anime/genre/74/Romantic_Subtext',
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 9426,
    url: 'https://myanimelist.net/anime/9426/Pururun_Shizuku-chan',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/2/26098.jpg',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/2/26098t.jpg',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/2/26098l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/2/26098.webp',
        small_image_url:
          'https://cdn.myanimelist.net/images/anime/2/26098t.webp',
        large_image_url:
          'https://cdn.myanimelist.net/images/anime/2/26098l.webp',
      },
    },
    trailer: {
      youtube_id: 'DQ7OlfZOQaw',
      url: 'https://www.youtube.com/watch?v=DQ7OlfZOQaw',
      embed_url:
        'https://www.youtube.com/embed/DQ7OlfZOQaw?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/DQ7OlfZOQaw/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/DQ7OlfZOQaw/sddefault.jpg',
        medium_image_url:
          'https://img.youtube.com/vi/DQ7OlfZOQaw/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/DQ7OlfZOQaw/hqdefault.jpg',
        maximum_image_url:
          'https://img.youtube.com/vi/DQ7OlfZOQaw/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Pururun! Shizuku-chan',
      },
      {
        type: 'Japanese',
        title: 'ぷるるんっ！しずくちゃん',
      },
    ],
    title: 'Pururun! Shizuku-chan',
    title_english: null,
    title_japanese: 'ぷるるんっ！しずくちゃん',
    title_synonyms: [],
    type: 'TV',
    source: 'Manga',
    episodes: 51,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2006-10-07T00:00:00+00:00',
      to: '2007-09-29T00:00:00+00:00',
      prop: {
        from: {
          day: 7,
          month: 10,
          year: 2006,
        },
        to: {
          day: 29,
          month: 9,
          year: 2007,
        },
      },
      string: 'Oct 7, 2006 to Sep 29, 2007',
    },
    duration: '24 min per ep',
    rating: 'G - All Ages',
    score: null,
    scored_by: null,
    rank: 17431,
    popularity: 15381,
    members: 600,
    favorites: 0,
    synopsis:
      'The series revolves around a playful young child named Shizuku-Chan. He, alongside his schoolmates, friends, and family lives a life of dangerous adventures in the Shizuku Forest.\n\n(Source: Wikipedia)',
    background: '',
    season: 'fall',
    year: 2006,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: 'Unknown',
    },
    producers: [],
    licensors: [],
    studios: [
      {
        mal_id: 73,
        type: 'anime',
        name: 'TMS Entertainment',
        url: 'https://myanimelist.net/anime/producer/73/TMS_Entertainment',
      },
    ],
    genres: [
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
    ],
    explicit_genres: [],
    themes: [],
    demographics: [
      {
        mal_id: 15,
        type: 'anime',
        name: 'Kids',
        url: 'https://myanimelist.net/anime/genre/15/Kids',
      },
    ],
  },
];

export const MOCK_SINGLE_ANIME: AnimeResponse = {
  mal_id: 1,
  url: 'https://example.com/anime/1',
  images: {
    jpg: {
      image_url: 'https://example.com/image.jpg',
      small_image_url: 'https://example.com/small-image.jpg',
      large_image_url: 'https://example.com/large-image.jpg',
    },
    webp: {
      image_url: 'https://example.com/image.webp',
      small_image_url: 'https://example.com/small-image.webp',
      large_image_url: 'https://example.com/large-image.webp',
    },
  },
  trailer: {
    youtube_id: null,
    url: null,
    embed_url: null,
    images: {
      image_url: null,
      small_image_url: null,
      medium_image_url: null,
      large_image_url: null,
      maximum_image_url: null,
    },
  },
  approved: true,
  titles: [
    { type: 'Default', title: 'Example Anime' },
    { type: 'English', title: 'Example Anime' },
  ],
  title: 'Example Anime',
  title_english: 'Example Anime',
  title_japanese: '例のアニメ',
  title_synonyms: ['Sample Anime'],
  type: 'TV',
  source: 'Manga',
  episodes: 24,
  status: 'Finished Airing',
  airing: false,
  aired: {
    from: '2020-01-01T00:00:00+00:00',
    to: '2020-06-01T00:00:00+00:00',
    prop: {
      from: { day: 1, month: 1, year: 2020 },
      to: { day: 1, month: 6, year: 2020 },
    },
    string: 'Jan 1, 2020 to Jun 1, 2020',
  },
  duration: '24 min per ep',
  rating: 'PG-13',
  score: 8.5,
  scored_by: 10000,
  rank: 1,
  popularity: 100,
  members: 50000,
  favorites: 1000,
  synopsis: 'This is a synopsis of the example anime.',
  background: 'This is background information about the example anime.',
  season: 'Winter',
  year: 2020,
  broadcast: {
    day: 'Wednesday',
    time: '18:00',
    timezone: 'Asia/Tokyo',
    string: 'Wednesdays at 18:00 (JST)',
  },
  producers: [
    {
      mal_id: 1,
      type: 'producer',
      name: 'Producer Name',
      url: 'https://example.com/producer',
    },
  ],
  licensors: [
    {
      mal_id: 2,
      type: 'licensor',
      name: 'Licensor Name',
      url: 'https://example.com/licensor',
    },
  ],
  studios: [
    {
      mal_id: 3,
      type: 'studio',
      name: 'Studio Name',
      url: 'https://example.com/studio',
    },
  ],
  genres: [
    {
      mal_id: 1,
      type: 'genre',
      name: 'Action',
      url: 'https://example.com/genre/action',
    },
    {
      mal_id: 2,
      type: 'genre',
      name: 'Adventure',
      url: 'https://example.com/genre/adventure',
    },
  ],
  explicit_genres: [],
  themes: [
    {
      mal_id: 4,
      type: 'theme',
      name: 'Fantasy',
      url: 'https://example.com/theme/fantasy',
    },
  ],
  demographics: [
    {
      mal_id: 5,
      type: 'demographic',
      name: 'Shounen',
      url: 'https://example.com/demographic/shounen',
    },
  ],
};

export const MOCK_SINGLE_ITEM_WITH_NULL_DATA = {
  mal_id: 13781,
  url: 'https://myanimelist.net/anime/13781/Dokkiri_Doctor_Special',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/12/44077.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/12/44077t.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/12/44077l.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/anime/12/44077.webp',
      small_image_url:
        'https://cdn.myanimelist.net/images/anime/12/44077t.webp',
      large_image_url:
        'https://cdn.myanimelist.net/images/anime/12/44077l.webp',
    },
  },
  trailer: {
    youtube_id: null,
    url: null,
    embed_url: null,
    images: {
      image_url: null,
      small_image_url: null,
      medium_image_url: null,
      large_image_url: null,
      maximum_image_url: null,
    },
  },
  approved: true,
  titles: [
    {
      type: 'Default',
      title: 'Dokkiri Doctor Special',
    },
    {
      type: 'Synonym',
      title: "Dokkiri Doctor: Maidens' Secret Physical Examination!!",
    },
    {
      type: 'Synonym',
      title: 'Dokkiri Doctor: Otome no Himitsu KenkouShindan!!',
    },
    {
      type: 'Japanese',
      title: 'ドッキリドクター 乙女の(秘)健康診断!!',
    },
  ],
  title: 'Dokkiri Doctor Special',
  title_english: null,
  title_japanese: 'ドッキリドクター 乙女の(秘)健康診断!!',
  title_synonyms: [
    "Dokkiri Doctor: Maidens' Secret Physical Examination!!",
    'Dokkiri Doctor: Otome no Himitsu KenkouShindan!!',
  ],
  type: 'Special',
  source: 'Manga',
  episodes: 1,
  status: 'Finished Airing',
  airing: false,
  aired: {
    from: '1999-08-10T00:00:00+00:00',
    to: null,
    prop: {
      from: {
        day: 10,
        month: 8,
        year: 1999,
      },
      to: {
        day: null,
        month: null,
        year: null,
      },
    },
    string: 'Aug 10, 1999',
  },
  duration: '25 min',
  rating: 'PG-13 - Teens 13 or older',
  score: null,
  scored_by: null,
  rank: 19340,
  popularity: 16510,
  members: 467,
  favorites: 2,
  synopsis: 'Dokkiri Doctor special. Also known as Episode 27.',
  background: '',
  season: null,
  year: null,
  broadcast: {
    day: null,
    time: null,
    timezone: null,
    string: null,
  },
  producers: [],
  licensors: [],
  studios: [
    {
      mal_id: 1,
      type: 'anime',
      name: 'Pierrot',
      url: 'https://myanimelist.net/anime/producer/1/Pierrot',
    },
  ],
  genres: [
    {
      mal_id: 4,
      type: 'anime',
      name: 'Comedy',
      url: 'https://myanimelist.net/anime/genre/4/Comedy',
    },
    {
      mal_id: 9,
      type: 'anime',
      name: 'Ecchi',
      url: 'https://myanimelist.net/anime/genre/9/Ecchi',
    },
  ],
  explicit_genres: [],
  themes: [
    {
      mal_id: 23,
      type: 'anime',
      name: 'School',
      url: 'https://myanimelist.net/anime/genre/23/School',
    },
  ],
  demographics: [],
};

export const MOCK_SINGLE_ITEM = {
  mal_id: 13781,
  url: 'https://myanimelist.net/anime/13781/Dokkiri_Doctor_Special',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/12/44077.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/12/44077t.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/12/44077l.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/anime/12/44077.webp',
      small_image_url:
        'https://cdn.myanimelist.net/images/anime/12/44077t.webp',
      large_image_url:
        'https://cdn.myanimelist.net/images/anime/12/44077l.webp',
    },
  },
  trailer: {
    youtube_id: 'abcd',
    url: 'https://youtu.be/abcd',
    embed_url: 'https://youtube.com/embed/abcd',
    images: {
      image_url: 'https://cdn.myanimelist.net/images/trailer/abcd.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/trailer/abcdt.jpg',
      medium_image_url: 'https://cdn.myanimelist.net/images/trailer/abcdm.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/trailer/abcdl.jpg',
      maximum_image_url:
        'https://cdn.myanimelist.net/images/trailer/abcdxl.jpg',
    },
  },
  approved: true,
  titles: [
    {
      type: 'Default',
      title: 'Dokkiri Doctor Special',
    },
    {
      type: 'Synonym',
      title: "Dokkiri Doctor: Maidens' Secret Physical Examination!!",
    },
    {
      type: 'Synonym',
      title: 'Dokkiri Doctor: Otome no Himitsu KenkouShindan!!',
    },
    {
      type: 'Japanese',
      title: 'ドッキリドクター 乙女の(秘)健康診断!!',
    },
  ],
  title: 'Dokkiri Doctor Special',
  title_english: null,
  title_japanese: 'ドッキリドクター 乙女の(秘)健康診断!!',
  title_synonyms: [
    "Dokkiri Doctor: Maidens' Secret Physical Examination!!",
    'Dokkiri Doctor: Otome no Himitsu KenkouShindan!!',
  ],
  type: 'Special',
  source: 'Manga',
  episodes: 1,
  status: 'Finished Airing',
  airing: false,
  aired: {
    from: '1999-08-10T00:00:00+00:00',
    to: null,
    prop: {
      from: {
        day: 10,
        month: 8,
        year: 1999,
      },
      to: {
        day: null,
        month: null,
        year: null,
      },
    },
    string: 'Aug 10, 1999',
  },
  duration: '25 min',
  rating: 'PG-13 - Teens 13 or older',
  score: 8.5,
  scored_by: 1500,
  rank: 19340,
  popularity: 16510,
  members: 467,
  favorites: 2,
  synopsis: 'Dokkiri Doctor special. Also known as Episode 27.',
  background: '',
  season: null,
  year: null,
  broadcast: {
    day: null,
    time: null,
    timezone: null,
    string: null,
  },
  producers: [],
  licensors: [],
  studios: [
    {
      mal_id: 1,
      type: 'anime',
      name: 'Pierrot',
      url: 'https://myanimelist.net/anime/producer/1/Pierrot',
    },
  ],
  genres: [
    {
      mal_id: 4,
      type: 'anime',
      name: 'Comedy',
      url: 'https://myanimelist.net/anime/genre/4/Comedy',
    },
    {
      mal_id: 9,
      type: 'anime',
      name: 'Ecchi',
      url: 'https://myanimelist.net/anime/genre/9/Ecchi',
    },
  ],
  explicit_genres: [],
  themes: [
    {
      mal_id: 23,
      type: 'anime',
      name: 'School',
      url: 'https://myanimelist.net/anime/genre/23/School',
    },
  ],
  demographics: [],
};

export const M = {
  mal_id: 13781,
  url: 'https://myanimelist.net/anime/13781/Dokkiri_Doctor_Special',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/12/44077.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/12/44077t.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/12/44077l.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/anime/12/44077.webp',
      small_image_url:
        'https://cdn.myanimelist.net/images/anime/12/44077t.webp',
      large_image_url:
        'https://cdn.myanimelist.net/images/anime/12/44077l.webp',
    },
  },
  trailer: {
    youtube_id: null,
    url: null,
    embed_url: null,
    images: {
      image_url: null,
      small_image_url: null,
      medium_image_url: null,
      large_image_url: null,
      maximum_image_url: null,
    },
  },
  approved: true,
  titles: [
    {
      type: 'Default',
      title: 'Dokkiri Doctor Special',
    },
    {
      type: 'Synonym',
      title: "Dokkiri Doctor: Maidens' Secret Physical Examination!!",
    },
    {
      type: 'Synonym',
      title: 'Dokkiri Doctor: Otome no Himitsu KenkouShindan!!',
    },
    {
      type: 'Japanese',
      title: 'ドッキリドクター 乙女の(秘)健康診断!!',
    },
  ],
  title: 'Dokkiri Doctor Special',
  title_english: null,
  title_japanese: 'ドッキリドクター 乙女の(秘)健康診断!!',
  title_synonyms: [
    "Dokkiri Doctor: Maidens' Secret Physical Examination!!",
    'Dokkiri Doctor: Otome no Himitsu KenkouShindan!!',
  ],
  type: 'Special',
  source: 'Manga',
  episodes: 1,
  status: 'Finished Airing',
  airing: false,
  aired: {
    from: '1999-08-10T00:00:00+00:00',
    to: null,
    prop: {
      from: {
        day: 10,
        month: 8,
        year: 1999,
      },
      to: {
        day: null,
        month: null,
        year: null,
      },
    },
    string: 'Aug 10, 1999',
  },
  duration: '25 min',
  rating: 'PG-13 - Teens 13 or older',
  score: null,
  scored_by: null,
  rank: 19340,
  popularity: 16510,
  members: 467,
  favorites: 2,
  synopsis: 'Dokkiri Doctor special. Also known as Episode 27.',
  background: '',
  season: null,
  year: null,
  broadcast: {
    day: null,
    time: null,
    timezone: null,
    string: null,
  },
  producers: [],
  licensors: [],
  studios: [
    {
      mal_id: 1,
      type: 'anime',
      name: 'Pierrot',
      url: 'https://myanimelist.net/anime/producer/1/Pierrot',
    },
  ],
  genres: [
    {
      mal_id: 4,
      type: 'anime',
      name: 'Comedy',
      url: 'https://myanimelist.net/anime/genre/4/Comedy',
    },
    {
      mal_id: 9,
      type: 'anime',
      name: 'Ecchi',
      url: 'https://myanimelist.net/anime/genre/9/Ecchi',
    },
  ],
  explicit_genres: [],
  themes: [
    {
      mal_id: 23,
      type: 'anime',
      name: 'School',
      url: 'https://myanimelist.net/anime/genre/23/School',
    },
  ],
  demographics: [],
};
