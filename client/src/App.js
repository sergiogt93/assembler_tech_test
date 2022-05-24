import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/Auth/AuthContext";
import { SignupForm } from "./pages/SignupForm";
import { Home } from "./pages/Home";
import { SigninForm } from "./pages/SigninForm";
import { GifPage } from "./pages/GifPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/signin" element={<SigninForm />} />
        <Route exact path="/gifForm" element={<GifPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
