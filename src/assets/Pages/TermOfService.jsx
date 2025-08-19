import { Link } from "react-router-dom"

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between  items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Terms of Service
          </h1>
          <Link className="text-black underline" to="/">
            Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-xl p-6 sm:p-10 space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last Updated: August 19, 2025</p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Usage
            </h2>
            <p>
              You must create an account to use Sync. You are responsible for
              maintaining your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Data Access
            </h2>
            <p>
              Sync uses Google People API only with your explicit permission.
              You may revoke our access at any time through your Google account
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Limitations
            </h2>
            <p>
              Sync is provided “as is” without guarantees of uninterrupted
              availability. We are not liable for data loss caused by external
              factors (Google outages, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Account Termination
            </h2>
            <p>
              You may delete your account and associated data at any time. We
              may suspend accounts found misusing the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Changes
            </h2>
            <p>
              Terms may be updated from time to time. Continued use means
              acceptance of updates.
            </p>
          </section>

          <footer className="pt-6 border-t">
            <p>
              <strong>Contact:</strong>{" "}
              <a
                href="mailto:syncproject.devlancerhub@gmail.com"
                className="text-blue-600 hover:underline"
              >
                syncproject.devlancerhub@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
