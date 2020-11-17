import React from 'react'

function ProCard(props) {
    return (
        <div className="col-12 col-sm-6 col-md-4 mx-auto mt-3">
            <div className="card">
                <a href="#" className="card-link" target="blank">
                    <img src={props.data.src} className="card-img-top" alt="mask" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.comp}</h5>
                        <p className="card-text">Premium quality with special bulk offer</p>
                        <a href={props.data.link} className="btn btn-block btn-primary">Buy Now</a>
                    </div>
                </a> 
            </div>
        </div>
    )
}

export default ProCard
