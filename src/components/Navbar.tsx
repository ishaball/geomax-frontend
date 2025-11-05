import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "./ProfileDropdown"; // ✅ Import your dropdown
import { Link } from "react-router-dom";
import logoImage from "@/assets/IMG-20251101-WA0015 (1).jpg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#organisation", label: "Organisation" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
    { href: "/reviews", label: "Reviews" }, 
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-white/95"

      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo and Clerk profile dropdown */}
          <ProfileDropdown />

          {/* ✅ Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                   className="text-gray-800 hover:text-blue-600 transition-colors font-medium"

              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ✅ Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-blue-600"/> : (<Menu className="h-6 w-6 text-blue-600" />)}
          </Button>
        </div>

        {/* ✅ Mobile Menu */}
        {isMenuOpen && (
                  <div className="lg:hidden pb-4 animate-in slide-in-from-top-2 bg-white shadow-lg rounded-b-2xl border-t border-gray-200">

            <div className="flex flex-col space-y-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 hover:text-blue-600 transition-colors font-medium px-2"

                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;