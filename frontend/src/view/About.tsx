const About = () => {
  return (
    <div className=" mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      <p className="text-gray-700 mb-4">
        This is a **modern dashboard application** built using **React (Vite) and TypeScript**. It features a **dynamic sidebar navigation** with sections for Dashboard, Inventory, Users, Products, and an About page. The project integrates **React Router for seamless navigation**, **Context API for state management**, and a combination of **Tailwind CSS and Bootstrap** for styling.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>📌 **Sidebar Navigation** – Collapsible and responsive menu for easy access.</li>
        <li>⚡ **Fast and Lightweight** – Built with Vite for optimized performance.</li>
        <li>🔗 **React Router Integration** – Ensures smooth page transitions.</li>
        <li>🎨 **Modern UI** – Styled with **Tailwind CSS** and **Bootstrap**.</li>
        <li>💾 **State Management** – Uses Context API for managing global state.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Tech Stack</h2>
      <p className="text-gray-700">
        - **Frontend:** React (Vite), TypeScript  
        - **Styling:** Tailwind CSS, Bootstrap  
        - **State Management:** Context API  
        - **Routing:** React Router  
        - **Icons:** React Icons  
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Why This Project?</h2>
      <p className="text-gray-700">
        This project was built to **demonstrate a scalable React architecture**, focusing on **clean code, reusable components, and performance optimization**. It serves as a foundation for admin dashboards, inventory management systems, or similar web applications.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Future Enhancements</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>🔄 **Dark Mode Support**</li>
        <li>📊 **Data Visualization for Dashboard Analytics**</li>
        <li>🛠️ **API Integration for Dynamic Data**</li>
        <li>🔐 **Authentication & Role-Based Access**</li>
      </ul>

      <p className="text-gray-600 mt-6">
        🚀 Feel free to contribute and enhance the project further!
      </p>
    </div>
  );
};

export default About;
