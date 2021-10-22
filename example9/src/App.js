import Login from "./components/Login";
import Todo from "./components/Todo";
import WellCome from "./components/WellCome";
import Clock from "./components/Clock";
import Register from "./components/Register";
import Listnumber from "./components/Listnumber";
import ListUser from "./components/ListUser";
import SearchPro from "./components/SearchPro.jsx";
import ActionLink from "./components/ActionLink";
import Toggle from "./components/Toggle ";
// import Greeting from "./components/Greeting";
import LoginControl from "./components/LoginControl";
import Listitemnumber from "./components/Listitemnumber";
import Numberlist from "./components/Numberlist";
import NameForm from "./components/NameForm";
import Calculator from "./components/Calculator";
import AddingProject from "./components/AddingProject";
import CustomDialogContent from "./components/CustomDialogContent";
import SignUpDialog from "./components/SignUpDialog.jsx";

function warnnning(){
  alert("Chưa nhập tài khoản kìa cha nội !!!!")
}
function App() {
  
  const info = {id : 4, name : "Bin đẹp trai", fullName:"ANh Bin đẹp trai siêu cấp !!"}
  return (
  <>
    <Todo/><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Login hi={warnnning}/><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <WellCome name = {info.name} id={info.id} fullName={info.fullName} /><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <WellCome  {...info} /><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    {info.id === 4 ? <Notification msg='ok'/> : <Notification msg='not ok'/>}<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    {info.name === "Bin đẹp trai" && <Notfi msg1='ok'/>}<br></br><br></br><br></br>
    <p>Bây giờ là : </p> 
    <Clock/><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Register/><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Listnumber/><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <ListUser/><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <SearchPro/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <ActionLink/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Toggle/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {/* <Greeting IsLogin={false}/> */}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <LoginControl/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Listitemnumber/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Numberlist numbers={number1}/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <NameForm/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Calculator/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <AddingProject/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <CustomDialogContent/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <SignUpDialog/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

  </> 
  );
}
const number1 = [5,7,8,43,3]
function Notification(props){
  if (props.msg === 'ok') {
    return <div>Ok đấy bạn ê</div>
  }
  return <div>Fail rồi bạn ê</div>
}

const Notfi = (props) => props.msg1 === 'ok' ? <div>Ok la bạn ê</div> : <div>fail Bạn ê</div>


export default App;
