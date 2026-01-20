"use client";

import { useState } from "react";
import { FaApple, FaGooglePlay, FaSearch, FaSpinner } from "react-icons/fa";

interface ProductNotFoundUIProps {
  message?: string;
  description?: string;
}

export default function ProductNotFoundUI({
  message = "No results found!",
  description = "Unfortunately we couldn't find any product.",
}: ProductNotFoundUIProps) {
  const [email, setEmail] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreePrivacy || !agreeTerms) {
      alert(
        "Please agree to the Privacy Policy and Legal Terms before subscribing."
      );
      return;
    }

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1500);
  };

  const handleGoToHomepage = () => {
    // In a real app: navigate('/');
    window.location.href = "/";
  };

  const handleAppDownload = (store: string) => {
    alert(`Redirecting to ${store} to download the GanaExpress app...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Brand Logo */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
            GanaExpress
          </span>
        </h1>
      </div>

      {/* No Results Message */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-md w-full text-center mb-10">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <FaSearch className="text-red-500 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{message}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Go to Homepage Button */}
        <button
          onClick={handleGoToHomepage}
          className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition duration-300"
        >
          Go to homepage
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-md w-full mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          NEW TO GanaExpress?
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Subscribe to our newsletter to get updates on our latest offers!
        </p>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="privacy"
              checked={agreePrivacy}
              onChange={(e) => setAgreePrivacy(e.target.checked)}
              className="mt-1 accent-red-500"
            />
            <label htmlFor="privacy" className="text-sm text-gray-700">
              I agree to GanaExpress's Privacy and Cookie Policy. You can
              unsubscribe from newsletters at any time.
            </label>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-1 accent-red-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I accept the Legal Terms
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSubscribed}
            className={`w-full py-3 px-4 text-white font-medium rounded-lg transition duration-300 ${
              isSubscribed ? "bg-green-500" : "bg-red-500 hover:bg-red-600"
            } ${isSubmitting || isSubscribed ? "cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <FaSpinner className="animate-spin mr-2" />
                Subscribing...
              </span>
            ) : isSubscribed ? (
              "Subscribed!"
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>

      {/* Download App Section */}
      <div className="text-center max-w-md w-full">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          DOWNLOAD GanaExpress FREE APP
        </h3>
        <p className="text-gray-600 mb-6">Get access to exclusive offers!</p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => handleAppDownload("App Store")}
            className="inline-block bg-black text-white py-3 px-6 rounded-lg hover:scale-105 transition-transform"
          >
            <div className="flex items-center">
              <FaApple className="text-2xl mr-3" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleAppDownload("Google Play")}
            className="inline-block bg-black text-white py-3 px-6 rounded-lg hover:scale-105 transition-transform"
          >
            <div className="flex items-center">
              <FaGooglePlay className="text-xl mr-3" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-10 w-full">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2023 GanaExpress. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Help Center
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
