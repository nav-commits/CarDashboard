import React from 'react';
import { Menu } from 'lucide-react';
import ProfileMenu from './ProfileMenu';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="h-16 bg-white shadow-sm border-b">
      <div className="h-full flex items-center justify-between px-6">
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="lg:hidden flex-1 text-center font-bold text-blue-600">
          AutoDeal Pro
        </div>
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;