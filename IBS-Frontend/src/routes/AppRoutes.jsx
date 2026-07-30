import { Routes, Route } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout.jsx';
import AuthPageLayout from '../components/layout/AuthPageLayout.jsx';
import ProtectedRoute from '../components/auth/ProtectedRoute.jsx';

import Home from '../pages/Home.jsx';
import PersonalBanking from '../pages/PersonalBanking.jsx';
import CorporateBanking from '../pages/CorporateBanking.jsx';
import DigitalBanking from '../pages/DigitalBanking.jsx';
import BusinessBanking from '../pages/BusinessBanking.jsx';
import AgriBusiness from '../pages/AgriBusiness.jsx';
import SavingsAccount from '../pages/SavingsAccount.jsx';
import SalaryAccount from '../pages/SalaryAccount.jsx';
import Deposits from '../pages/Deposits.jsx';
import ConsumerLoans from '../pages/ConsumerLoans.jsx';
import CreditCards from '../pages/CreditCards.jsx';
import DebitCards from '../pages/DebitCards.jsx';
import PrepaidCards from '../pages/PrepaidCards.jsx';
import NriBanking from '../pages/NriBanking.jsx';
import IBSRewards from '../pages/IBSRewards.jsx';
import PrivateBanking from '../pages/PrivateBanking.jsx';
import OnlineLoanPayments from '../pages/OnlineLoanPayments.jsx';
import CreditCardBillPayment from '../pages/CreditCardBillPayment.jsx';
import InsuranceClaim from '../pages/InsuranceClaim.jsx';
import ComplaintForm from '../pages/ComplaintForm.jsx';
import TrackRequest from '../pages/TrackRequest.jsx';
import IBSConnect from '../pages/IBSConnect.jsx';
import OpenAccount from '../pages/OpenAccount.jsx';
import About from '../pages/About.jsx';
import Careers from '../pages/Careers.jsx';
import Contact from '../pages/Contact.jsx';
import Support from '../pages/Support.jsx';
import CustomerLogin from '../pages/CustomerLogin.jsx';
import BusinessLogin from '../pages/BusinessLogin.jsx';
import Register from '../pages/Register.jsx';
import StaffLogin from '../pages/StaffLogin.jsx';
import AdminLogin from '../pages/AdminLogin.jsx';
import NotFound from '../pages/NotFound.jsx';

import CustomerLayout from '../pages/customer/CustomerLayout.jsx';
import CustomerOverview from '../pages/customer/CustomerOverview.jsx';
import CustomerStatement from '../pages/customer/CustomerStatement.jsx';
import CustomerTransfer from '../pages/customer/CustomerTransfer.jsx';
import CustomerBeneficiaries from '../pages/customer/CustomerBeneficiaries.jsx';
import CustomerBills from '../pages/customer/CustomerBills.jsx';
import CustomerCards from '../pages/customer/CustomerCards.jsx';
import CustomerProfile from '../pages/customer/CustomerProfile.jsx';

import EmployeeLayout from '../pages/employee/EmployeeLayout.jsx';
import EmployeeDashboard from '../pages/employee/EmployeeDashboard.jsx';
import EmployeeCustomers from '../pages/employee/EmployeeCustomers.jsx';
import EmployeeAccounts from '../pages/employee/EmployeeAccounts.jsx';
import EmployeeTransactions from '../pages/employee/EmployeeTransactions.jsx';
import EmployeeReports from '../pages/employee/EmployeeReports.jsx';

import AdminLayout from '../pages/admin/AdminLayout.jsx';
import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
import AdminEmployees from '../pages/admin/AdminEmployees.jsx';
import AdminAdmins from '../pages/admin/AdminAdmins.jsx';
import AdminCustomers from '../pages/admin/AdminCustomers.jsx';
import AdminSettings from '../pages/admin/AdminSettings.jsx';
import AdminSecurity from '../pages/admin/AdminSecurity.jsx';
import AdminReports from '../pages/admin/AdminReports.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/personal-banking" element={<PersonalBanking />} />
        <Route path="/corporate-banking" element={<CorporateBanking />} />
        <Route path="/digital-banking" element={<DigitalBanking />} />
        <Route path="/business-banking" element={<BusinessBanking />} />
        <Route path="/business-banking/agri-and-food-business" element={<AgriBusiness />} />
        <Route path="/personal-banking/savings-account" element={<SavingsAccount />} />
        <Route path="/personal-banking/salary-account" element={<SalaryAccount />} />
        <Route path="/personal-banking/deposits" element={<Deposits />} />
        <Route path="/personal-banking/loans" element={<ConsumerLoans />} />
        <Route path="/personal-banking/cards/credit-cards" element={<CreditCards />} />
        <Route path="/personal-banking/cards/debit-cards" element={<DebitCards />} />
        <Route path="/personal-banking/cards/prepaid-cards" element={<PrepaidCards />} />
        <Route path="/personal-banking/nri-banking" element={<NriBanking />} />
        <Route path="/personal-banking/ibs-rewards" element={<IBSRewards />} />
        <Route path="/private-banking" element={<PrivateBanking />} />
        <Route path="/online-loan-payments" element={<OnlineLoanPayments />} />
        <Route path="/cards/bill-payment" element={<CreditCardBillPayment />} />
        <Route path="/insurance-claim" element={<InsuranceClaim />} />
        <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/track-request" element={<TrackRequest />} />
        <Route path="/ibs-connect" element={<IBSConnect />} />
        <Route path="/open-account" element={<OpenAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Route>

      <Route element={<AuthPageLayout />}>
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/business-login" element={<BusinessLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Route>

      <Route element={<ProtectedRoute role="customer" />}>
        <Route element={<CustomerLayout />}>
          <Route path="/customer" element={<CustomerOverview />} />
          <Route path="/customer/statement" element={<CustomerStatement />} />
          <Route path="/customer/transfer" element={<CustomerTransfer />} />
          <Route path="/customer/beneficiaries" element={<CustomerBeneficiaries />} />
          <Route path="/customer/bills" element={<CustomerBills />} />
          <Route path="/customer/cards" element={<CustomerCards />} />
          <Route path="/customer/profile" element={<CustomerProfile />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute role="employee" />}>
        <Route element={<EmployeeLayout />}>
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/employee/customers" element={<EmployeeCustomers />} />
          <Route path="/employee/accounts" element={<EmployeeAccounts />} />
          <Route path="/employee/transactions" element={<EmployeeTransactions />} />
          <Route path="/employee/reports" element={<EmployeeReports />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute role="admin" />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/employees" element={<AdminEmployees />} />
          <Route path="/admin/admins" element={<AdminAdmins />} />
          <Route path="/admin/customers" element={<AdminCustomers />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/security" element={<AdminSecurity />} />
          <Route path="/admin/reports" element={<AdminReports />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
