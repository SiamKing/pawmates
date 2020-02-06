import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loader = ({ loading }) => {

    return (
        <div className="loader">
            { loading ?
                <div className="sweet-loading">
                    <RingLoader
                        css={override}
                        size={100}
                        color={"#333"}
                        loading={loading}
                    />
                    <h3>Finding your Pawmate</h3>
                </div >
                : ""
            }
        </div>
    );
}

export default Loader