import { Routes, Route } from "react-router-dom";
import { Layout, DashLayout, Public } from "./components/index";
import {
  Login,
  Welcome,
  NotesList,
  UsersList,
  EditNote,
  EditUser,
  NewUserForm,
  Prefetch,
  PersistLogin,
} from "./features/index";
import RequireAuth from "./features/auth/RequireAuth";
import {ROLES} from './config/roles.jsx'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth  allowedRoles={[...Object.values(ROLES)]}/>}>
        <Route element={<PersistLogin />}>
        <Route element={<Prefetch />}>
          <Route path="/dash/" element={<DashLayout />}>
            <Route index element={<Welcome />} />
            <Route path="users">
              <Route index element={<UsersList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="newUser" element={<NewUserForm />} />
            </Route>
            <Route path="notes">
              <Route index element={<NotesList />} />
              {/* <Route path="newNote" element={<NewNoteForm />} /> */}
              <Route path=":id" element={<EditNote />} />
            </Route>
          </Route>
        </Route>
        {/* end of dash */}
      </Route>
      </Route>
      </Route>
    </Routes>
  );
}

export default App;