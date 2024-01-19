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
import { CheckMandateDetails, UnMandatedSubscribers } from './pages/sidebarPages/autodebits/AutoDebits';
import { AgentsCommissionList, FacilityPerformance, StaffCollectionPerformance, SubscribersView } from './pages/sidebarPages/reports&Analysis/ReportsAndAnalysis';
import { CallCommentCategory, FacilitySetup, GroupsAssociations, PackageSetup } from './pages/sidebarPages/settings/Settings';
import { Charts } from './pages/sidebarPages/charts/Charts';



export const MainPages = () => (
  <Sidebar>
    <div className='screens-section-container'>
      <Routes>
        <Route path='main/staff' element={<Staff />} />
        <Route path='main/userAccount' element={<UserAccount />} />
        <Route path='main/resetPassword' element={<ResetPassword />} />
        <Route path='main/subscription/individual' element={<IndividualSubscription />} />
        <Route path='main/subscriptions/individuals/groups' element={<IndividualsAndGroups />} />
        <Route path='main/payments/viewPayments' element={<ViewPayments />} />
        <Route path='main/payments/paymentsConfirmation' element={<PaymentsConfirmation />} />
        <Route path='main/payments/makePayments' element={<MakePayments />} />
        <Route path='main/customer/care' element={<CallSubscribers />} />
        <Route path='main/autodebits/mandate' element={<CheckMandateDetails />} />
        <Route path='main/autodebits/unMandatedSubs' element={<UnMandatedSubscribers />} />
        <Route path='main/reports/facilityPerformance' element={<FacilityPerformance />} />
        <Route path='main/reports/staffPerformance' element={<StaffCollectionPerformance />} />
        <Route path='main/reports/agentsCommissionList' element={<AgentsCommissionList />} />
        <Route path='main/reports/subscribersView' element={<SubscribersView />} />
        <Route path='main/setting/facilitySetup' element={<FacilitySetup />} />
        <Route path='main/setting/facilityPerformance' element={<FacilityPerformance />} />
        <Route path='main/setting/packageSetup' element={<PackageSetup />} />
        <Route path='main/settings/callComments' element={<CallCommentCategory />} />
        <Route path='main/setting/groupsAssociations' element={<GroupsAssociations />} />
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
        <Route path='/*' element={<MainPages />} />
      </Routes>
      <Routes>
        <Route path='/main/dashboard' element={<Dashboard />} />
        <Route path='/main/charts' element={<Charts />} />
      </Routes>
    </div>
  );
};

export default App;