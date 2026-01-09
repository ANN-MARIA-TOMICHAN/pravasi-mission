import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" pt-16">
      
      {/* Top Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg text-white mb-4">
            Contact
          </h3>

          <p className="text-sm leading-relaxed text-green-200">
            NORKA Centre (2nd Floor),<br />
            Near Government Guest House, Thycaud P.O.,<br />
            Thiruvananthapuram – 695014, Kerala, India
          </p>

          <p className="mt-4 text-sm text-green-200">
            info@pravasikerala.org<br />
            +91 471 278 5500
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Twitter className="w-4 h-4 cursor-pointer hover:text-white" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-white" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-white" />
            <Youtube className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-green-200">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Schemes</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-white mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-green-200">
            <li>Terms And Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="border-t border-green-600" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between text-xs text-green-200">
        <p>
          PRAVASI MISSION KERALA, 2025. All Rights Reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Designed by CDIDP
        </p>
      </div>

    </footer>
  );
}
