import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PassengerDashboardPage from '../pages/PassengerDashboardPage'
import AdminDashboardPage from '../pages/AdminDashboardPage'
import PassengerLayout from '../layouts/PassengerLayout'
import AdminLayout from '../layouts/AdminLayout'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PassengerLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={<PassengerDashboardPage />}
          />
        </Route>

        <Route element={<AdminLayout />}>
          <Route
            path="/admin"
            element={<AdminDashboardPage />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter