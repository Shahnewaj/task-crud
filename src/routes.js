import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Members from "./pages/Members";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import CreateTask from './pages/CreateTask';
import CreateMember from './pages/CreateMember';
import PrivateRouteOutlet from './PrivateRouteOutlet';
import EditTask from './pages/Edittask';
import EditMember from './pages/EditMember';

const RootRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<PrivateRouteOutlet />} >
                    <Route path="" element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="members" element={<Members />} />
                    <Route path="tasks" element={<Tasks />} />
                    <Route path="create-task" element={<CreateTask />} />
                    <Route path="create-member" element={<CreateMember />} />
                    <Route path="edit-task/:id" element={<EditTask />} />
                    <Route path="edit-member/:id" element={<EditMember />} />
                    <Route path="*" element={<Dashboard />} />
                </Route>

            </Routes>
        </Router>)
}


export default RootRouter;