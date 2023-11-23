import { useForm } from 'react-hook-form'

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  // const { formState: { errors }} = useForm<IFormInputs>()
  /*   
  React-Hook-Form预置了以下的校验规则，
  这些规则与现有的HTML格式验证标准
  ‎‎一致。
    required
    min
    max
    minLength
    maxLength
    pattern
    validate 
*/

  const onSubmit = (data) => {
    console.log('data', data)
  }
  console.log('errors', errors)
  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      {/* register our input field with register function provided by the useForm hook */}
      <input
        placeholder="Enter your email"
        {...register('email', {
          minLength: {
            value: 5,
            message: 'Email must be larger than 18',
          },
          maxLength: {
            value: 99,
            message: 'Email must be smaller than 99',
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      {/* basic validation in the second args */}
      <hr />
      <input
        placeholder="Enter your password"
        // hidden
        {...register('password', {
          required: true,
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Characters in last name must be A-Z or a-z',
          },
        })}
      />
      {/* show error is the field encounters one  */}
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Submit</button>
    </form>
  )
}

export default App
