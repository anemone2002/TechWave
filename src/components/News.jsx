import React from 'react';
import '../components/News.css';
import news from '../assets/images/news.png';

const News = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className='news-container'> 
      <div className='news'>
        <div className='new'>
          <img src={news} alt="" />
          <div className="caption">
            <h3>TechWave XR news!</h3>
            <button onClick={handleButtonClick}>More Info</button>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <h4>Latest AR News</h4>
        <p>Discover the latest advancements in Augmented Reality technology and stay updated with TechTrek XR.</p>
      </div>
    </div>
  );
};

export default News;
