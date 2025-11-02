import { useState, useRef, useEffect } from "react";
import { Wifi, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useUser();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Header Logo + Toggle */}
      <div
        className="flex items-center space-x-3 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
          <Wifi className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold text-foreground hidden sm:block">
          GEOMAX
        </span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white border rounded-xl shadow-2xl p-5 z-50">
          {/* Title */}
          <div className="flex items-center justify-between border-b pb-3">
            <h4 className="font-semibold text-gray-800">Account Details</h4>
            <UserButton afterSignOutUrl="/" />
          </div>

          {/* Greeting */}
          <div className="mt-4 mb-3 text-sm font-medium text-gray-600">
            {user ? `Hi, ${user.firstName || "User"} 👋` : "Welcome!"}
          </div>

          {/* Info */}
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Akola, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>08488845694</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>info@geomaxbroadband.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Mon–Sun: 9:00 AM – 6:00 PM</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <Button variant="outline" size="sm" className="flex-1">
              Dashboard
            </Button>
            <Button size="sm" className="flex-1">
              Support
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;