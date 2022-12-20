import classes from'./InputForm.module.css';
import { useState } from 'react';
import Card from '../Components/UI/Card';
import Button from '../Components/UI/Button';
import ErrorM from '../Components/UI/Error';
function FormControl(props){
    
    const [newName,setName]=useState('');
    const [newAge,setAge]=useState('');
    const [E,setE]=useState();
    const nameChange =e=>{
        setName(e.target.value);
    }
    const ageChange=event=>{
        setAge(event.target.value);
    }
    const saveData=event=>{
        event.preventDefault();
        if(newName.trim().length<=0 || newAge.trim().length<=0){
            setE({title:'Invalid Data',msg:'Name and Age must not be empty'})
            return;
        }
        if(+newAge<=0){
            setE({title:'Invalid Age',msg:'Age should be >0'})
            return;
        }
        const newData={
            Name:newName,
            Age:newAge,
            key:Math.random().toString()
    }

    props.addData(newData);
    setName(" ");
    setAge(" ");

}
const changeErrorHan=()=>{
setE(null);
}
    return (
        <div>
           
      { E && <ErrorM title={E.title} msg={E.msg} onConfirm={changeErrorHan}></ErrorM>}
        <Card className={classes.input}>
        <form  onSubmit={saveData}>
            
                <label htmlFor='name'>Name</label>
                <input type="text" onChange={nameChange} id='name' value={newName}></input>
            
           
                <label htmlFor='age'>Age</label>
                <input type="number" id='age' onChange={ageChange} value={newAge}></input>
         

            <Button type="sumbit" onClick={saveData}>Add Data</Button>
        </form>
        </Card>
        </div>

    );
}

export default FormControl