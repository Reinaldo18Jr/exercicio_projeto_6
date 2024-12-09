import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const Card = styled(Link)`
  position: relative;
  margin-bottom: 48px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 12px;
  padding: 6px 8px;
  margin-left: 8px;
  display: inline-block;
`

export const Border = styled.div`
  border-left: 1px solid ${cores.rosa};
  border-bottom: 1px solid ${cores.rosa};
  border-right: 1px solid ${cores.rosa};
  padding: 8px;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
  }
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

export const Button = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 14px;
  padding: 4px 6px;
`
