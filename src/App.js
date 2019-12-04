import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Dashboard from "./components/Dashboard";
import LoadingBar from "react-redux-loading";

function App() {
  const dispatch = useDispatch();
  const { authUser } = useSelector(state => state.authUser);

  const loading = () => {
    return authUser === null;
  };

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="App">{loading() ? <LoadingBar /> : <Dashboard />}</div>
  );
}

export default App;
