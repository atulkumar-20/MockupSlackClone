
import { useAuth } from '../AuthContext';

export const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="px-4 md:px-12 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src="https://www.shutterstock.com/image-vector/slack-technologies-logo-editorial-vector-260nw-2335233143.jpg" 
          alt="Dashboard Welcome" 
          className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to Slack, {currentUser?.displayName || currentUser?.email}
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Transform the way you work with one place for everyone and everything you need to get stuff done.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Create Channels</h3>
            <p className="text-gray-600">Organize your work in dedicated spaces</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Invite Team</h3>
            <p className="text-gray-600">Collaborate with your colleagues</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Start Messaging</h3>
            <p className="text-gray-600">Begin conversations and share files</p>
          </div>
        </div>
      </div>
    </div>
  );
};
