import React, { useState, FC } from 'react'
/** @jsx jsx */
import {jsx, css} from '@emotion/core'

interface Props {
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void)
}


const Button: FC<Props> = (props) => {

  return (
    <button css={css`
      padding: 10px 20px;
      background: #6cf;
      color: white;
      font-size: 20px;
      border: none;
    `} onClick={props.onClick} >{props.children}</button>
  )
}

export default Button
