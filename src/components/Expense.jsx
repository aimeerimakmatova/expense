import { useState } from "react"
import ExpenseItem from "./ExpenseItem"
import Form from "./Form"
import Select from "./Select"


const Expense=()=>{

    const expense = [
        {
            title: "obed",
            price: 500,
            date: new Date(),
            id: 's1'
        },
        {
            title: "zavtrak",
            price: 300,
            date: new Date(),
            id: 's2'
        },
        {
            title: "ujin",
            price: 700,
            date: new Date(),
            id: 's3'
        },
    ]

    const [state, setState] = useState(expense)
    const [filter, setFilter] = useState("2022")

    function save (obj){
        setState((newArr) =>{
            return  [...newArr,obj]
        })
    }

    const GetSelectValue=(year) =>{
        setFilter(year)
        console.log(year);
    }
    console.log("2022"==="2022.2.2");
    const filteredByYear = state.filter((el)=>{
        const year = el.date.getFullYear().toString()
        console.log(year);
        return year === filter
    })
console.log(filteredByYear);
    return (
        <div>
            <h1>TEST</h1>
            <Form onSave = {save}/>
            <Select onGetSelectValue={GetSelectValue}/>
            {filteredByYear.map((el)=>(
                <ExpenseItem title={el.title} price={el.price} date={el.date} />
            ))}
       
        </div>
    )
}
export default Expense