import Modal from "./Modal";
import "./FormStyles.css";

import { useState } from "react";


export default function LoanForm () {
    const [errorMessage,setErrorMessage]=useState(null);
    const [showModal,setShowModal]=useState(false);
    const [loanInputs,setLoanInputs]=useState({
        name:"",
        phoneNumber:"",
        age:"",
        isEmployee:false,
        slaryRange:"less than 500$",
    })

    function handleFormSubmit(e) {
        e.preventDefault();
        setErrorMessage(null);

        if(loanInputs.age < 18 || loanInputs.age > 70){
            setErrorMessage("The age is not allowed")
        }
        else if(loanInputs.phoneNumber.length < 8 || loanInputs.phoneNumber.length > 12) {
            setErrorMessage("The phone number format is incorrect");
        }
        else if(loanInputs.slaryRange ==="above 5000$"){
            setErrorMessage("You are not eligible to apply for a loan.");
        }

        setShowModal(true);

    }
    function handleDivClick() {
        console.log("div clicked ");
        if(showModal){
            setShowModal(false);
        }
        
    }


    const btnIsDisable =
        loanInputs.name == "" ||
        loanInputs.phoneNumber == "" ||
        loanInputs.age == "";

    return (
        <div  className="flex" style={{flexDirection:"column"}} onClick={handleDivClick}>
            <form id="loan-form"  className="flex" style={{flexDirection:"column"}}>
                <h1>Requesting a loan </h1>
                <hr></hr>

                <label>Name</label>
                <input 
                type="text" 
                value={loanInputs.name}
                onChange={(event) => {
                    setLoanInputs({...loanInputs,name:event.target.value})
                }}/>
                
                <label>Phone Number</label>
                <input 
                value={loanInputs.phoneNumber}
                onChange={(event) => {
                    setLoanInputs({...loanInputs,phoneNumber:event.target.value})
                }}
                />

                <label>Age</label>
                <input 
                value={loanInputs.age}
                onChange={(event) => {
                    setLoanInputs({...loanInputs,age:event.target.value})
                }}
                />

                <label style={{marginTop:"30px"}}>Are you an employee?</label>
                <input type="checkbox" checked={loanInputs.isEmployee}
                onChange={(event) => {
                    setLoanInputs({...loanInputs,isEmployee:event.target.checked})
                }}
                />

                <label>Salary:</label>
                <select value={loanInputs.slaryRange}
                onChange={(event) => {
                    setLoanInputs({...loanInputs,slaryRange:event.target.value})
                }}
                >
                    <option>less than 500$</option>
                    <option>between 500$ and 2000$</option>
                    <option>between 2000$ and 5000$</option>
                    <option>above 5000$</option>
                </select>

                <button id="submit-loan-btn"
                className={btnIsDisable ? "disabled" : ""}
                onClick={handleFormSubmit}
                disabled={btnIsDisable}
                >Submit</button>

            </form>

            <Modal message={errorMessage} isVisible={showModal}/>
        </div>
    );
} 