import './App.css';
import HeaderComponent from './component/header';
import OurWork from './section/our-work';
import DynamicVideo from './section/video';
import Payment from './section/payment';

const details = [{
  imgUrl : './favicon.ico',
  heading : 'Premium Materials',
  explain : 'Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.'
}]

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <OurWork fly={details}/>
      <DynamicVideo url='./movie.mp4' />
      <Payment />
    </div>
  );
}

export default App;
