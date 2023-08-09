import { useState } from "react"
import './Form.css'

const Form =(props)=>{
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")

    const titleHandler=(e)=>{
        setTitle(e.target.value)
    }
    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }
    const dateHandler=(e)=>{
        setDate(e.target.value)
    }


    const clickHandler = () => {
        const obj = {
            title,
            price,
            date:new Date(date),
            id:Math.random().toString()
            

        }
        props.onSave(obj)
        setTitle("")
        setPrice("")

    }

    return (
        <div className="form" >
            <label>title</label>
            <input className="inp-title" onChange={titleHandler} placeholder="title"/>
            <label>price</label>
            <input className="inp-price" onChange={priceHandler} placeholder="price"/>
            <label>date</label>
            <input  className="inp-date" onChange={dateHandler} type="date" />
            <button className="click-btn" onClick={clickHandler }>ADD</button>
        </div>
    )
}
export default Form
