import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loader = ({ loading }) => {

    return (
        <>
            { loading ?
                <div className="loader-overlay">
                    <div className="loader">
                            <div className="sweet-loading">
                                <RingLoader
                                    css={override}
                                    size={100}
                                    color={"white"}
                                    loading={loading}
                                />
                                <h3 className="text-white">Finding your Pawmate</h3>
                            </div >

                    </div>
                </div>
                : null
            }
        </>
    );
}

export default Loader