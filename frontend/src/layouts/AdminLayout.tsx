import { Link, Outlet } from 'react-router'

function AdminLayout() {
  return (
    <div className="min-h-screen">

      <header className="border-b">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">

          <Link to="/admin" className="text-2xl font-bold">
            🛠️ FlightOS Admin
          </Link>

          <div className="flex gap-4">
            <Link to="/admin" className="hover:underline">
              Dashboard
            </Link>

            <Link to="/" className="hover:underline">
              Passenger UI
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

export default AdminLayout