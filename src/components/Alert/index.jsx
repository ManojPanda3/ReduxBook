import { } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

// A custome alert function to show alerts
const Alert = (alert) => {
  // removing alertElement 
  const alertRemove = () => {
    const alertElem = document.getElementById("alert");
    if (!alertElem) return;
    alertElem.parentElement.removeChild(alertElem);
  }
  // the error element 
  const alertElement = (<div className="alert">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={alertRemove}
      width="24" height="24"
      viewBox="0 0 24 24" fill="none">
      <path d="m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#2D10EC"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
    <p>{alert}</p>
  </div>);
  // before adding new alert remove old alert;
  alertRemove();
  // create add alert element 
  const alertNode = document.createElement('div');
  alertNode.id = "alert";
  document.getElementById("root").appendChild(alertNode);
  ReactDOM.createRoot(alertNode).render(alertElement);
  setTimeout(() => alertRemove(), 5 * 1000);
}
export default Alert;
