import styled from 'styled-components'
import { shade } from 'polished'

const formButtonColor = '#04d361'

export const Header = styled.h1`
  color: #ff0000;
`

export const Container = styled.div`
  box-sizing: border-box;
`

export const Form = styled.form`
  margin-top: 80px;
  max-width: 740px;
  display: flex;

  input {
    flex: 1;
    height: 78px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${formButtonColor};
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
  }

  &:hover {
    background: ${shade(0.2, formButtonColor)};
  }
`
