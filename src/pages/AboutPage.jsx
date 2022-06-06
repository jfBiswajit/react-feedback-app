import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum in hic
        possimus voluptas eligendi culpa odio laborum voluptatum eum provident!
      </p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to='/'>Back to Home</Link>
      </p>
    </Card>
  );
}
export default AboutPage;
