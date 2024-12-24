import './home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="home-hero">
                <div className="home-hero-tagline">
                    <h1>
                        Your calculations, <br /> <em> Like </em> easy as!
                    </h1>
                    <h3>
                        Tools that will help you to make good decisions! <br />{' '}
                        New calculators are being added soon..
                    </h3>
                </div>
                <div className="home-hero-img">
                    <img src="./hero.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}
