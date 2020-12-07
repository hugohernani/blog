import styled from 'styled-components';

export const BiographyContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

export const PresentationTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 100px;
`;

export const PresentationShortDescription = styled.div`
  line-height: 1.65;
  margin-bottom: 20px;
`;

export const CallOutContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 41%;
`;

export const PortfolioCallOutContainer = styled.div`
  text-transform: uppercase;

  background-color: whitesmoke;
  padding: 10px 20px;

  border: 1px thin darkblue;
  border-radius: 10px;

  margin: 10px 0px;

  a {
    color: black;
  }
`;
