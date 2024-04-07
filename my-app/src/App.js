import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from './admin/pages/adminhome';
import Adminaboutpage from './admin/pages/adminaboutpage';
import Loginpage from './admin/pages/loginpage';
import Parent from './admin/pages/parent';
import Contact from './admin/pages/contact';
import Userform from './user/pages/userform';
import Hel from './user/pages/loginpage';
import Registration from './user/pages/registration';
import UserList from './user/pages/viewuser';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/about" element={<Adminaboutpage/> } />
        <Route path="/login" element={<Loginpage/> } />
        <Route path = "/demo" element={<Parent/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/userform" element={<Userform/>}/>
        <Route path = "/loginpages" element={<Hel/>}/>
        <Route path = "/reg" element={<Registration/>}/>
        <Route path = "/viewuser" element={<UserList/>}/>
      </Routes>
    </Router>
  );
}

export default App;