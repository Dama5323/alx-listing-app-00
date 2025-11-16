import React from 'react';

const Header: React.FC = () => {
  return (
  <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            <span className="text-xl font-bold text-gray-800">LuxuryStays</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex