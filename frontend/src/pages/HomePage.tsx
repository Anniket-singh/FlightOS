import { useEffect, useState } from 'react'
import { checkBackendHealth } from '../services/api'

function HomePage() {
  const [backendStatus, setBackendStatus] = useState('Checking backend...')

  useEffect(() => {
    checkBackendHealth()
      .then((data) => {
        setBackendStatus(data.status)
      })
      .catch(() => {
        setBackendStatus('Backend unavailable')
      })
  }, [])

  return (
    <div className="min-h-[calc(100vh-73px)] flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        ✈️ FlightOS
      </h1>

      <p className="text-lg">
        Resilient Airline Reservation Platform
      </p>

      <p className="font-medium">
        Backend: {backendStatus}
      </p>
    </div>
  )
}

export default HomePage