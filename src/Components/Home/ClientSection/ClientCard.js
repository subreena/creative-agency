import React from 'react';


const ClientCard = ({ client }) => {
    const { img, name, description, message } = client;

    return (
        <div className="col-6 col-md-4">

            <div className="container-fluid client-card">
                <div className="row">
                    <div className="col-md-3 pr-2">
                        <img src={img} alt="" style={{ height: '65px', width: '65px', borderRadius: '100%' }} />
                    </div>
                    <div className="col-md-9 pl-2 d-flex align-items-center">
                        <div>
                            <h6 className="client-name blue-text">{name}</h6>
                            <p className="client-description">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="service-card-text">
                        {message}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ClientCard;