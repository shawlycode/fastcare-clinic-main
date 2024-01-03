import React from 'react'
import logo from '../../../assets/fcclogo.png';








const IndividualsAndGroups = () => {
  return (
    <div className='ind__groups-subs'>
      <div className="groupsSubs__container">
        <div className="groupsSubs__header">
          <div className="logo"><img src={logo} alt="" /></div>
          <h3>Individuals and Groups Subscription Analytics</h3>
          <div className="header-text">
            <p>
              Analytics of Individuals and Groups subscriptions. Highlighting each graph will give further information about it.
            </p>
          </div>
        </div>
        <div className="subsCards">
          <div className="cards">
            <h4>2</h4>
            <p>Individual Subscribers</p>
            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar "></div>
            </div>
            <p>Number of Individuals Subscribers</p>
          </div>
          <div className="cards">
            <h4>0</h4>
            <p>Group Subscribers</p>
            <div className="progress1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar1 "></div>
            </div>
            <p>Number of Group Subscribers</p>
          </div>
          <div className="cards">
            <h4>6</h4>
            <p> Groups</p>
            <div className="progress2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar2 "></div>
            </div>
            <p>Count of Groups</p>
          </div>
          <div className="cards">
            <h4>34</h4>
            <p>To be Loaded</p>
            <div className="progress3" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar3 "></div>
            </div>
            <p>Groups with least Beneficiaries</p>
          </div>

        </div>
        <div className="chart__container">
          <div className="charts">Chart 1</div>
          <div className="charts">Charts 2</div>
        </div>
      </div>
    </div>
  )
}

export default IndividualsAndGroups;
