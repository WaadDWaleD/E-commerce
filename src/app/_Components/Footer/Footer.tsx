'use client';
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm">
            We provide the best products for your daily needs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Categories</a></li>
            <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-green-400 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-green-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-green-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-green-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} Waad Waled. All rights reserved.
      </div>
    </footer>
  );
}
