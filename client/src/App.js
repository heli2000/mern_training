import { LoginForm } from "./Components/User/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLoginProvider } from "./Components/Provider/UserLoginProvider";
import { Logout } from "./Components/User/Logout";
import { Homepage } from "./Components/HomePage/Homepage";
import { Includes } from "./Components/Includes/Footer/Includes";
import { RegistrationForm } from "./Components/User/RegistrationForm";
import { ListUser } from "./Components/User/ListUser";

function App() {
  return (
    <UserLoginProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Includes />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/user-list" element={<ListUser />} />
          </Route>
          <Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserLoginProvider>
  );
}

export default App;
