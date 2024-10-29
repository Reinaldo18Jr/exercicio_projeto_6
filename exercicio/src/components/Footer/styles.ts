import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  width: 100%;
  padding: 40px;
  text-align: center;
`

export const Logo = styled.img`
  width: 128px;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
  justify-content: center;
`

export const Link = styled.a`
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
  color: ${cores.rosa};
`

export const Text = styled.p`
  font-size: 10px;
  color: ${cores.rosa};
  margin-top: 80px;
  max-width: 480px;
  display: inline-block;
`
