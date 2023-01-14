import React, { useState, useEffect } from 'react'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import styled from 'styled-components'

const CheckBox = ({
  id,
  onCheck,
  checked,
}: {
  id: string
  onCheck: any
  checked: boolean
}) => {
  const [_checked, setChecked] = useState(checked)
  useEffect(() => {
    setChecked(checked)
  }, [checked])

  const ToggleCheck = () => {
    setChecked(!_checked)
    onCheck && onCheck(!_checked, id)
  }

  if (_checked) {
    return (
      <Box onClick={ToggleCheck}>
        <ImCheckboxChecked size="35" />
      </Box>
    )
  } else
    return (
      <Box onClick={ToggleCheck}>
        <ImCheckboxUnchecked size="35" />
      </Box>
    )
}

export default CheckBox

const Box = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
