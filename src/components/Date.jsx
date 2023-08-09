const Date = (props) =>{
    const year = props.date.getFullYear() 
    const month = props.date.toLocaleDateString("en-US", {month:"short"})
    const day = props.date.getDate()
    console.log(day);

    return(
        <div>
            <h4>{`${day} ${month} ${year}` }</h4>
        </div>
    )
}
export default Date
