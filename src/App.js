import React, { useState } from 'react';

const BrightSmileDentalApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userType, setUserType] = useState('');
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  // Dental procedures data
  const procedures = [
    {
      id: 1,
      name: 'Basic Cleaning',
      description: 'Routine dental cleaning and checkup',
      duration: '45 minutes',
      price: '$120',
      icon: '🦷',
      category: 'cleaning'
    },
    {
      id: 2,
      name: 'Deep Cleaning',
      description: 'Thorough cleaning for gum health',
      duration: '90 minutes',
      price: '$280',
      icon: '🧽',
      category: 'cleaning'
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      description: 'Professional whitening treatment',
      duration: '60 minutes',
      price: '$299',
      icon: '✨',
      category: 'cosmetic'
    },
    {
      id: 4,
      name: 'Dental Filling',
      description: 'Tooth restoration and repair',
      duration: '30 minutes',
      price: '$180',
      icon: '⚕️',
      category: 'restorative'
    },
    {
      id: 5,
      name: 'Emergency Care',
      description: 'Urgent dental treatment',
      duration: 'Variable',
      price: '$200+',
      icon: '🚨',
      category: 'emergency'
    },
    {
      id: 6,
      name: 'Consultation',
      description: 'Initial examination and treatment planning',
      duration: '30 minutes',
      price: '$85',
      icon: '👨‍⚕️',
      category: 'consultation'
    }
  ];

  const staff = [
    { name: 'Dr. Smith', role: 'General Dentist', available: true },
    { name: 'Dr. Johnson', role: 'Cosmetic Specialist', available: true },
    { name: 'Mary Wilson', role: 'Dental Hygienist', available: true }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  // Shared Header Component
  const Header = ({ showBackButton = false, onBackClick = null }) => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">🦷</span>
          <div>
            <h1 className="text-2xl font-bold text-blue-600">Bright Smile Dental</h1>
            <p className="text-sm text-gray-600">Your Trusted Ottawa Dentist</p>
          </div>
        </div>
        {showBackButton && (
          <button 
            onClick={onBackClick}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <span>←</span>
            <span>Back</span>
          </button>
        )}
      </div>
    </header>
  );

  // Main Homepage - Dual Path Design
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to Bright Smile Dental
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional dental care in Ottawa. Choose how you'd like to book your appointment.
          </p>
          
          {/* Dual Path Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Patrik's Path - Quick Booking */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl transition-all">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Quick Booking</h3>
              <p className="text-gray-600 mb-6">
                Fast, efficient appointment booking for busy professionals. Book in under 3 minutes.
              </p>
              <div className="space-y-3">
                <button 
                  onClick={() => {
                    setUserType('existing');
                    setCurrentPage('quick-booking');
                  }}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Existing Patient - Quick Book
                </button>
                <button 
                  onClick={() => {
                    setUserType('new');
                    setCurrentPage('quick-booking');
                  }}
                  className="w-full bg-blue-100 text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-200 transition-colors"
                >
                  New Patient - Quick Book
                </button>
              </div>
            </div>

            {/* Emily's Path - Browse & Learn */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-rose-300 hover:shadow-xl transition-all">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-rose-400 mb-4">Browse Services</h3>
              <p className="text-gray-600 mb-6">
                Explore our dental procedures with clear descriptions and pricing. Take your time to learn.
              </p>
              <div className="space-y-3">
                <button 
                  onClick={() => setCurrentPage('browse-procedures')}
                  className="w-full bg-rose-300 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-400 transition-colors"
                >
                  Browse Procedures & Pricing
                </button>
                <button 
                  onClick={() => setCurrentPage('browse-procedures')}
                  className="w-full bg-rose-50 text-rose-400 py-3 px-6 rounded-lg font-semibold hover:bg-rose-100 transition-colors"
                >
                  Learn About Our Services
                </button>
              </div>
            </div>
          </div>

          {/* Quick Service Icons */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Our Popular Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {procedures.map((proc) => (
                <div 
                  key={proc.id}
                  onClick={() => {
                    setSelectedProcedure(proc);
                    setCurrentPage('browse-procedures');
                  }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="text-3xl mb-2">{proc.icon}</div>
                  <h4 className="font-semibold text-gray-800 text-sm">{proc.name}</h4>
                  <p className="text-green-600 font-bold text-sm">{proc.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2">📞 Call Us</h4>
              <p>(613) 555-0123</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📍 Visit Us</h4>
              <p>123 Bank Street<br />Ottawa, ON K1A 0A1</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📧 Email Us</h4>
              <p>info@brightsmile.ca</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">Designed by Patrik Legare & Partner</p>
          </div>
        </div>
      </section>
    </div>
  );

  // Patrik's Quick Booking Flow
  const QuickBookingPage = () => (
    <div className="min-h-screen bg-gray-50">
      <Header showBackButton onBackClick={() => setCurrentPage('home')} />
      
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Quick Appointment Booking</h2>
          <p className="text-gray-600 mt-2">Book your appointment in 3 simple steps</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedService ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>1</div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedStaff ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>2</div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedTime ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>3</div>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">1. Select Service</h3>
          <select 
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose a service...</option>
            {procedures.map((proc) => (
              <option key={proc.id} value={proc.name}>{proc.name} - {proc.price}</option>
            ))}
          </select>
        </div>

        {/* Step 2: Staff Selection */}
        {selectedService && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">2. Select Provider</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {staff.map((member, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedStaff(member.name)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedStaff === member.name 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="font-semibold">{member.name}</div>
                  <div className="text-sm text-gray-600">{member.role}</div>
                  <div className="text-xs text-green-600 mt-1">✓ Available</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Time Selection */}
        {selectedStaff && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">3. Select Date & Time</h3>
            
            {/* Simple Date Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date:</label>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Times:</label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((time, index) => (
                    <button 
                      key={index}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border-2 transition-colors ${
                        selectedTime === time 
                          ? 'border-blue-500 bg-blue-50 text-blue-600' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Book Button */}
        {selectedTime && (
          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('confirmation')}
              className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // Emily's Browse Procedures Page
  const BrowseProceduresPage = () => (
    <div className="min-h-screen" style={{backgroundColor: '#fefbf7'}}>
      <Header showBackButton onBackClick={() => setCurrentPage('home')} />
      
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">PROCEDURES</h1>
        </div>

        {/* Clean procedure list matching Emily's mockups */}
        <div className="space-y-8">
          
          {/* Cleaning */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">CLEANING</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Professional teeth cleaning to remove plaque and tartar.
                </p>
              </div>
              <div className="text-right ml-8">
                <div className="text-xl font-semibold text-gray-800 mb-4">Starting at $100</div>
                <button 
                  onClick={() => {
                    setSelectedService('Basic Cleaning');
                    setSelectedProcedure(procedures.find(p => p.name === 'Basic Cleaning'));
                    setCurrentPage('emily-booking');
                  }}
                  className="px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-colors"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>

          {/* Root Canal */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">ROOT CANAL</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Treatment for infected or damaged tooth pulp.
                </p>
              </div>
              <div className="text-right ml-8">
                <div className="text-xl font-semibold text-gray-800 mb-4">Starting at $500</div>
                <button 
                  onClick={() => {
                    setSelectedService('Root Canal');
                    setSelectedProcedure({name: 'Root Canal', price: '$500', icon: '⚕️'});
                    setCurrentPage('emily-booking');
                  }}
                  className="px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-colors"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>

          {/* Whitening */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">WHITENING</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Cosmetic treatment to brighten and whiten teeth.
                </p>
              </div>
              <div className="text-right ml-8">
                <div className="text-xl font-semibold text-gray-800 mb-4">Starting at $400</div>
                <button 
                  onClick={() => {
                    setSelectedService('Teeth Whitening');
                    setSelectedProcedure(procedures.find(p => p.name === 'Teeth Whitening'));
                    setCurrentPage('emily-booking');
                  }}
                  className="px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-colors"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>

          {/* Implants */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">IMPLANTS</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Artificial tooth roots for replacing missing teeth.
                </p>
              </div>
              <div className="text-right ml-8">
                <div className="text-xl font-semibold text-gray-800 mb-4">Starting at $1000</div>
                <button 
                  onClick={() => {
                    setSelectedService('Dental Implant');
                    setSelectedProcedure({name: 'Dental Implant', price: '$1000', icon: '🦷'});
                    setCurrentPage('emily-booking');
                  }}
                  className="px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-colors"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Emily's Simple Booking Page  
  const EmilyBookingPage = () => (
    <div className="min-h-screen" style={{backgroundColor: '#fefbf7'}}>
      <Header showBackButton onBackClick={() => setCurrentPage('browse-procedures')} />
      
      <div className="max-w-3xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">CLEANING</h1>
          <p className="text-xl text-gray-600 mb-8">Professional cleaning to maintain oral hygiene</p>
          
          {/* Simple form matching mockup */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md mx-auto">
            
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-left text-lg font-medium text-gray-700 mb-3">Name</label>
              <input 
                type="text" 
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-gray-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Patient ID */}
            <div className="mb-6">
              <label className="block text-left text-lg font-medium text-gray-700 mb-3">Dental patient ID number</label>
              <input 
                type="text" 
                className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-gray-500 focus:outline-none"
                placeholder="Enter patient ID"
              />
            </div>

            {/* Date Section */}
            <div className="mb-8">
              <label className="block text-left text-lg font-medium text-gray-700 mb-3">Date</label>
              
              {/* Calendar Widget - Simple Version */}
              <div className="border-2 border-gray-300 rounded-lg p-4">
                <div className="text-center mb-4">
                  <span className="text-lg font-medium">April 2024</span>
                </div>
                
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
                  <div className="font-medium p-2">S</div>
                  <div className="font-medium p-2">M</div>
                  <div className="font-medium p-2">T</div>
                  <div className="font-medium p-2">W</div>
                  <div className="font-medium p-2">T</div>
                  <div className="font-medium p-2">F</div>
                  <div className="font-medium p-2">S</div>
                  
                  {/* Calendar Days */}
                  {[...Array(30)].map((_, i) => {
                    const day = i + 1;
                    const isSelected = day === 15;
                    return (
                      <div 
                        key={i}
                        onClick={() => setSelectedDate(`April ${day}`)}
                        className={`p-2 cursor-pointer rounded ${
                          isSelected 
                            ? 'bg-gray-800 text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Time Slots */}
            <div className="mb-8">
              <div className="grid grid-cols-1 gap-3">
                {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM'].map((time, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedTime(time)}
                    className={`p-4 border-2 rounded-lg text-lg font-medium transition-colors ${
                      selectedTime === time 
                        ? 'border-gray-800 bg-gray-800 text-white' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Request Button */}
            <button 
              onClick={() => setCurrentPage('confirmation')}
              className="w-full bg-gray-800 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              REQUEST APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Confirmation Page (Shared)
  const ConfirmationPage = () => (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-2xl mx-auto p-6 pt-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          
          {/* Success Animation */}
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <span className="text-white text-4xl font-bold">✓</span>
          </div>

          <h2 className="text-3xl font-bold text-green-600 mb-6">Appointment Confirmed!</h2>

          {/* Appointment Details Card */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Your Appointment Details</h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Service:</span>
                <span className="font-semibold text-gray-800">{selectedService}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Date:</span>
                <span className="font-semibold text-gray-800">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Time:</span>
                <span className="font-semibold text-gray-800">{selectedTime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Provider:</span>
                <span className="font-semibold text-gray-800">{selectedStaff}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Location:</span>
                <span className="font-semibold text-gray-800">123 Bank Street, Ottawa</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              📅 Add to Calendar
            </button>
            <button className="w-full bg-rose-300 text-white py-3 rounded-xl font-semibold hover:bg-rose-400 transition-colors">
              📧 Email Confirmation
            </button>
            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors">
              📱 SMS Reminder
            </button>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 rounded-xl p-6 mb-6 text-sm">
            <h4 className="font-semibold text-gray-800 mb-3">Please Remember:</h4>
            <div className="space-y-2 text-gray-600">
              <p>📍 Arrive 15 minutes early for check-in</p>
              <p>🆔 Bring valid ID and insurance card</p>
              <p>🦷 Continue regular oral hygiene routine</p>
              <p>💊 Inform us of any medications you're taking</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                // Reset all state
                setSelectedService('');
                setSelectedStaff('');
                setSelectedDate('');
                setSelectedTime('');
                setSelectedProcedure(null);
                setCurrentPage('home');
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </button>
            <button 
              onClick={() => {
                // Reset booking state but keep user preferences
                setSelectedStaff('');
                setSelectedDate('');
                setSelectedTime('');
                setCurrentPage(userType === 'existing' || userType === 'new' ? 'quick-booking' : 'browse-procedures');
              }}
              className="text-rose-400 hover:text-rose-500 font-medium"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Main App Router
  return (
    <div className="font-sans">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'quick-booking' && <QuickBookingPage />}
      {currentPage === 'browse-procedures' && <BrowseProceduresPage />}
      {currentPage === 'emily-booking' && <EmilyBookingPage />}
      {currentPage === 'confirmation' && <ConfirmationPage />}
    </div>
  );
};

export default BrightSmileDentalApp;
  
