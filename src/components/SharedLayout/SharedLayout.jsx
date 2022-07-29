import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;