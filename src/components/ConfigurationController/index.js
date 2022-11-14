/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unreachable */
// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeDisplayContent = () => {
        onToggleShowContent()
      }

      const changeDisplayLeft = () => {
        onToggleShowLeftNavbar()
      }

      const changeDisplayRight = () => {
        onToggleShowRightNavbar()
      }

      return (
        <>
          <h1>Layout</h1>
          <input
            type="checkbox"
            checked={showContent}
            id="content"
            onChange={changeDisplayContent}
          />
          <label htmlFor="content">Content</label>
          <input
            type="checkbox"
            id="left"
            checked={showLeftNavbar}
            onChange={changeDisplayLeft}
          />
          <label htmlFor="left">Left Navbar</label>
          <input
            type="checkbox"
            checked={showRightNavbar}
            id="right"
            onChange={changeDisplayRight}
          />
          <label htmlFor="right">Right Navbar</label>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
