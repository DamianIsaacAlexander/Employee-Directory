import React, {useState, useReducer, useEffect} from "react";
import sortReducer from "./utils/sortReducer";
import API from "./utils/API";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table/Table";
import "./App.css";

function App(){

    const initalState = {employees: []};
    const [state, dispatch] = useReducer(sortReducer, initalState);
    const [searchVal, setSearchVal] = useState("");

    useEffect(() => {
        async function loadEmployeeList(){
            const result = await API.getEmployees();
            dispatch({type: "setEmployeeList", payLoad: result.data.results});
        }
        loadEmployeeList();
    }, []);

    useEffect(()=> {
        dispatch({type: "find", input: searchVal});
    }, [searchVal])

    return (
        <Wrapper>
            <Header>
                <Search dispatch={dispatch} setSearchVal={setSearchVal} searchVal={searchVal}/>
            </Header>
            <Table state={state} dispatch={dispatch}/>
            <Footer />
        </Wrapper>
    );
}

export default App;