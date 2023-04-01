import React from "react"

export default MyButton = (props) => {
  const { text } = props

  return (
    <button>
      {text}
    </button>
  )

}