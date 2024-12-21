import React from 'react';

const ProfileMenu: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-600">Welcome, Admin</span>
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
    </div>
  );
};

export default ProfileMenu;