import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  position: relative;
`

export const Infos = styled.div`
  postion: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 12px;
  padding: 6px 4px;
  display: inline-block;
`

export const Border = styled.div`
  border: solid 0px 1px 1px 1px ${cores.rosa};
  padding: 8px;
`

export const FlexContainer = styled.div`
  diplay: flex;
  justify-content: space-between;
`

export const NameAndGrade = styled.h2`
  color: ${cores.rosa};
  font-size: 18px;
  line-height: 21px;
  font-weight: bold;
`

export const StarImg = styled.img`
  margin-left: 8px;
`

export const Text = styled.p`
  color: ${cores.rosa};
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`

export const Button = styled.a`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 14px;
  padding: 4px 6px;
  cursor: pointer;
`