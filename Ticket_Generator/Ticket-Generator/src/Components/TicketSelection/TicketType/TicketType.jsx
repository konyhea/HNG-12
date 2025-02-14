import PropTypes from 'prop-types';
import './TicketType.scss';

function TicketType({ type, price, amount, isSelected, onSelect }) {
  return (
    <div
      className={`ticket-type-container ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      aria-label={`Select ${type} ticket`}
    >
      <div className="ticket-container">
        <div className="ticket-type-content">
          <div className="ticket-price-content container-width">
            <p className="ticket-price-text">{price}</p>
          </div>
          <div className="selection-type">
            <div className="ticket-type container-width">
              <p className="ticket-type-text">{type}</p>
            </div>
            <div className="ticket-amount-left container-width">
              <p className="ticket-amount-left">{amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TicketType.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default TicketType;