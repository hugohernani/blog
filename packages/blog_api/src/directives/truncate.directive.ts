import * as _ from 'lodash';

import { GraphQLField, defaultFieldResolver } from 'graphql';

import { SchemaDirectiveVisitor } from 'apollo-server';

export class TruncateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<string, string>): void {
    // const { resolve = defaultFieldResolver } = field;
    // field.resolve = async (...args): Promise<string | undefined> => {
    //   const result = await resolve.apply(this, args);
    //   if (typeof result === 'string') {
    //     return _.truncate(result, {
    //       length: 400,
    //       separator: /,? +/,
    //     });
    //   }
    //   return result;
    // };
  }
}
