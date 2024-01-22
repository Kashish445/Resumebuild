'use client'
import Image from 'next/image';
import Link from 'next/link';

// import '../app/styles/templates.css';

function Coro() {
    
    return (
        <div id="Carousel2" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
        <div className="carousel-inner rounded">
            <div className="carousel-item active">
                <img className="d-block w-100" src="/kunal.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="/kashish.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="/kunal.jpg" alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#Carousel2" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#Carousel2" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
)
}

export default Coro;






