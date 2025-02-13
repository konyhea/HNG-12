// import './TicketSelection.scss'
import TicketType from './TicketType/TicketType'

function TicketSelection () {

  return (
    <>
        <section className="section-attendee-details">
        <div className="ticket-selection-container">
            <div className="header-selection-container">
            <h4 className="ticket-selection-haeding">Ticket Selection</h4>
            <p className="ticket-selection-step-count">Step 1/3</p>
            <div className="ticket-selection-step-counter">
                <span className="ticket-selection-step-counter-inner"></span>
            </div>
            </div>
            <div className="ticket-selection-theme-box">
                <div className="ticket-selection-title-theme">
                <h3 className="ticket-selection-title">Techember Fest "25</h3>
                <div className="ticket-selection-welcome-tag">
                Join us for an unforgettable experience at [Event Name]! Secure your spot now.
                </div>
                </div>
                <div className="ticket-selection-venue-time">
                <p className="ticket-selection-event-location">
                📍 [Event Location]
                </p>
                <span className="ticket-selection-disappear">
                | |
                </span>
                <time className="ticket-selection-date-time">
                March 15, 2025 | 7:00 PM
                </time>
                </div>
            </div>
            <span className="divider"></span>
            <p className="ticket-selection-type">Select Ticket Type:</p>
            <div className="ticket-selection-type-container">
                <TicketType type="Regular Access"  price="Free" amount="20 left!" />
                <TicketType type="VIP Access "  price="$50" amount="20 left!" />
                <TicketType type="VVIP Access"  price="$150" amount="20 left!" />
            </div>
            <label for="amount" className="ticket-number"> Number of Tickets</label>
            <div className="ticket-number-dropdown">
                <select name="amount" id="amount">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <div className="ticket-next-cancel-button-container">
                <div className="next-cancel-button">
                    <button className="ticket-next-btn">Next</button>
                    <button className="ticket-cancel-btn">Cancel</button>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TicketSelection
