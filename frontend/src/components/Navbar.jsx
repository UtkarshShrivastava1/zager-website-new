import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { admin, logout } = useAuth()

  return (
    <nav className="bg-blue-950 from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Zager Admin
        </Link>
        {admin && (
          <div className="flex items-center space-x-4">
            <span className="text-white">Welcome, {admin.email}</span>
            <button
              onClick={logout}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar


// import { Link } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'

// const Navbar = () => {
//   const { admin, logout } = useAuth()

//   return (
//     <nav className="bg-blue-950 from-blue-600 to-purple-600 p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <img src="/logo.png" alt="Logo" className="h-10 w-10" />
//           <Link to="/" className="text-white text-2xl font-bold">
//             Zager Admin
//           </Link>
//         </div>
//         {admin && (
//           <div className="flex items-center space-x-4">
//             <span className="text-white">Welcome, {admin.email}</span>
//             <button
//               onClick={logout}
//               className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar
