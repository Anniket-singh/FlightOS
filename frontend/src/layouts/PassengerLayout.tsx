import { Link, Outlet } from 'react-router'

function PassengerLayout() {
  return (
    <div className="min-h-screen">

      <header className="border-b">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">

          <Link to="/" className="text-2xl font-bold">
            ✈️ FlightOS
          </Link>

          <div className="flex gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>

            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>

            <Link to="/login" className="hover:underline">
              Login
            </Link>

            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </div>

        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>

    </div>
  )
}

export default PassengerLayout