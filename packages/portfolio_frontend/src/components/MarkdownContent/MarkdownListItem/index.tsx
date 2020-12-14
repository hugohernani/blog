import React, { useMemo } from 'react';
import { IMarkdownRenderer } from 'src/interfaces';
import { ListItem } from './styles';

const MarkdownListItem: React.FC<IMarkdownRenderer> = ({ children }) => {
  return useMemo(() => <ListItem>{children}</ListItem>, [children]);
};

export default MarkdownListItem;
