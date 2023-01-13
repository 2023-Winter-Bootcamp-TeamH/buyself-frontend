import React from 'react'
import styled from 'styled-components'

/**
 * 구분선
 */

const Divisions = ({ IsShort }: { IsShort?: boolean }) => {
  if (IsShort) {
    return <ShortLine />
  } else {
    return <LongLine />
  }
}

const LongLine = styled.div`
  width: 100%;
  border-bottom: 0.15rem solid black;
  margin-bottom: 2rem;
`
const ShortLine = styled(LongLine)`
  width: 90%;
  border-bottom: 0.15rem solid black;
`

export default Divisions
