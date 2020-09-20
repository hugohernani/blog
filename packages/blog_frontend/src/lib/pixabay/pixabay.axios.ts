import axios from 'axios';
import { PixaBayResponseData, PixaBayRequestOptions } from './types';

const pixabayInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  paramsSerializer: (params: { q: string[] } & PixaBayRequestOptions): string => {
    const pixaBayAPIkey = process.env.REACT_APP_PIXABAY_API_KEY;
    const { q: searchTerms, ...remainingParams } = params;
    const fuzzySearchTerm = (compoundTerm: string): string[] => {
      return compoundTerm.split(' ').map((term) => `${term}~`);
    };

    const objStringValues: Record<string, string> = {};
    Object.keys(remainingParams).forEach((attr: string) => {
      objStringValues[attr] = remainingParams[attr].toString();
    });
    const serializedParams = {
      q: searchTerms.map((compoundTerm) => fuzzySearchTerm(compoundTerm)).join('|'),
      ...objStringValues,
    };
    const searchParams = new URLSearchParams(serializedParams);
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
