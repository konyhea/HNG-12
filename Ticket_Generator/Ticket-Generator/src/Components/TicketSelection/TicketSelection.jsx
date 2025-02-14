import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import TicketType from './TicketType/TicketType';
import './TicketSelection.scss';

function TicketSelection() {
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const handleTicketTypeSelect = (type) => {
    setSelectedTicketType(type);
  };

  const handleNumberOfTicketsChange = (event) => {
    setNumberOfTickets(Number(event.target.value));
  };

  const handleNext = () => {
    if (!selectedTicketType) {
      alert('Please select a ticket type.');
      return;
    }
    console.log('Selected Ticket:', selectedTicketType);
    console.log('Number of Tickets:', numberOfTickets);

    navigate("../AttendeeDetails/AttendeeDetails"); // ✅ Ensure the route is correctly set
  };

  return (
    <section className="section-attendee-details">
      <div className="ticket-selection-container">
        <div className="header-selection-container">
          <div className="heading">
            <h4 className="ticket-selection-haeding">Ticket Selection</h4>
            <p className="ticket-selection-step-count">Step 1/3</p>
          </div>
          <div className="ticket-selection-step-counter">
            <span className="ticket-selection-step-counter-inner"></span>
          </div>
        </div>
        <div className="inner-section-container">
          <div className="ticket-selection-theme-box">
            <div className="ticket-selection-title-theme">
              <h3 className="ticket-selection-title">Techember Fest "25</h3>
              <div className="ticket-selection-welcome-tag">
                <p className="welcome-tag">
                  Join us for an unforgettable experience at [Event Name]! Secure your spot now.
                </p>
              </div>
            </div>
            <div className="ticket-selection-venue-time">
              <p className="ticket-selection-event-location">📍 [Event Location]</p>
              <span className="ticket-selection-disappear">| |</span>
              <time className="ticket-selection-date-time">March 15, 2025 | 7:00 PM</time>
            </div>
          </div>
          <span className="divider" role="separator" aria-hidden="true"></span>
          <p className="ticket-selection-type">Select Ticket Type:</p>
          <div className="ticket-selection-type-container">
            <TicketType
              type="Regular Access"
              price="Free"
              amount="20/52"
              isSelected={selectedTicketType === 'Regular Access'}
              onSelect={() => handleTicketTypeSelect('Regular Access')}
            />
            <TicketType
              type="VIP Access"
              price="$50"
              amount="20/52"
              isSelected={selectedTicketType === 'VIP Access'}
              onSelect={() => handleTicketTypeSelect('VIP Access')}
            />
            <TicketType
              type="VVIP Access"
              price="$150"
              amount="20/52"
              isSelected={selectedTicketType === 'VVIP Access'}
              onSelect={() => handleTicketTypeSelect('VVIP Access')}
            />
          </div>
          <label htmlFor="amount" className="ticket-number">
            Number of Tickets
          </label>
          <div className="ticket-number-dropdown">
            <select
              name="amount"
              id="amount"
              value={numberOfTickets}
              onChange={handleNumberOfTicketsChange}
              aria-label="Select number of tickets"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="ticket-next-cancel-button-container">
            <button className="ticket-next-btn" onClick={handleNext}>
              Next
            </button>
            <button className="ticket-cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TicketSelection;
