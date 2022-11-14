/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const cls1 = showLeftNavbar ? 'show-left' : 'hide-left'
      const cls2 = showContent ? 'show-content' : 'hide-content'
      const cls3 = showRightNavbar ? 'show-right' : 'hide-right'

      return (
        <div className="body-container">
        <div class=cont>
            <div className={cls1}>
            <h1>Left Navbar Menu</h1>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item </li>
            </ul>
          </div>
        </div>
          
          <div className={cls2}>
            <h1>Content</h1>
            <p>Lorem ipsum </p>
          </div>
          <div className={cls3}>
            <h1>Right Navbar</h1>
            <div>Ad 1</div>
            <div>Ad 2</div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
