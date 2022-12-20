
import './App.css';
import InputForm from './formControl/InputForm'
import { useState } from 'react';
import UserList from './ShowData/UserList';



function App() {
  // const [isValid,setIsvalid]=useState(true);
  // const [stateMent,setS]=useState('');
  const [data,setData]=useState([{
    "Name":"Aniket",
    "Age":21,
    "key":12
  },
{
  "Name":"Ani",
  "Age":22,
  "key":13
}]);
  const insertInto =d =>{
      setData((preData)=>{
        return [d,...preData];
      })
      console.log("inserted");
  }
  return (
    <div>
     {/* {!isValid && <PopUp></PopUp>}  */}
    <InputForm addData={insertInto} ></InputForm>
   <UserList users={data}/>
    </div>
  );
}

export default App;
