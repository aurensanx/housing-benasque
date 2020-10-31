import styled, { css } from 'styled-components'

const columnStyles = css`
  flex-direction: column;
`

const centerStyles = css`
  ${columnStyles}
  justify-content: center;
  align-items: center;
`


export const Flex = styled.div`
  display: flex;
  ${({ column }) => column && columnStyles}
  ${({ center }) => center && centerStyles}
  ${({ styles }) => styles}
`





