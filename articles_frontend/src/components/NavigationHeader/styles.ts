import styled, { css } from 'styled-components'

export const Container = styled.nav`
  min-height: 40px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: ${(props) => props.theme.padding};
  margin: ${(props) => props.theme.margin};
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;


  ${({theme}) => theme.navFixed && css`
    position: fixed;
    width: 100%;
    z-index: 999;
  `}

  a {
    padding: 5px;
  }
`

export const LogoContainer = styled.div`
  a {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-items: center;

    h3,
    svg {
      color: black;
    }

    h3 {
      margin-left: 10px;
    }
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  > a {
    margin: 0 20px;
    padding: 10px 15px;
    color: black;
    background-color: #fbfbfb;
    display: block;
    border: 0px;
    border-radius: 10px;
    font-size: 25px;

    &:last-of-type {
      margin-right: 0px;
    }
  }
`
