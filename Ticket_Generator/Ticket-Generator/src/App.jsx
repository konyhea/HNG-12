import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import "./App.scss";
import AttendeeDetails from "./Components/AttendeeDetails/AttendeeDetails";
import Ready from "./Components/Ready/Ready";
import TicketSelection from "./Components/TicketSelection/TicketSelection";
import Layout from "./Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<TicketSelection />} />
      <Route path="AttendeeDetails" element={<AttendeeDetails />} />
      <Route path="Ready" element={<Ready />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
