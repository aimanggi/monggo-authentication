import React, { Component } from 'react';

class Slideshow extends Component {
    render(){
        return(
            <div className="slideshow-container">
                <div className="slide fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="https://trello-attachments.s3.amazonaws.com/5befc1fca86d3c0932be5fe4/5bf239e9877e3c037a4cc3b6/1b2720e9c31f26e66d9b90bfd4f06a2f/slideshow.html"  width="100%" />
                    <div className="text">Caption Text</div>
                </div>

                <div className="slide fade">
                    <div className="numbertext">2 / 3</div>
                    <img src="https://trello-attachments.s3.amazonaws.com/5befc1fca86d3c0932be5fe4/5bf239e9877e3c037a4cc3b6/1b2720e9c31f26e66d9b90bfd4f06a2f/slideshow.html" width="100%" />
                    <div className="text">Caption Two</div>
                </div>

                <div className="slide fade">
                    <div className="numbertext">3 / 3</div>
                    <img src="https://trello-attachments.s3.amazonaws.com/5befc1fca86d3c0932be5fe4/5bf239e9877e3c037a4cc3b6/1b2720e9c31f26e66d9b90bfd4f06a2f/slideshow.html" width="100%" />
                    <div className="text">Caption Three</div>
                </div>

                <a className="prev" onclick="plusSlide(-1)">❮</a>
                <a className="next" onclick="plusSlide(1)">❯</a>
            
                <div style={{textAlign: 'center'}}>
                    <span className="dot" onclick="currentslide(1)"></span>
                    <span className="dot" onclick="currentslide(2)"></span>
                    <span className="dot" onclick="currentslide(3)"></span>
                </div>
            </div>

        )
    }
}

export default Slideshow;