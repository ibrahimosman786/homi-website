import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-16 px-6 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7c53b1b2e_HOMIlogo.png" 
                alt="HOMI Real Estate"
                className="h-12 md:h-16 lg:h-24 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Canada's premier fintech-powered real estate platform connecting global investors to Dubai's most exclusive pre-construction opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About HOMI</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-orange-500 transition-colors">Featured Projects</a></li>
              <li><a href="#insights" className="text-gray-400 hover:text-orange-500 transition-colors">Investment Insights</a></li>
              <li><a href="#consultation" className="text-gray-400 hover:text-orange-500 transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400">info@homirealestate.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400">+1 (647) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400">WhatsApp Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 HOMI Real Estate. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
