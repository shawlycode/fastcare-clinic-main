import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from './pages/login/Login';
import LandingPage from './pages/landingpage/LandingPage';
import Sidebar from './components/sidebar/Sidebar';
import Staff from './pages/sidebarPages/Staff';
import UserAccount from './pages/sidebarPages/UserAccount';
import ResetPassword from './pages/sidebarPages/ResetPassword';
import SubscriptionIndividual from './pages/sidebarPages/SubscriptionIndividual';
import IndividualsAndGroups from './pages/sidebarPages/IndividualsAndGroups';
import { MakePayments, PaymentsConfirmation, ViewPayments } from './pages/sidebarPages/Payments';
import { useState } from 'react';

export const LoggedInRoute = () => (
  <Sidebar>
    <div className='screens-section-container'>
      <Routes>
        <Route path="/staff" element={<Staff />} />
        <Route path="/userAccount" element={<UserAccount />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/subscription/individual" element={<SubscriptionIndividual />} />
        <Route path="/subscriptions/individuals/groups" element={<IndividualsAndGroups />} />
        <Route path="/payments/viewPayments" element={<ViewPayments />} />
        <Route path="/payments/paymentsConfirmation" element={<PaymentsConfirmation />} />
        <Route path="/payments/makePayments" element={<MakePayments />} />
      </Routes>
    </div>
  </Sidebar>
)


const App = () => {
  // const [islogged, setIslogged] = useState(true);

  return (

    <div className="App">
      <LoggedInRoute />
      {/* <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" exact element={<Login />} />

      </Routes> */}



    </div>

  );


};

export default App;
