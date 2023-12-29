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
        path: '/staff',
        icon: <FaUserTie />,
      },
      {
        title: 'User Account',
        path: '/userAccount',
        icon: <FaUserCog />,
      },
      {
        title: 'Reset Password',
        path: '/resetPassword',
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
        path: '/subscription/individual',
        icon: <FaCcMastercard />,
        cName: 'sub-nav',
      },
      {
        title: 'Individuals & Groups',
        path: '/subscriptions/individuals/groups',
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
        path: '/payments/viewPayments',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Make Payments',
        path: '/payments/makePayments',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Payments Confirmation',
        path: '/payments/paymentsConfirmation',
        // icon: <IoIcons.IoIosPaper />
      },
    ],
  },
  {
    title: 'Customer Care Center',
    path: '/customer/care',
    icon: <RiCustomerService2Fill />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,

    subNav: [
      {
        title: 'Call Subscribers',
        path: '/payments/view/payments',
        // icon: <IoIcons.IoIosPaper />
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
        path: '/autodebits/mandate',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'UnMandated Subscribers',
        path: '/autodebits/unmandated/subs',
        // icon: <IoIcons.IoIosPaper />
      },
    ],
  },
  {
    title: 'Reports & Analysis',
    path: '/reports',
    icon: <LuLineChart />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
    subNav: [
      {
        title: 'Subscribers View',
        path: '/subscribers',
        icon: <FaUsersViewfinder />,
      },
      {
        title: 'Facility Performance',
        path: '/reports/facility/performance',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Staff Collection Performance',
        path: '/reports/facility/performance',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Agents Commission List',
        path: '/reports/facility/performance',
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
        path: '/setting/facility/setup',
        icon: <FaUsersViewfinder />,
      },
      {
        title: 'Facility Performance',
        path: '/reports/facility/performance',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Package Setup',
        path: '/setting/package/setup',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Call Comment Category',
        path: '/settings/call/comments',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Groups & Associations',
        path: '/setting/groups/associations',
        // icon: <IoIcons.IoIosPaper />
      },
    ],
  },
  {
    title: 'Charts',
    path: '/charts',
    icon: <FaChartPie />,
    iconClosed: <MdOutlineArrowDropDown />,
    iconOpened: <IoMdArrowDropup />,
  },
];
