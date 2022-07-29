import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.black};
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow:  ${p => p.theme.shadows.button};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.secondary};
  }
`;