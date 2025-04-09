import { useEffect } from "react";

const HackathonClosed = () => {
  useEffect(() => {
    // Optional: You can log or fetch something when this page is visited
    // Example:
    // api.post('/log-page-visit', { page: 'registration-closed' })
    //   .then(response => console.log("Logged:", response.data))
    //   .catch(error => console.error("Log error:", error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          🚫 Registration Closed
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          We're sorry! Registrations for <strong> Z-HACK 2025</strong> are
          currently closed and expected to be held later this year, with the
          dates to be decided at a later time.
        </p>
        <p className="text-gray-600 text-base md:text-lg">
          Please stay tuned for further announcements or updates.We apologize
          for the inconvenience and thank you sincerely for your interest.
        </p>
        <p className="mt-6 text-sm text-gray-500 italic">— Team Z-HACK</p>
      </div>
    </div>
  );
};

export default HackathonClosed;
