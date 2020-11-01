import React from 'react';
import './Home.css';
import Product from './Product';


const Home = () => {
    return(
        <div className="home"> 
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

           <div className="home__row">
           <Product 
                id=""
                title="Echo dot"
                price={59.90}
                rating={1}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8fFqn9Ewq7721tXewwxrO_vDD02In2Cu15OyjnK4e3kPwrOf5l7PJ7FX5H4eNawfxEnjlKvb_&usqp=CAc" />
             <Product 
                id=""
                title="Smart speaker"
                price={99.99}
                rating={2}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHmULP2DAcZW1DJ1K4x2uTsNZAt9nbZLTu9gW18vUOctdqpyJMz6ufWORK&usqp=CAc" />
           </div>
           <div className="home__row">
           <Product 
                id=""
                title="Antraciet"
                price={180}
                rating={3}
                image="data:image/jpeg;base64,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"/>
             <Product 
                id=""
                title="Anker W"
                price={50}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAMfFHNBKgn9YjPdueX2R5zdBGhWcsas9ucg&usqp=CAU" />
                <Product 
                id=""
                title="Wireless"
                price={25.90}
                rating={5}
               image="data:image/jpeg;base64,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"/>
           </div>
          
        </div>
    )
}

export default Home;