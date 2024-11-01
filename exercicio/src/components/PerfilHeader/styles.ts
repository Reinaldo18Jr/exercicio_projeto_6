import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.header`
  width: 100%;
  height: 184px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .containerHeader {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    padding-top: 64px;
    align-items: center;
  }
`

export const Place = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
`

export const Logo = styled.img`
  width: 128px;
  margin-left: 341px;
`

export const Cart = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  margin-left: 251px;
`

export const Apresentacao = styled.div`
  width: 100%;
  height: 440px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Country = styled.p`
  font-size: 32px;
  font-weight: 100;
  padding-top: 24px;
  color: ${cores.branca};
`

export const Name = styled.p`
  font-size: 32px;
  font-weight: bold;
  padding-top: 320px;
  color: ${cores.branca};
`
