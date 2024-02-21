import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function AnnoucementBar() {
  let offers={
    offer1:"BUY 2 GET 20% OFF",
    offer2:"Enjoy Free Shipping",
    offer3:"New! iPhone 15 Cases"
};

let keys = Object.keys(offers);
let index = 0;

const getMsg = () => {
    if (index < keys.length) {
        let offer = offers[keys[index]];
        console.log(offer);
        index++;
        setTimeout(getMsg, 3000);
    }
}

getMsg();

  return (
    <>
      <div className="main bg-white h-100 flex space-x-20 cursor-pointer justify-center p-2">
      <FontAwesomeIcon icon={ faArrowLeft} />
        <p>Messsage will here!</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </>
  );
}

export default AnnoucementBar;
