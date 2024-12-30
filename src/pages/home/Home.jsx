import './home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="home-hero">
                <div className="home-hero-details">
                    <h1 className="site-title-font">
                        Your calculations <br /> <em> easy as! </em>
                    </h1>
                    <h3 className="site-title-tagline-font">
                        Tools for good decisions!
                    </h3>
                    <p>
                        <em>more coming soon..</em>
                    </p>
                </div>
                <div className="home-hero-img">
                    <img src="./hero.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}
