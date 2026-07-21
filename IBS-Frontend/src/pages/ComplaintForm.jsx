import FormPageTemplate from '../components/templates/FormPageTemplate.jsx';
import { formPagesData } from '../data/formPagesData.js';

export default function ComplaintForm() {
  return <FormPageTemplate data={formPagesData.complaintForm} />;
}
