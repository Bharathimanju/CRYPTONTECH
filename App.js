
import React from "react";
import "./App.css"

import iconr from "./images/iconr.png";

// 3 QUESTION

const CourseApp = () => {
    return (
        <div className="course-container">
            <h1 > My Courses</h1>
            <table className="course-table">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Start Date</th>
                        <th>Lessons Completed</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="course-name">
                            <img src={iconr} alt="Basic Algorithm" className="course-image" />
                            <div className="course-info">
                                <span>Basic Algorithm</span><br></br>
                                <span className="course-lessons">25 Lessons</span>
                            </div>
                        </td>
                        
                        <td>27 jan, 2023</td>
                        <td>10/25(48%)</td>
                        <td>14 38m 56s</td>
                    </tr>
                    <tr>
                        <td className="course-name">
                            <img src={iconr} alt="Basic Algorithm" className="course-image" />
                            <div className="course-info">
                                <span>Web Development</span><br></br>
                                <span className="course-lessons">45 lessons Lessons</span>
                            </div>
                        </td>
                        <td>23 feb, 2023</td>
                        <td>40/45 (97%)</td>
                        <td>14 38m 56s</td>
                    </tr>
                    <tr>
                        <td className="course-name">
                            <img src={iconr} alt="Basic Algorithm" className="course-image" />
                            <div className="course-info">
                                <span>Basic Dtat science</span><br></br>
                                <span className="course-lessons">37 Lessons</span>
                            </div>
                        </td>
                        <td>14 jan, 2023</td>
                        <td>9/37(40%)</td>
                        <td>2 weeks</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CourseApp;

// ................................................................................................................




// 7 QUESTION

const transactions = [
  {
    id: 1,
    name: "Aokiji",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: "+$13.00",
    status: "Received",
    color: "text-success",
    
  },
  {
    id: 2,
    name: "Kizaru",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: "-$9.00",
    status: "Outgoing",
    color: "text-danger",
    
  },
  {
    id: 3,
    name: "Akainu",
    date: "28 Feb 2023",
    time: "06:23 PM",
    amount: "+$20.00",
    status: "Received",
    color: "text-success",
    
  },
];

const TransactionList = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Last Transactions</h5>
        <a href="/transactions" className="text-muted">
          See All
        </a>
      </div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="d-flex align-items-center p-3 mb-2 bg-light rounded shadow-sm"
        >
          <img
            src={transaction.img}
            alt={transaction.name}
            className="rounded-circle me-3"
            width="50"
            height="50"
          />
          <div className="flex-grow-1">
            <h6 className="mb-0">{transaction.name}</h6>
            <small className="text-muted">
              {transaction.date} • {transaction.time}
            </small>
          </div>
          <div className="text-end">
            <h6 className={transaction.color}>{transaction.amount}</h6>
            <small className="text-muted">{transaction.status}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;


