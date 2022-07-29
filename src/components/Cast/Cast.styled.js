import styled from "styled-components";

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[7]}px;
  justify-content: space-between;
`

export const Info = styled.span`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.primary};
`

export const Text = styled.p`
  font-size:  ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.heading};
`