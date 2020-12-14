import React, { useMemo } from 'react';
import { Container } from './styles';
import ReactMarkdown from 'react-markdown';
import MarkdownImage from './MarkdownImage';
import MarkdownImageReference from './MarkdownImageReference';
import MarkdownInlineCode from './MarkdownInlineCode';
import MarkdownBlockCode from './MarkdownBlockCode';
import MarkdownBlockquote from './MarkdownBlockquote';
import gfm from 'remark-gfm';
import MarkdownListItem from './MarkdownListItem';
import MarkdownList from './MarkdownList';
import MarkdownParagraph from './MarkdownParagraph';

interface IMarkdownContent {
  readonly body: string;
}

const MarkdownContent: React.FC<IMarkdownContent> = ({ body }) => {
  const renderers = useMemo(
    () => ({
      list: MarkdownList,
      listItem: MarkdownListItem,
      image: MarkdownImage,
      imageReference: MarkdownImageReference,
      inlineCode: MarkdownInlineCode,
      code: MarkdownBlockCode,
      blockquote: MarkdownBlockquote,
      paragraph: MarkdownParagraph,
    }),
    [],
  );

  const plugins = useMemo(() => [gfm], []);

  return useMemo(
    () => (
      <Container>
        <ReactMarkdown renderers={renderers} plugins={plugins} source={body} />
      </Container>
    ),
    [body, plugins, renderers],
  );
};

export default MarkdownContent;
