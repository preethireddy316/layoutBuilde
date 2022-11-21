// Write your code here
// Write your code here
/* eslint-disable prettier/prettier */
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
           {showLeftNavbar&&<div className="cls1">
            <h1>Left Navbar Menu</h1>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item </li>
            </ul>
          </div>} 
           
{showContent&&   <div className="cls2">
            <h1>Content</h1>
            <p>Lorem ipsum </p>
          </div>
}
    {showRightNavbar&& <div className="cls3">
            <h1>Right Navbar</h1>
            <div>Ad 1</div>
            <div>Ad 2</div>
          </div>}   
         
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
