import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { SiApple, SiGoogleplay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Logo & App Buttons */}
        <div className="space-y-4">
          <div className="w-28">
            <img
              src="/assets/Glowa-logo.svg"
              alt="Glowa logo"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex space-x-3">
            <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 hover:shadow">
              <SiApple className="text-xl" /> <span>Get the app</span>
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 hover:shadow">
              <SiGoogleplay className="text-xl" />
            </button>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About Glowa</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Help and support</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

        {/* For Business */}
        <div>
          <h3 className="font-semibold mb-3">For business</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">For partners</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of service</a></li>
            <li><a href="#" className="hover:underline">Terms of use</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Find us on social</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="flex items-center gap-2 hover:underline"><FaFacebook /> Facebook</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:underline"><FaTwitter /> Twitter</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:underline"><FaLinkedin /> LinkedIn</a></li>
            <li><a href="#" className="flex items-center gap-2 hover:underline"><FaInstagram /> Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-8 py-4 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex items-center space-x-2 cursor-pointer hover:text-purple-600">
          <FaGlobe />
          <span>English</span>
        </div>
        <p className="mt-2 md:mt-0">© 2025 GetGlowa.com Pty Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
