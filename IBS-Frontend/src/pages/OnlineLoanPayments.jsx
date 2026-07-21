import FormPageTemplate from '../components/templates/FormPageTemplate.jsx';
import { formPagesData } from '../data/formPagesData.js';

export default function OnlineLoanPayments() {
  return <FormPageTemplate data={formPagesData.onlineLoanPayments} />;
}
