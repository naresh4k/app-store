import './index.css'
import StyledButton from './styled'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  return (
    <li>
      <StyledButton
        type="button"
        onClick={() => setActiveTabId(tabId)}
        isActive={isActive}
      >
        {displayText}
      </StyledButton>
    </li>
  )
}

export default TabItem
