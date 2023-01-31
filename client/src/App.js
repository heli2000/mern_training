import { LoginForm } from "./Components/User/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Components/Includes/Header/Menu";
import { UserLoginProvider } from "./Components/Provider/UserLoginProvider";
import { Logout } from "./Components/User/Logout";
import { Homepage } from "./Components/HomePage/Homepage";
import { Includes } from "./Components/Includes/Footer/Includes";

function App() {
  return (
    <UserLoginProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Includes />}>
            <Route path="/" element={<Homepage />} />
          </Route>
          <Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserLoginProvider>
  );
}

export default App;
