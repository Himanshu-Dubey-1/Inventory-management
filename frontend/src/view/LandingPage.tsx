import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const isAuthenticated = document.cookie.includes("uid");

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="font-sans text-gray-800 bg-blue-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-blue-200 sticky top-0 z-50 backdrop-blur-lg">
        <div className="text-3xl font-bold text-blue-900 tracking-wide">
          Invy
        </div>
        {isAuthenticated ? (
          <div>
            <Link to={"/main"}>
              <button className="bg-blue-900 text-white px-5 py-2 rounded-full shadow hover:bg-blue-950 transition">
                Dashboard
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-x-6">
            <Link to="/login">
              <button className="text-blue-900 hover:text-blue-950 font-medium transition">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="bg-blue-900 text-white px-5 py-2 rounded-full shadow hover:bg-blue-950 transition">
                Signup
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-20 bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-200 overflow-hidden">
        <div className="absolute w-64 h-64 bg-blue-300 rounded-full opacity-30 top-0 -left-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-40 h-40 bg-cyan-300 rounded-full opacity-30 bottom-10 -right-10 blur-2xl animate-spin-slow"></div>
        <div className="max-w-xl z-10">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
            Inventory software
            <br />
            <span className="text-blue-800">Your warehouse, your rules</span>
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            It's time to automate warehousing, shipping and purchasing.
          </p>
          <Link to={"/login"}>
          <button className="bg-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-900 transition">
            Get Started Free
          </button></Link>
        </div>
        <div className="mt-12 md:mt-0 z-10">
          <img
            src="/illustration.png"
            alt="Inventory Dashboard"
            className="w-full max-w-md"
          />
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-6 md:px-20 bg-white relative overflow-hidden">
        <div className="absolute w-32 h-32 bg-blue-300 rounded-full opacity-20 top-10 left-10 blur-3xl"></div>
        <div className="absolute w-48 h-48 bg-cyan-400 rounded-full opacity-20 bottom-0 right-0 blur-2xl"></div>
        <h2 className="text-center text-gray-700 text-xl font-semibold mb-8">
          Loved by Industry Leaders
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            "E-Commerce",
            "Food & Beverage",
            "Logistics",
            "Retail",
            "Healthcare",
          ].map((sector, idx) => (
            <div
              key={idx}
              className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium shadow hover:scale-105 transition"
            >
              {sector}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Inventory management easier than ever before
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Full control over all inventory
            </h3>
            <p className="text-gray-600">
              Track every product from warehouse to sale with powerful filters
              and insights.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Streamlined operations
            </h3>
            <p className="text-gray-600">
              Coordinate purchases, movements and fulfillment all from one
              dashboard.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Precise storage processes
            </h3>
            <p className="text-gray-600">
              Use barcodes and smart labels to maintain accuracy across your
              inventory.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Integrates with your favorite tools
        </h2>
        <div className="grid md:grid-cols-4 gap-8 items-center justify-center">
          {["Shopify", "WooCommerce", "QuickBooks", "Zapier"].map(
            (tool, idx) => (
              <div
                key={idx}
                className="bg-blue-100 text-blue-800 text-center py-6 px-4 rounded-xl shadow hover:scale-105 transition"
              >
                <p className="text-lg font-semibold">{tool}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-20 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              q: "Is there a free trial?",
              a: "Yes, you can try all features free for 14 days.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Absolutely. No contracts, cancel whenever you wish.",
            },
            {
              q: "Do you provide customer support?",
              a: "Yes, we offer 24/7 support via chat and email.",
            },
          ].map(({ q, a }, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">{q}</h4>
              <p className="text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-blue-100 to-cyan-100 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What our customers say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/3 border-l-4 border-blue-400">
            <p className="text-gray-700 italic">
              "Invy has revolutionized our stock process. From manual entries to
              seamless automation – a game changer!"
            </p>
            <div className="mt-4 font-semibold text-blue-800">– KoRo</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full md:w-1/3 border-l-4 border-blue-400">
            <p className="text-gray-700 italic">
              "Thanks to Invy, we're able to handle massive order volumes with
              no hassle. Just smooth logistics!"
            </p>
            <div className="mt-4 font-semibold text-blue-800">– yfood</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 bg-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to take control of your inventory?
        </h2>
        <p className="mb-6 text-lg">
          Join 1800+ companies using Invy for smarter inventory management.
        </p>
        <Link to={"/login"}>
        <button className="bg-white text-blue-800 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition">
          Get Started
        </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <h5 className="font-semibold text-white mb-3">Invy</h5>
            <p>Smarter inventory management for modern businesses.</p>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">Company</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">Resources</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3">Stay Connected</h5>
            <p>Subscribe to our newsletter for updates.</p>
            <input
              type="email"
              placeholder="Your email"
              className="mt-3 px-3 py-2 rounded w-full text-black"
            />
            <Link to={"/signup"}>
            <button className="mt-2 bg-blue-600 px-4 py-2 text-white rounded w-full hover:bg-blue-700">
              Subscribe
            </button>
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-400 text-xs mt-10">
          &copy; {new Date().getFullYear()} Invy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
