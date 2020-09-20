import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 5px 0px;

  span {
    color: gray;

    & ~ span {
      border-left: 1px solid black;
      margin-left: 5px;
      padding-left: 5px;
    }
  }
`;

export const PostDate = styled.span``;

export const PostReadTime = styled.span``;
