const Select = (props)=>{
    const selectHandler = (e)=>{
        props.onGetSelectValue(e.target.value)
    }
    return(
    <select onChange={selectHandler}>
       <option value="2021">2021</option>
       <option value="2022">2022</option>
       <option value="2023">2023</option>
   </select>
 )
}

export default Select