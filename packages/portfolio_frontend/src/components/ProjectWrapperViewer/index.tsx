import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { BrowserView, MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';
import { IPortfolioItemPreview, IProject } from '../../interfaces';
import { useModal } from '../../hooks';
import ProjectModal from '../ProjectModal';
import { BrowserContainer } from './styles';
import PortfolioItemPreview from '../PortfolioItemPreview';

const ProjectWrapperViewer: React.FC<IPortfolioItemPreview> = ({ children, ...portfolioAttrs }) => {
  const { setModal, onModalCloseCallback } = useModal();
  const [project, setProject] = useState<IProject>({
    id: 'whatever-id',
    title: 'whatever',
    body: 'Lorem Ipsum',
    dateRange: '12/01/2020 -- 12/13/2020',
    technology: 'Ruby On Rails',
    imageUrl: 'https://cdn.pixabay.com/photo/2017/05/11/21/22/texture-2305386_960_720.jpg',
    shortDescription: 'Portfolio',
  }); // TODO:

  const openPortfolioDialog = useCallback(() => {
    setModal(<ProjectModal {...project} />);

    onModalCloseCallback(() => {
      return () => ({});
    });
  }, [onModalCloseCallback, project, setModal]);

  // useEffect(() => {
  //   setProject(undefined);
  // }, [setProject]);

  return useMemo(
    () => (
      <React.Fragment>
        <BrowserView>
          <BrowserContainer onClick={openPortfolioDialog}>{children}</BrowserContainer>
        </BrowserView>
        <MobileView>
          <Link to={portfolioAttrs.projectUrl}>{children}</Link>
        </MobileView>
      </React.Fragment>
    ),
    [children, openPortfolioDialog, portfolioAttrs.projectUrl],
  );
};

export default ProjectWrapperViewer;
