import styled from 'styled-components'

export const Item = styled.li`
  margin: ${p => p.theme.space[4]}px;
  :nth-last-child(-n + 3) {
      margin-bottom: 0;
    }
  > a {
    text-decoration: none;
    color: ${p => p.theme.colors.black};
  }
`

export const Image = styled.img`
  width: ${p => p.theme.sizes.m};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`

export const Title = styled.h3`
  text-transform: uppercase;
  font-size:  ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.heading};
  
`

export const Info = styled.p`
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.secondary};
`