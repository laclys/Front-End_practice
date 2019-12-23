function useBind (initialValue) {
   const [val, setVal] = useState(initialValue || '')
   const onChange = e => {
     setVal(e.target.value)
   }
   return { val, onChange }
}

// 用法
function InputBind() {
  const inputProps = useBind('init')
  return (
    <p>
      <p>useBind实现 value:{inputProps.value}</p>
      <input {...inputProps} />
    </p>
  )
}
