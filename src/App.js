import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {

  const [feeds, setFeeds] = useState([]);

  const getFeeds = async () => {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=c1oHaOp76tqA5cwuOxJSs9fpH5dSUuPA`);
      const json = await response.json();
      setFeeds(json.results);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFeeds()
  }, [])


  return (
    <>
    <Header />
    <div className='container'>
      <div className='row'>
    { feeds.map((feed) => {
      return (
        <div className='col-lg-6 col-sm-4'>
        <div className='mt-4 col-lg' key={feed.url}>
          <img className='img container-fluid' src={ feed.multimedia[0].url } alt={ feed.multimedia[0].caption}/>
          <h4 className='text-light p-3 font-weight'>{feed.title}</h4>
          <p className='p-3 text-secondary'>
            {feed.abstract}
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
