enum NullsEnum {
  NULLS_FIRST = 'NULLS_FIRST',
  NULLS_LAST = 'NULLS_LAST',
}

export interface Sorting<T> {
  field: keyof T;
  direction: 'ASC' | 'DESC';
  nulls?: NullsEnum;
}
