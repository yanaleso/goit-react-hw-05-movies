import styled from "styled-components";

export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[4]}px;
`

export const Info = styled.span`
  font-size:  ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.primary};
`

export const Text = styled.p`
  font-size:  ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
`