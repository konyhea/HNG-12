import PropTypes from "prop-types";
import './TicketType.scss';

function TicketType(props) {
    return (
        <div className="ticket-type-container">
            <div className="ticket-container">
               <div className="ticket-type-content">
                <div className="ticket-price-content container-width">
                    <p className="ticket-price-text">
                        {props.price}
                    </p>
                </div>
                <div className="selection-type">
                <div className="ticket-type container-width">
                    <p className="ticket-type-text">
                        {props.type}
                    </p>
                </div>
                <div className="ticket-amount-left container-width">
                    <p className="ticket-amount-left">
                        {props.amount}
                    </p>
                </div>
                </div>
               </div>
            </div>
        </div>
    );
}

// ✅ Corrected PropTypes definition
TicketType.propTypes = {
    type: PropTypes.string,  // If it's a text (e.g., "VIP", "Regular"), change to string
    price: PropTypes.number,
    amount: PropTypes.number
};

export default TicketType;
