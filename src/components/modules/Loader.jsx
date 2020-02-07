import React from "react";

import icon from '../../images/icon@1x.svg'

const Loader = ({ loading }) => {

    return (
        <>
            { loading ?
                <div className="loader-overlay">
                    <div className="loader">
                        <div className="loader-icon">
                            <img src={icon} alt="pawmate icon" />
                        </div>
                        <h3 className="text-white mt-3">Finding your Pawmate</h3>
                    </div>
                </div>
                : null
            }
        </>
    );
}

export default Loader