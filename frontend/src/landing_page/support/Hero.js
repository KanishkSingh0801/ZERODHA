import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id = "supportHero">
            <div className='p-5' id = "supportWrapper">
                <h4>Support Portal</h4>
                <a href = "">Track tickets</a>
            </div>
            
            <div id = "supportSecondRow"className='row p-3' style = {{lineHeight: "2.5"}}>
                <div className='col-lg-7 px-4'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder = "Eg. how do I activate F&O"/><br/>
                    <a href = "">Track account opening</a>
                    <a href = "">Track segment activation</a>
                    <a href = "">Intraday margins</a>
                    <a href = "">Kite user manual</a>
                </div>
                <div className='col-1'></div>
                <div className='col-lg-4 '>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href = "">Current Takeovers and Delisting - Januray 2024</a></li>
                        <li><a href = "">Latest intraday leverages - MIS & CO</a></li>
                    </ol>    
                </div>
            </div>
        </section>
     );
}

export default Hero;