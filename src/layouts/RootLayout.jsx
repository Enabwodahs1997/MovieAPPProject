import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="min-h-screen text-fuchsia-950">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
