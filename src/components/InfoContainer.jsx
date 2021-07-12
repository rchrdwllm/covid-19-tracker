import styled from "styled-components";

const StyledInfo = styled.div`
    margin-top: 2rem;
    .info {
        margin-top: 2rem;
        @media screen and (min-width: 768px) {
            margin-top: 3.5rem;
        }
        @media screen and (min-width: 1024px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .total .num {
            font-size: 2.5rem;
            font-weight: 800;
            margin: 0.5rem 0;
            @media screen and (min-width: 768px) {
                font-size: 4rem;
            }
            @media screen and (min-width: 1280px) {
                font-size: 5rem;
            }
        }
        .active-num {
            color: #f9c118;
        }
        .cases-num,
        .cases-new-num {
            color: #d6372f;
        }
        .recoveries-num,
        .recoveries-new-num {
            color: #2e962e;
        }
        .deaths-num,
        .deaths-new-num {
            color: #6d6d6d;
        }
    }
`;

export const InfoContainer = ({
    active,
    cases,
    recoveries,
    deaths,
    newCases,
    newRecoveries,
    newDeaths,
}) => {
    return (
        <StyledInfo className="info-container">
            <div className="info active-info">
                <div className="total">
                    <p className="label active-label">Total active cases</p>
                    <h1 className="num active-num">
                        {active ? active.toLocaleString() : 0}
                    </h1>
                </div>
            </div>
            <div className="info cases-info">
                <div className="total">
                    <p className="label cases-label">Total cases</p>
                    <h1 className="num cases-num">
                        {cases ? cases.toLocaleString() : 0}
                    </h1>
                </div>
                <div className="new">
                    <p className="new cases-new">
                        <span className="cases-new-num">
                            + {newCases ? newCases.toLocaleString() : 0}
                        </span>{" "}
                        new cases
                    </p>
                </div>
            </div>
            <div className="info recoveries-info">
                <div className="total">
                    <p className="label recoveries-label">Total recoveries</p>
                    <h1 className="num recoveries-num">
                        {recoveries ? recoveries.toLocaleString() : 0}
                    </h1>
                </div>
                <div className="new">
                    <p className="new recoveries-new">
                        <span className="recoveries-new-num">
                            +{" "}
                            {newRecoveries ? newRecoveries.toLocaleString() : 0}
                        </span>{" "}
                        new recoveries
                    </p>
                </div>
            </div>
            <div className="info deaths-info">
                <div className="total">
                    <p className="label deaths-label">Total deaths</p>
                    <h1 className="num deaths-num">
                        {deaths ? deaths.toLocaleString() : 0}
                    </h1>
                </div>
                <div className="new">
                    <p className="new deaths-new">
                        <span className="deaths-new-num">
                            + {newDeaths ? newDeaths.toLocaleString() : 0}
                        </span>{" "}
                        new deaths
                    </p>
                </div>
            </div>
        </StyledInfo>
    );
};
