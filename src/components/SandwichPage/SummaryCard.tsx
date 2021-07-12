import React from 'react'
import StyledSummaryCard from './SummaryCard.styled'
import statusIcon from '../../assets/status-icon.svg'

type SummaryCardProps = {
  image?: string
  title?: string
  value?: string
  valueColor?: string
  backgroundColor?: string
  loading?: boolean
  error?: boolean
  selectBestSandwich?: Function
}

const SummaryCard = ({
  image,
  title,
  value,
  backgroundColor,
  valueColor,
  loading,
  error,
  selectBestSandwich,
}: SummaryCardProps) => {
  return (
    <StyledSummaryCard
      className={selectBestSandwich ? 'clickable' : ''}
      onClick={() => {
        if (selectBestSandwich) {
          selectBestSandwich()
        }
      }}
    >
      <div className="statusIcon">
        <img
          style={{ visibility: 'hidden' }} // Remain Hidden until this icon has a function
          src={statusIcon}
        />
      </div>
      <div className="centeredContent">
        <div className="iconContainer" style={{ backgroundColor: backgroundColor }}>
          <img className="summaryCardIcon" src={image} />
        </div>
        <div className="summaryCardTitle">{title}</div>
        <div className="summaryCardValue" style={{ color: valueColor }}>
          {error ? 'Unavailable' : loading ? 'Loading ...' : value}
        </div>
      </div>
    </StyledSummaryCard>
  )
}

export default SummaryCard
