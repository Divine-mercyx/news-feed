import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {

  const [feeds, setFeeds] = useState([]);

  const [category, setCategory] = useState('home');

  const getFeeds = async () => {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=c1oHaOp76tqA5cwuOxJSs9fpH5dSUuPA`);
      const json = await response.json();
      setFeeds(json.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFeeds()
  }, [category])


  const changeCategory = (newCategory) => {  
    setCategory(newCategory);  
  } 


  return (
    <>
    <Header changeCategory={ changeCategory } currentCategory = {category} />
    <div className='container'>
      <div className='row'>
    { feeds.map((feed) => {
      return (
        <div key={feed.url} className='col-lg-4 mt-4 card-container col-sm-4'>
        <div className='col-lg'>
          <img className='img container-fluid' src={ feed.multimedia[0].url } alt={ feed.multimedia[0].caption}/>
          <h4 className='text-light p-3 font-weight'>{feed.title}</h4>
          <p className='p-3 text'>
            {feed.abstract}
          </p>
          <p className=' text-secondary p-3'>
            {feed.item_type} {feed.byline}
          </p>
        </div>
        </div>
      )
    })}
    </div>
    </div>
    </>
  );
}

export default App;
