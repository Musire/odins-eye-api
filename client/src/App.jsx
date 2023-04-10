import { AuthProvider } from "./context/authContext"
import { LandingPage, SignupPage, LoginPage } from "./pages"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter >
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <LandingPage />} />
          <Route path="/signup" element={ <SignupPage />} />
          <Route path="/login" element={ <LoginPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}