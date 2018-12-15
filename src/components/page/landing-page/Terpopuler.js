import React from 'react';
import axios from 'axios';
import LihatDetail from '../../btn/LihatDetail';
import LihatInvestasi from '../../btn/LihatInvestasi'

export default class Terpopuler extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
    axios.get(`https://private-anon-98fccc61ac-slidermonggovest.apiary-mock.com/api/v1/products`)
        .then(res => {
        const products = res.data.results;
        this.setState({ products });
        })
    }

    render(){
        return(
            <div className="terpopuler">
                <h2 className="title-terpopuler">TERPOPULER</h2>
                <div className="card-deck text-center resize">
                    
                    { this.state.products.map(product =>
                        <div className="card">
                            <img className="" height='10%' src={product.images[1]} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title hewan1"><b>{ product.name }</b></h5>
                                <p className="card-text">{ product.kecamatan }, { product.kabupaten }.</p>
                                <p className="card-text harga1"><b>Rp19.000.000,00</b></p>
                                <p><LihatDetail /></p>
                            </div>
                        </div>
                    )}
                    

                    {/* <div className="card">
                        <img className="card-img-top" src={sapiPerah} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title hewan1"><b>Sapi Perah</b></h5>
                            <p className="card-text">Kec. Samirono, Kab. Kulon Progo, D.I. Yogyakarta.</p>
                            <p className="card-text harga1"><b>Rp19.000.000,00</b></p>
                            <p><LihatDetail /></p>
                        </div>
                    </div>


                    <div className="card">
                        <img className="card-img-top" src={kambing} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title hewan1"><b>Kambing</b></h5>
                            <p className="card-text">Kec. Depok, Kab. Sleman, D. I. Yogyakarta</p>
                            <p className="card-text harga1"><b>Rp7.000.000,00</b></p>
                            <p><LihatDetail /></p>
                        </div>
                    </div>


                    <div className="card">
                        <img className="card-img-top" src={kambingEtawa} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title hewan1">Kambing Etawa</h5>
                            <p className="card-text">Kec. Imogiri, Kab. Bantul, D. I. Yogyakarta</p>
                            <p className="card-text harga1"><b>Rp8.000.000,00</b></p>
                            <p><LihatDetail /></p>
                        </div>
                    </div> */}
                </div>
                <div className="butt">
                    <LihatInvestasi />
                </div>
            </div>
        )
    }
}
