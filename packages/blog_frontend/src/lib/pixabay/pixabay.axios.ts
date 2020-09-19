import axios from 'axios';
import { PixaBayResponseData, PixaBayRequestOptions } from './types';

const pixabayInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  paramsSerializer: (params: { q: string[] } & PixaBayRequestOptions) => {
    const pixaBayAPIkey = process.env.PIXABAY_API_KEY;
    console.log('PixaBay key: ', pixaBayAPIkey);
    // following pixabay image search requirements: https://pixabay.com/pt/blog/posts/advanced-image-search-on-pixabay-46/
    const { q: searchTerms, ...remainingParams } = params;
    const fuzzySearchTerm = (compoundTerm: string): string[] => {
      return compoundTerm.split(' ').map((term) => `${term}~`);
    };
    const serializedParams = {
      q: searchTerms.map((compoundTerm) => fuzzySearchTerm(compoundTerm)).join('|'),
      ...remainingParams,
    };
    const searchParams = new URLSearchParams(JSON.stringify(serializedParams));
    return `key=${pixaBayAPIkey}&${searchParams.toString()}`;
  },
});

const pixabay = async (
  path: string,
  searchTerm: string | string[],
  // eslint-disable-next-line @typescript-eslint/camelcase
  extraParams: PixaBayRequestOptions = { editors_choice: true, per_page: 3, safesearch: true },
): Promise<Readonly<PixaBayResponseData>> => {
  const pixaBayParams = {
    q: Array(searchTerm).flat(),
    ...extraParams,
  };
  const response = await pixabayInstance.get<Readonly<PixaBayResponseData>>(path, { params: pixaBayParams });
  return response.data;
};

export default pixabay;
