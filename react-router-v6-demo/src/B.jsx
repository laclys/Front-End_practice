import { Outlet, useNavigate } from 'react-router-dom'

const B = () => {
  let navigate = useNavigate()
  return (
    <div>
      B Component
      <br />
      <button
        onClick={() => {
          navigate('/B/a')
        }}
      >
        Jump Ba
      </button>
      <button
        onClick={() => {
          navigate('/B/b')
        }}
      >
        Jump Bb
      </button>
      <div>
        Children here:
        <Outlet />
      </div>
    </div>
  )
}

export default B
