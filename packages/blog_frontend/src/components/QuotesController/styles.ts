import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 1px;
  float: right;
  bottom: 100px;

  box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);

`

export const QuoteContainer = styled.div`
  background-color: #3d8af7;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  > svg {
    margin: 0px 15px 0 0px;
    padding: 15px;
    color: gray;
    background-color: white;
  }

  > div {
    margin: 0 0 0 15px;
  }
`
