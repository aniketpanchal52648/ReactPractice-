import Card from '../Components/UI/Card';
import classes from './UserList.module.css';

function UserList(props){
return (
    <Card className={classes.users} >
    <ul>
    {props.users.map((user)=>(
      <li key={user.id}>
        {user.Name} ({user.Age} years)
      </li>
    ))}
    </ul>
    </Card>
);
}

export default UserList;