import { } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { CloseSquare } from 'iconsax-react';

// A custome alert function to show alerts
const Alert = (alert) => {
  // removing alertElement 
  const alertRemove = () => {
    const alertElem = document.getElementById("alert");
    if (alertElem) alertElem.parentNode.removeChild(alertElem);
  }
  // the error element 
  const alertElement = (<div className="alert">
    <CloseSquare onClick={alertRemove} size="24" color="#2D10EC" />
    <p>{alert}</p>
  </div>);
  // before adding new alert remove old alert;
  alertRemove();
  // create add alert element 
  const alertNode = document.createElement('div');
  alertNode.id = "alert";
  document.getElementById("root").appendChild(alertNode);
  ReactDOM.createRoot(alertNode).render(alertElement);
}
export default Alert;
