import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Register, Error, Landing } from "./pages"
import ProtectedRoute from "./pages/ProtectedRoute";
import { Stats, Profile, AddAllergy, AllAllergy, SharedLayout } from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute>
          <SharedLayout />
        </ProtectedRoute>}>
          <Route index element={<Stats />} />
          <Route path='all-allergy' element={<AllAllergy />} />
          <Route path='add-allergy' element={<AddAllergy />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
