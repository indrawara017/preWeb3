import { useNavigate } from "react-router-dom";
// function component
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li>
          <button onClick={() => navigate("/home")}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("/")}>About</button>
        </li>
        <li>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </li>
      </ul>
    </div>
  );
}
