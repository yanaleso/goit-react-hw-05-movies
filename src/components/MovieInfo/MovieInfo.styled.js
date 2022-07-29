import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  border-bottom: ${p => p.theme.borders.normal};
`

export const Image = styled.img`
  width: ${p => p.theme.sizes.l};
`