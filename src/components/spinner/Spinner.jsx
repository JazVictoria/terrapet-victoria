import './Spinner.css';
import spinnerImg from '../../images/spinner.png';

const Spinner = () => (
  <div className="spinner">
    <img className="loader" src={spinnerImg} alt="" />
  </div>
);

export default Spinner;