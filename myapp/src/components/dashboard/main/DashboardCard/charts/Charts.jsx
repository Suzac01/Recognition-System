import React from "react";
import '../../../../common/global.css';
const Charts = () => {
    const chartData = [
        { month: "Jul", value: 25 },
        { month: "Aug", value: 20 },
        { month: "Sep", value: 30 },
        { month: "Oct", value: 22 },
        { month: "Nov", value: 15 },
        { month: "Dec", value: 30 },
    ];

    const socialTrafficData = [
        { referral: "Facebook", visitors: 1480, percentage: 60 },
        { referral: "Facebook", visitors: 5480, percentage: 70 },
        { referral: "Google", visitors: 4807, percentage: 80 },
        { referral: "Instagram", visitors: 3678, percentage: 75 },
        { referral: "Twitter", visitors: 2645, percentage: 30 },
    ];

    return (
        <div className="chart-container">
            <div className="chart-section">
                <h2>Total Users</h2>
                <div className="chart">
                    {chartData.map((data, index) => (
                        <div key={index} className="bar">
                            <div className="bar-value">{data.value}</div>
                            <div className="bar-label">{data.month}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="social-traffic-section">
                <div className="d-flex justify-content-between">
                    <h2 style={{ fontSize: "18px" }}>Social Traffic</h2>
                    <button className="view-btn">See All</button>
                </div>
                <div className="traffic-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Referral</th>
                            <th>Visitors</th>
                            <th>Percentage</th>
                        </tr>
                        </thead>
                        <tbody>
                        {socialTrafficData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.referral}</td>
                                <td>{data.visitors}</td>
                                <td>
                                    <div className="progress-group">
                      <span className="percentage-progress">
                        {data.percentage}%
                      </span>
                                        <div className="progress-bar">
                                            <div
                                                className="progress"
                                                style={{ width: `${data.percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Charts;