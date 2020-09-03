import styled from 'styled-components'

// const formButtonColor = '#04d361'

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  flex-flow: column;
`

export const BannerSection = styled.div`
  position: relative;
  background-color: #0c59cf;
  height: 500px;
`

export const Banner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
`

export const Header = styled.h1`
  font-size: 100px;
  font-family: 'Roboto  ', sans-serif;
  font-weight: bold;
  color: whitesmoke;
`

export const BodyContainer = styled.div`
  position: relative;
  top: -40px;
  margin: 0px 120px 0px 100px;

  /* For testing only */
  min-height: 800px;
  background-color: darkgrey;

  box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 29px 0px rgba(0,0,0,0.75);
`

// export const ContentSection = styled.section`
// `

export const PostsContainer = styled.section`
  margin: 20px 200px 20px 200px;
`

export const FooterContainer = styled.section`
  min-height: 600px;
`

export const NewsletterSection = styled.section`
  background-color: whitesmoke;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

export const NewsletterHeader = styled.h1`

`
export const NewsletterMessage = styled.p`

`
export const NewsletterFormGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row;

`
