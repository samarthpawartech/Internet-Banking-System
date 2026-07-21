import { Routes, Route } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout.jsx';
import AuthPageLayout from '../components/layout/AuthPageLayout.jsx';

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
import About from '../pages/About.jsx';
import Careers from '../pages/Careers.jsx';
import Contact from '../pages/Contact.jsx';
import Support from '../pages/Support.jsx';
import CustomerLogin from '../pages/CustomerLogin.jsx';
import BusinessLogin from '../pages/BusinessLogin.jsx';
import NotFound from '../pages/NotFound.jsx';

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
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Route>

      <Route element={<AuthPageLayout />}>
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/business-login" element={<BusinessLogin />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
