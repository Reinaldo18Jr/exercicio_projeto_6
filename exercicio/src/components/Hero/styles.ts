import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    width: 50%;
  }
`

export const Logo = styled.img`
  width: 128px;
  margin-top: 64px;
`

export const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;
  max-width: 540px;
  margin-bottom: 40px;
`
