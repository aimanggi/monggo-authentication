import React, { Component } from 'react';
import imgSapi1 from '../../img/sapi_perah.png';

class CardboardProduct extends Component {
    render(){
        return(
            <div>
                <h2 className="title-terpopuler">Invezsstasi</h2>
                <div className="card-deck text-center resize">
                    <div className="card">
                        <img width='100%' height='50%' className="" src={imgSapi1} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title hewan1"><b>Sapi Perah</b></h5>
                            <p className="card-text">Kec. Samirono, Kab. Kulon Progo, D.I. Yogyakarta.</p>
                            <p className="card-text harga1"><b>Rp19.000.000,00</b></p>
                            <p><button className="btn btn-outline-primary">Details</button></p>
                        </div>
                    </div>


                    <div className="card">
                        <img width='100%' height='50%' className="" src={imgSapi1} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title hewan1"><b>Kambing</b></h5>
                            <p className="card-text">Kec. Depok, Kab. Sleman, D. I. Yogyakarta</p>
                            <p className="card-text harga1"><b>Rp7.000.000,00</b></p>
                            <p><button className="btn btn-outline-primary">Details</button></p>
                        </div>
                    </div>


                    <div className="card">
                        <img width='100%' height='50%' className="" src={imgSapi1} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title hewan1"><b>Kambing Etawa</b></h5>
                            <p className="card-text">Kec. Imogiri, Kab. Bantul, D. I. Yogyakarta</p>
                            <p className="card-text harga1"><b>Rp8.000.000,00</b></p>
                            <p><button className="btn btn-outline-primary">Details</button></p>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default CardboardProduct;