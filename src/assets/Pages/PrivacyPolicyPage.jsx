import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between  items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Privacy Policy
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

          <p>
            Sync respects your privacy. This policy explains how we handle your
            data.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Data We Collect
            </h2>
            <p>
              With your permission, we access your Google contacts using the
              Google People API. We only store your contact information (names,
              phone numbers, and emails) in our secure database.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To display your contacts in your Sync account.</li>
              <li>
                To let you search, export, and access your contacts anytime.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Data Sharing
            </h2>
            <p>
              We do not share your data with third parties. We will never sell
              your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Data Security
            </h2>
            <p>
              Contacts are stored securely and encrypted. You can delete your
              account and synced data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Your Rights
            </h2>
            <p>
              You may revoke access via your Google account settings. You may
              request deletion of all stored data.
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

export default PrivacyPolicy;
