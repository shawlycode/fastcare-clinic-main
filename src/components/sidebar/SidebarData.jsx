import { AiFillDashboard } from 'react-icons/ai';
import { FaUserDoctor, FaChartPie } from 'react-icons/fa6';
import { MdOutlineArrowDropDown, MdPayment } from 'react-icons/md';
import { IoMdArrowDropup } from 'react-icons/io';
import { FaCcMastercard } from 'react-icons/fa';
import { FaUserTie, FaUserCog } from 'react-icons/fa';
import { TbPasswordUser } from 'react-icons/tb';
import { IoGift } from 'react-icons/io5';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BsCashCoin } from 'react-icons/bs';
import { LuLineChart } from 'react-icons/lu';
import { FaUsersViewfinder } from 'react-icons/fa6';


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/main/dashboard',
    icon: <AiFillDashboard />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
  },
  {
    title: 'Staff & Users ',
    icon: <FaUserDoctor />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,

    subNav: [
      {
        title: 'Staff',
        path: '/main/staff',
        icon: <FaUserTie />,
      },
      {
        title: 'User Account',
        path: 'main/userAccount',
        icon: <FaUserCog />,
      },
      {
        title: 'Reset Password',
        path: 'main/resetPassword',
        icon: <TbPasswordUser />,
      },
    ],
  },
  {
    title: 'Subscription',
    icon: <IoGift />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
    subNav: [
      {
        title: 'Individuals Subscriptions',
        path: 'main/subscription/individual',
        icon: <FaCcMastercard />,
        cName: 'sub-nav',
      },
      {
        title: 'Individuals & Groups',
        path: 'main/subscriptions/individuals/groups',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
    ],
  },

  {
    title: 'Payments',
    icon: <MdPayment />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,

    subNav: [
      {
        title: 'View Payments',
        path: 'main/payments/viewPayments',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Make Payments',
        path: 'main/payments/makePayments',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Payments Confirmation',
        path: 'main/payments/paymentsConfirmation',
        // icon: <IoIcons.IoIosPaper />
      },
    ],
  },
  {
    title: 'Customer Care Center',
    path: '',
    icon: <RiCustomerService2Fill />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,

    subNav: [
      {
        title: 'Call Subscribers',
        path: 'main/customer/care',

      },
    ],
  },
  {
    title: 'Auto-Debit OPS',
    path: '/autodebits',
    icon: <BsCashCoin />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
    subNav: [
      {
        title: 'Check Mandate Details',
        path: 'main/autodebits/mandate',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'UnMandated Subscribers',
        path: 'main/autodebits/unMandatedSubs',
        // icon: <IoIcons.IoIosPaper />
      },
    ],
  },
  {
    title: 'Reports & Analysis',
    path: 'main/reports/analysis',
    icon: <LuLineChart />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
    subNav: [
      {
        title: 'Subscribers View',
        path: 'main/subscribersView',
        icon: <FaUsersViewfinder />,
      },
      {
        title: 'Facility Performance',
        path: 'main/reports/facilityPerformance',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Staff Collection Performance',
        path: 'main/reports/staffPerformance',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Agents Commission List',
        path: 'main/reports/agentsCommissionList',
        // icon: <IoIcons.IoIosPaper />
      },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <LuLineChart />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
    subNav: [
      {
        title: 'Facility Setup',
        path: 'main/setting/facilitySetup',
        icon: <FaUsersViewfinder />,
      },
      {
        title: 'Facility Performance',
        path: 'main/setting/facilityPerformance',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Package Setup',
        path: 'main/setting/packageSetup',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Call Comment Category',
        path: '/main/settings/callComments',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Groups & Associations',
        path: 'main/setting/groupsAssociations',
        // icon: <IoIcons.IoIosPaper />
      },
    ],
  },
  {
    title: 'Charts',
    path: '/main/charts',
    icon: <FaChartPie />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
  },

];
