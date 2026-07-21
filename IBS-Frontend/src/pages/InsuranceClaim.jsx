import FormPageTemplate from '../components/templates/FormPageTemplate.jsx';
import { formPagesData } from '../data/formPagesData.js';

export default function InsuranceClaim() {
  return <FormPageTemplate data={formPagesData.insuranceClaim} />;
}
