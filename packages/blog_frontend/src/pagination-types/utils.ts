import { DocumentNode, gql } from '@apollo/client';
import { camelCase, startCase } from 'lodash';

export const connectionGenerateGql = (
  endpoint: string,
  entityName: string,
  fieldsFragment: DocumentNode,
): DocumentNode => {
  const capitalizedEndpoint = startCase(endpoint).replace(/ /g, '');
  const camelCaseEndpoint = camelCase(capitalizedEndpoint);
  const capitalizedSingularEntityName = startCase(entityName).replace(/ /g, '');

  return gql`
    query Get${capitalizedEndpoint}($paging: CursorPaging, $filter: ${capitalizedSingularEntityName}Filter, $sorting: [${capitalizedSingularEntityName}Sort!]){
      ${camelCaseEndpoint}(paging: $paging, filter: $filter, sorting: $sorting) {
        edges {
          node {
            ...${capitalizedSingularEntityName}Fields
          }
        }
      }
    }
    ${fieldsFragment}
  `;
};
