'use strict';

import Carousel from '../src/carousel';
import React from 'react';
import ReactDom from 'react-dom';
import easingTypes, { easeOutElastic } from 'tween-functions';

class App extends React.Component<any, any> {
  state = {
    slideIndex: 0,
  };

  render() {
    return (<div>
      <Carousel
        style={{ minHeight: 100 }}
        easing={easeOutElastic}
        autoplay={false}
        wrapAround
        speed={1000}
        autoplayInterval={1000}
        resetAutoplay={false}
        swipeSpeed={35}
        slideIndex={this.state.slideIndex}
        afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
        <img src="http://placehold.it/1000x400&text=slide1"/>
        <img src="http://placehold.it/1000x400&text=slide2"/>
        <img src="http://placehold.it/1000x400&text=slide3"/>
        <img src="http://placehold.it/1000x400&text=slide4"/>
        <img src="http://placehold.it/1000x400&text=slide5"/>
        <img src="http://placehold.it/1000x400&text=slide6"/>
      </Carousel>
      <div style={{width: '50%', margin: 'auto'}}>
        <button onClick={() => this.setState({ slideIndex: 0 })}>1</button>
        <button onClick={() => this.setState({ slideIndex: 1 })}>2</button>
        <button onClick={() => this.setState({ slideIndex: 2 })}>3</button>
        <button onClick={() => this.setState({ slideIndex: 3 })}>4</button>
        <button onClick={() => this.setState({ slideIndex: 4 })}>5</button>
        <button onClick={() => this.setState({ slideIndex: 5 })}>6</button>
      </div>
    </div>);
  }
}

ReactDom.render(<App />, document.getElementById('__react-content'));
