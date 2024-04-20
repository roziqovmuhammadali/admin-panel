import { useState } from "react";
import LoginForm from "./LoginPages/LoginForm";
import { Route, Routes } from "react-router-dom";
import NotFound from "./LoginPages/NotFound";
import Dashboard from "./Dashbord";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route exact path="/" element={<LoginForm />} />
      <Route exact path="*" element={<NotFound />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
