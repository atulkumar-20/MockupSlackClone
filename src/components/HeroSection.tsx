import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import { useAuth } from '../AuthContext';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Successfully signed in:', result.user.email);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="px-4 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center">
      {currentUser ? (
        // Authenticated user view
        <>
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Welcome to Slack" 
              className="w-full mb-8 rounded-lg shadow-lg"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Slack is where the future works
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Transform the way you work with one place for everyone and everything you need to get stuff done.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://slack.design/wp-content/uploads/sites/8/2023/10/13.png" 
              alt="Slack Interface" 
              className="w-full rounded-lg shadow-lg" 
            />
          </div>
        </>
      ) : (
        // Non-authenticated user view
        <>
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Slack is where the future works
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Transform the way you work with one place for everyone and everything you need to get stuff done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/signup" 
                className="bg-purple-800 hover:bg-purple-900 text-white font-medium py-3 px-6 rounded text-center"
              >
                TRY FOR FREE
              </Link>
              <button 
                onClick={handleGoogleSignIn}
                className="bg-white border hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8 12.2l-8.8-6.8v13.5l8.8-6.7z" fill="#EA4335"/>
                  <path d="M12 18.9V5.4l-8.8 6.8L12 18.9z" fill="#FBBC05"/>
                  <path d="M3.2 12.2l8.8 6.7V5.4l-8.8 6.8z" fill="#4285F4"/>
                  <path d="M12 18.9l8.8-6.7-8.8-6.8v13.5z" fill="#34A853"/>
                </svg>
                SIGN UP WITH GOOGLE
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://slack.design/wp-content/uploads/sites/8/2023/10/13.png" 
              alt="Slack Interface" 
              className="w-full rounded-lg shadow-lg" 
            />
          </div>
        </>
      )}
    </div>
  );
};
