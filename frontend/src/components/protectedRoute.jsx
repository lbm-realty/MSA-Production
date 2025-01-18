import { Navigate } from 'react-router-dom';
import { useAuth } from './authContext';
// import EventsApi from './eventsApi';

// const ProtectedRoute = ({ children }) => {
//     const validateToken = async () => {
//         const accessToken = localStorage.getItem('accessToken');
//         if (!accessToken) return false;
      
//         try {
//           await axios.get('http://localhost:8282/signin', {
//             headers: { Authorization: `Bearer ${accessToken}` },
//           });
//           return true;
//         } catch (error) {
//           console.error('Token validation failed:', error.response?.data?.message || error.message);
//           return false;
//         }
//       };
//     validateToken();
      
//     const accessToken = localStorage.getItem('accessToken');
//     return accessToken ? children : <Navigate to="/signin"></Navigate>
// }

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to='/login' />
}

export default ProtectedRoute;