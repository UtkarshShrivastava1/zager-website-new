import {
  FaUserAlt,
  FaBlog,
  FaEdit,
  FaCamera,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const dashboardSections = [
  {
    title: "My Profile",
    description: "Manage your profile and personal details.",
    cards: [
      {
        icon: <FaUserAlt size={40} />,
        title: "Profile Management",
        page: "profile",
      },
    ],
  },
  {
    title: "Features",
    description: "Manage content creation features.",
    cards: [
      {
        icon: <FaBlog size={40} />,
        title: "Add Blogs",
        page: "add-blogs",
      },
      {
        icon: <FaEdit size={40} />,
        title: "View/Edit Blogs",
        page: "edit-blogs",
      },
      {
        icon: <FaCamera size={40} />,
        title: "Add Photos",
        page: "add-photos",
      },
    ],
  },
];

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("My Profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCardClick = (page) => navigate(`/admin/${page}`);
  const handleTabClick = (tab) => setActiveTab(tab);
  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/admin/admin-login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-white p-5 shadow-md ${
          sidebarOpen ? "block" : "hidden"
        } sm:block`}
      >
        <button
          className="text-red-500 flex items-center gap-2"
          onClick={handleLogout}
        >
          <FaSignOutAlt /> Logout
        </button>
        <nav className="mt-5">
          {dashboardSections.map((section, index) => (
            <button
              key={index}
              className={`block w-full p-3 rounded-lg text-left ${
                activeTab === section.title
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleTabClick(section.title)}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
          <button
            className="sm:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>

        {dashboardSections
          .filter((section) => section.title === activeTab)
          .map((section, index) => (
            <div key={index}>
              <h1 className="text-xl font-semibold text-blue-600 !important mb-2">
                {section.title}
              </h1>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {section.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCardClick(card.page)}
                  >
                    <div className="text-blue-500 mb-3">{card.icon}</div>
                    <h5 className="text-lg font-semibold">{card.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </main>
    </div>
  );
};

export default AdminDashboardPage;
