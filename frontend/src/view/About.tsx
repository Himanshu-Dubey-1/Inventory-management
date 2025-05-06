const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          About Our Inventory Management System
        </h1>
        <p className="text-lg text-gray-900">
          Empowering businesses with seamless inventory control, insightful
          analytics, and efficient operations.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/illustration2.png"
          alt="Inventory Management"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
          <p className="text-gray-700 ">
            We provide a smart inventory tracking platform that helps small to
            large businesses manage their products, monitor stock levels in
            real-time, and generate powerful reports.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Real-time stock tracking</li>
            <li>Advanced analytics and reporting</li>
            <li>Low and out-of-stock alerts</li>
            <li>Multi-user access & roles</li>
            <li>Cloud-based & secure</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-100  p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 ">
          Our mission is to streamline inventory processes and reduce
          operational chaos. We aim to bring automation and insights to
          inventory handling so businesses can focus more on growth and less on
          logistics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["Alice", "Bob", "Charlie"].map((name, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded shadow text-center">
              <img
                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                alt={name}
                className="w-24 h-24 rounded-full mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-gray-500 ">{`Role: ${
                name === "Alice"
                  ? "Product Manager"
                  : name === "Bob"
                  ? "Developer"
                  : "UX Designer"
              }`}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
