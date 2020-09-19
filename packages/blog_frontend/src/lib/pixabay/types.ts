const allowedPixabayOrderItems = ['popular', 'latest'] as const;
const allowedPixaBayImageTypes = ['all', 'photo', 'illustration', 'vector'] as const;
const allowedPixaBayCategories = [
  'backgrounds',
  'fashion',
  'nature',
  'science',
  'education',
  'feelings',
  'health',
  'people',
  'religion',
  'places',
  'animals',
  'industry',
  'computer',
  'food',
  'sports',
  'transportation',
  'travel',
  'buildings',
  'business',
  'music',
] as const;
export type PixaBayOrder = typeof allowedPixabayOrderItems;
export type PixaBayAllowedImageType = typeof allowedPixaBayImageTypes;
export type PixaBayAllowedCategory = typeof allowedPixaBayCategories;

export interface PixaBayRequestOptions {
  editors_choice?: boolean;
  safesearch?: boolean;
  image_type?: PixaBayAllowedImageType;
  order?: PixaBayOrder;
  category?: PixaBayAllowedCategory[number];
  per_page?: number;
}

export interface PixaBayImageResponseData {
  [index: string]: string | number;
  id: number;
  pageURL: string;
  previewURL: string;
  webformatURL: string;
  largeImageURL: string;
  imageURL: string;
  imageWidth: string;
  imageHeight: string;
  user: string;
  user_id: string;
}

export interface PixaBayResponseData {
  total: number;
  hits: PixaBayImageResponseData[];
}
