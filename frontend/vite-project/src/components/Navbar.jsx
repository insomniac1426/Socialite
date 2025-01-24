import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, Bell, HelpCircle } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80 shadow-md"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src="/lottie/chat.json"
                  style={{ height: "36px", width: "36px" }}
                />
              </div>
              <h1 className="text-lg font-bold">SOCIALITE</h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            {/* Messages Button */}
            <Link
              to={"/messages"}
              className="btn btn-sm gap-2 hover:bg-primary/10 transition-all relative group"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="hidden sm:inline">Messages</span>
              
            </Link>

            {/* Notifications Button */}
            <button
              className="btn btn-sm gap-2 hover:bg-primary/10 transition-all relative group"
            >
              <Bell className="w-5 h-5" />
              <span className="hidden sm:inline">Notifications</span>
             
            </button>

            {/* Settings */}
            <Link
              to={"/settings"}
              className="btn btn-sm gap-2 hover:bg-primary/10 transition-all"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                {/* Profile Dropdown */}
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-sm gap-2">
                    <User className="size-5" />
                    <span className="hidden sm:inline">Profile</span>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/profile">
                        <User className="w-4 h-4" />
                        View Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/help">
                        <HelpCircle className="w-4 h-4" />
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <button onClick={logout}>
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
