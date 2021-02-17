import './App.css';
import data from './data/data.js'
import Listing from './components/Listing';

// console.log(etsy[0])

console.log(data)

function App() {
  return (
    <div className="item-list">
      {data.map(item => item.state === 'active' ? <Listing items={item} key={item.listing_id} /> : null)}
    </div>
  );
}

export default App;
