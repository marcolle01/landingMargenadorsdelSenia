import './HomePage.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='carusell '>
            <Slider {...settings}>
                <div className='image-container'>
                    <img
                        src='/carusel/1.jpg'
                        alt='Gallery Image 1'
                        className='homecarusel'
                    />
                </div>
                <div className='image-container'>
                    <img
                        src='/carusel/2.jpg'
                        alt='Gallery Image 2'
                        className='homecarusel'
                    />
                </div>
                <div className='image-container'>
                    <img
                        src='/carusel/3.jpg'
                        alt='Gallery Image 3'
                        className='homecarusel'
                    />
                </div>

                <div className='image-container'>
                    <img
                        src='/carusel/4.jpg'
                        alt='Gallery Image 4'
                        className='homecarusel'
                    />
                </div>
            </Slider>
            <div>
                <h1>Construcción de Muros y Barracas en Piedra Seca</h1>
                <p>
                    “En Margenadors del Sénia, somos especialistas en la
                    construcción de muros, bancales y estructuras en piedra
                    seca. Nuestro equipo trabaja siguiendo las técnicas
                    tradicionales de piedra seca, garantizando una construcción
                    duradera, natural y respetuosa con el entorno. Nos apasiona
                    crear barracas, paredes y otras estructuras que reflejen la
                    herencia cultural de la región y preserven el paisaje
                    natural.”
                </p>
            </div>
        </div>
    );
};

export default HomePage;
