export const ANIME_BASE_URL = 'https://api.jikan.moe/v4';

export const SORT_OPTIONS = [
  'score',
  'episodes',
  'rank',
  'popularity',
  'members',
  'favorites',
  'title',
];

export const SORT_DIRECTIONS = {
  ASC: 'asc',
  DESC: 'desc',
};

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
