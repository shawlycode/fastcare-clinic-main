import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import LandingPage from './pages/landingpage/LandingPage';
import Sidebar from './components/sidebar/Sidebar';
import Staff from './pages/sidebarPages/Staff';
import UserAccount from './pages/sidebarPages/UserAccount';
import ResetPassword from './pages/sidebarPages/ResetPassword';
import SubscriptionIndividual from './pages/sidebarPages/SubscriptionIndividual';
import IndividualsAndGroups from './pages/sidebarPages/IndividualsAndGroups';
import { MakePayments, PaymentsConfirmation, ViewPayments } from './pages/sidebarPages/Payments';

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>

      <Routes>

        <Route path="/staff" element={<Staff />} />
        <Route path="/userAccount" element={<UserAccount />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/subscription/individual" element={<SubscriptionIndividual />} />
        <Route path="/subscriptions/individuals/groups" element={<IndividualsAndGroups />} />
        <Route path="/payments/viewPayments" element={<ViewPayments />} />
        <Route path="/payments/paymentsConfirmation" element={<PaymentsConfirmation />} />
        <Route path="/payments/makePayments" element={<MakePayments />} />

        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </>
  );
};

export default App;
