import { Container, Title } from './styles';
import React, { useMemo } from 'react';
import MarkdownContent from '../MarkdownContent';
import { IProject } from '../../interfaces';

const ProjectModal: React.FC<IProject> = ({ title, body }) => {
  return useMemo(
    () => (
      <Container>
        <Title>{title}</Title>
        <MarkdownContent body={body} />
      </Container>
    ),
    [body, title],
  );
};

export default ProjectModal;
