import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1 className="clinic-name">🦷 Bright Smile Dental</h1>
        <p className="tagline">Your Trusted Ottawa Dentist</p>
      </header>

      {/* Booking Section */}
      <section className="booking-section">
        <h2>Book Your Appointment Today</h2>
        <p className="subtext">Quick, easy, and convenient</p>
        <div className="button-group">
          <button className="primary-button">New Patient</button>
          <button className="primary-button">Existing Patient</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h3>Our Services</h3>
        <div className="services-list">
          <div className="service-item">
            <div className="icon">🦷</div>
            <p>Cleaning</p>
          </div>
          <div className="service-item">
            <div className="icon">💲</div>
            <p>Filling</p>
          </div>
          <div className="service-item">
            <div className="icon">✨</div>
            <p>Whitening</p>
          </div>
          <div className="service-item">
            <div className="icon">🚨</div>
            <p>Emergency</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
