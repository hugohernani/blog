import { gql, DocumentNode } from '@apollo/client'
import { capitalize, lowerCase } from 'lodash'
import { plural, singular } from 'pluralize'

export const connectionGenerateGql = (entityName: string, fieldsFragment: DocumentNode) => {
  const pluralEntityName = plural(entityName)
  const singularEntityName = singular(entityName)
  const capitalizedpluralEntityName = capitalize(pluralEntityName)
  const capitalizedSingularEntityName = capitalize(singularEntityName)
  const lowerPluralEntityName = lowerCase(pluralEntityName)

  return gql`
    query Get${capitalizedpluralEntityName}($paging: CursorPaging, $filter: ${capitalizedSingularEntityName}Filter, $sorting: [${capitalizedSingularEntityName}Sort!]){
      ${lowerPluralEntityName}(paging: $paging, filter: $filter, sorting: $sorting) {
        edges {
          node {
            ...${capitalizedSingularEntityName}Fields
          }
        }
      }
    }
    ${fieldsFragment}
  `
}
