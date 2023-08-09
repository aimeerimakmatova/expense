import Date from "./Date"
import './ExpenseItem.css'
const ExpenseItem = (props) => {
 return(
    <div className="expense-item">
       <h1>{props.title}</h1>
       <h2>{props.price}</h2>
      <Date date={props.date}/>
    </div>
 )

}
export default ExpenseItem
