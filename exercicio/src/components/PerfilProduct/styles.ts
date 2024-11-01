import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding-top: 56px;
  padding-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`

export const Card = styled.div`
  padding: 8px;
  display: block;
  background-color: ${cores.rosa};
  margin-bottom: 32px;
`

export const PizzaImg = styled.img`
  width: 304px;
`

export const PizzaName = styled.h4`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${cores.bege};
`

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.bege};
`

export const Button = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  margin-top: 12px;
  padding: 4px;
  background-color: ${cores.bege};
  color: ${cores.rosa};
  text-decoration: none;
  cursor: pointer;
`
