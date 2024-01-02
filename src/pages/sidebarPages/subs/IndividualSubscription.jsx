import React from 'react'
import './indsubs.css'
import logo from '../../../assets/fcclogo.png'
const IndividualSubscription = () => {
  return (
    <div className='indSubs'>
      <div className="indSubs__container">
        <div className="insubs__content">
          <div className="header_container">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="header-text">
              <p>
                The Individual Subscription is maintained by the company or organization of the person registering for the subscription, however only the registering individual is considered an “Individual Subscriber.” Benefits of an Individual Subscription may not be shared among others in the Individual Subscriber’s company or organization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualSubscription
