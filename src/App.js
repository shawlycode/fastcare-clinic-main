import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import LandingPage from './pages/landingpage/LandingPage';
import Sidebar from './components/sidebar/Sidebar';
import Staff from './pages/sidebarPages/staff/Staff';
import UserAccount from './pages/sidebarPages/UserAccount';
import ResetPassword from './pages/sidebarPages/ResetPassword';
import IndividualSubscription from './pages/sidebarPages/subs/IndividualSubscription';
import IndividualsAndGroups from './pages/sidebarPages/subs/IndividualsAndGroups';
import Dashboard from './pages/sidebarPages/Dashboard';
import {
  MakePayments,
  PaymentsConfirmation,
  ViewPayments,

} from './pages/sidebarPages/payments/Payments';
import { CallSubscribers } from './pages/sidebarPages/customerCare/CareCenter';



export const MainPages = () => (
  <Sidebar>
    <div className='screens-section-container'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='main/userAccount' element={<UserAccount />} />
        <Route path='main/resetPassword' element={<ResetPassword />} />
        <Route
          path='main/subscription/individual'
          element={<IndividualSubscription />}
        />
        <Route
          path='main/subscriptions/individuals/groups'
          element={<IndividualsAndGroups />}
        />
        <Route path='main/payments/viewPayments' element={<ViewPayments />} />
        <Route path='main/payments/paymentsConfirmation' element={<PaymentsConfirmation />} />
        <Route path='main/payments/makePayments' element={<MakePayments />} />
        <Route path='main/customer/care' element={<CallSubscribers />} />

      </Routes>
    </div>
  </Sidebar>
);

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/main/*' element={<MainPages />} />
      </Routes>
    </div>
  );
};

export default App;