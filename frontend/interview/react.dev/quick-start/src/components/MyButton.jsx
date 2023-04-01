import React from "react"
import './MyButtonStyle.css'

const MyButton = (props) => {
  const { count = 0, setCount } = props

  return (
    <button className="button" onClick={setCount}>
      {count}
    </button>
  )
}

export default function MyButtonContainer(props) {
  const [count, setCount] = React.useState(0)

  const handleClick = () => setCount(count + 1)

  return (
    <>
      <MyButton count={count} setCount={handleClick} />
      <MyButton count={count} setCount={handleClick} />
    </>
  )
}