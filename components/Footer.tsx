
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#0b5d3b] to-[#0a8f5b] text-white">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>

          <p className="text-sm leading-relaxed text-green-100">
            NORKA Centre (2nd Floor),<br />
            Near Government Guest House, Thycaud P.O.,<br />
            Thiruvananthapuram – 695014, Kerala, India
          </p>

          <p className="mt-4 text-sm text-green-100">
            info@pravasikerala.org<br />
            +91 471 278 5500
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-white">
            <Twitter className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Instagram className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Facebook className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <Youtube className="w-4 h-4 cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Schemes</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li>Terms And Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/30" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-xs text-green-100">
        <p>
          PRAVASI MISSION KERALA © 2025. All Rights Reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Designed by CDIDP
        </p>
      </div>
    </footer>
  );
}
