import { Route, Routes } from "react-router-dom";
import {DashLayout, Layout, Public} from "./components/index";
import {Login, Welcome, NotesList,  UsersList} from "./features/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="/dash/" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="notes" element={<NotesList />} />
          <Route path="users" element={<UsersList />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
