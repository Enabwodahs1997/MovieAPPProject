import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-amber-900">404 - Page Not Found</h2>
      <p className="mt-2 text-amber-800">The page you requested does not exist.</p>
      <Link className="mt-4 inline-block font-medium text-amber-900 underline" to="/">
        Go back home
      </Link>
    </section>
  )
}

export default NotFoundPage
