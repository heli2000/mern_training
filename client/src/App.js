import { LoginForm } from "./Components/User/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLoginProvider } from "./Components/Provider/UserLoginProvider";
import { Logout } from "./Components/User/Logout";
import { Homepage } from "./Components/HomePage/Homepage";
import { Includes } from "./Components/Includes/Footer/Includes";
import { RegistrationForm } from "./Components/User/RegistrationForm";
import { ListUser } from "./Components/User/ListUser";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { PageNotFound } from "./Components/PageNotFound";
import { AccessDenied } from "./Components/AccessDenied";

function App() {
  return (
    <UserLoginProvider>
      <BrowserRouter>
        <Routes>
        <Route path='*' element={<PageNotFound />} />
          <Route element={<ProtectedRoute/>}>
            <Route element={<Includes />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/user-list" element={<ListUser />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Route>
          <Route>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/403" element={<AccessDenied/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserLoginProvider>
  );
}

export default App;
