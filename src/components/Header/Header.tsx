import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <ul>
        <li>
          <button onClick={() => navigate("/todo")}>Todo</button>
        </li>
        <li>
          <button onClick={() => navigate("/done")}>Done</button>
        </li>
      </ul>
    </Container>
  );
}

export default Header;
