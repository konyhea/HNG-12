import { Route, Routes } from "react-router-dom";

import "./App.scss";
import AttendeeDetails from "./Components/AttendeeDetails/AttendeeDetails";
import Ready from "./Components/Ready/Ready";
import TicketSelection from "./Components/TicketSelection/TicketSelection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TicketSelection />} />
      <Route path="/AttendeeDetails" element={<AttendeeDetails />} />
      <Route path="/Ready" element={<Ready />} />
    </Routes>
  );
}

export default App;
