import React from "react";
import styles from "../../../../dashboard.module.css";
import '../../../../../common/global.css';

const ViewData = () => {
    const pageData = [
        {
            pageName: "/argon/",
            visitors: 4569,
            uniqueUsers: 340,
            bounceRate: 46.53,
        },
        {
            pageName: "/argon/index.html",
            visitors: 3985,
            uniqueUsers: 319,
            bounceRate: 46.53,
        },
        {
            pageName: "/argon/charts.html",
            visitors: 3513,
            uniqueUsers: 294,
            bounceRate: 36.49,
        },
        {
            pageName: "/argon/tables.html",
            visitors: 2050,
            uniqueUsers: 147,
            bounceRate: 50.87,
        },
        {
            pageName: "/argon/profile.html",
            visitors: 1795,
            uniqueUsers: 190,
            bounceRate: 46.53,
        },
    ];

    return (
        <div className={styles.pagevisitstable}>
            <div className="d-flex justify-content-between">
                <h5 style={{ fontSize: "18px" }}>Page Visits</h5>
                <button className={styles.viewAllBtn}>See All</button>
            </div>
            <table className="table mt-2">
                <thead className={styles.tableHead}>
                <tr>
                    <th>Page Name</th>
                    <th>Visitors</th>
                    <th>Unique Users</th>
                    <th>Bounce Rate</th>
                </tr>
                </thead>
                <tbody className={styles.tableBody}>
                {pageData.map((page, index) => (
                    <tr key={index}>
                        <td>{page.pageName}</td>
                        <td>{page.visitors}</td>
                        <td>{page.uniqueUsers}</td>
                        <td>{page.bounceRate}%</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewData;