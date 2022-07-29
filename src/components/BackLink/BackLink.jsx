import { TbArrowLeft } from "react-icons/tb";
import { StyledLink } from "./BackLink.styled";


const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <TbArrowLeft size="18" />
      {children}
    </StyledLink>
  );
};

export default BackLink;