import { DocumentNode, gql } from '@apollo/client';
import { camelCase, startCase } from 'lodash';

const getFormattedAttibutes = (endpoint: string, entityName: string): readonly [string, string, string] => {
  const capitalizedEndpoint = startCase(endpoint).replace(/ /g, '');
  const camelCaseEndpoint = camelCase(capitalizedEndpoint);
  const capitalizedSingularEntityName = startCase(entityName).replace(/ /g, '');

  return [capitalizedEndpoint, camelCaseEndpoint, capitalizedSingularEntityName] as const;
};

export const connectionGenerateGql = (
  endpoint: string,
  entityName: string,
  fieldsFragment: DocumentNode,
): DocumentNode => {
  const [capitalizedEndpoint, camelCaseEndpoint, capitalizedSingularEntityName] = getFormattedAttibutes(
    endpoint,
    entityName,
  );

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

export const updateEntityGql = (endpoint: string, entityName: string, fieldsFragment: DocumentNode): DocumentNode => {
  const [, camelCaseEndpoint, capitalizedSingularEntityName] = getFormattedAttibutes(endpoint, entityName);

  return gql`
    mutation UpdateOne${capitalizedSingularEntityName}($input: UpdateOne${capitalizedSingularEntityName}Input!){
      ${camelCaseEndpoint}(input: $input){
        ...${capitalizedSingularEntityName}Fields
      }
      ${fieldsFragment}
    }

  `;
};
