import FormPageTemplate from '../components/templates/FormPageTemplate.jsx';
import { formPagesData } from '../data/formPagesData.js';

export default function TrackRequest() {
  return <FormPageTemplate data={formPagesData.trackRequest} />;
}
