enum NullsEnum{
  NULLS_FIRST = 'NULLS_FIRST',
  NULLS_LAST = 'NULLS_LAST'
}

enum SortingDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface Sorting<T>{
  field: keyof T;
  direction: SortingDirection,
  nulls: NullsEnum
}
