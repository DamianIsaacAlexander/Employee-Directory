

let initalState = [];

function sortByName(state){
    return state.employees.sort((a, b) => {
        if(a.name.first > b.name.first){
            return 1 
        } else {
            return -1
        }
    }); 
}

function sortByGender(state){
    return state.employees.sort((a, b) => {
        if(a.gender > b.gender){
            return 1 
        } else {
            return -1
        }
    }); 
}

function sortByEmail(state){
    return state.employees.sort((a, b) => {
        if(a.email > b.email){
            return 1 
        } else {
            return -1
        }
    }); 
}


function sortByPhone(state){
    return state.employees.sort((a, b) => {
        if(a.phone > b.phone){
            return 1 
        } else {
            return -1
        }
    }); 
}

function sortByAge(state){
    return state.employees.sort((a, b) => {
        if(a.dob.age > b.dob.age){
            return -1 
        } else {
            return 1
        }
    }); 
}

function sortByInput(state, val) {
    if(val){
        return state.employees.filter(employee => {
            const fullName = `${employee.name.first.toLowerCase()}${employee.name.last.toLowerCase()}` 
            return fullName.includes(val.toLowerCase());
        });
    } else {
        return initalState;
    }
}

function sortReducer(state, action){
    switch(action.type){
        case "setEmployeeList": initalState = action.payLoad; return {employees: [...action.payLoad]};
        case "name": return {employees: sortByName(state)};
        case "gender": return {employees: sortByGender(state)};
        case "email": return {employees: sortByEmail(state)};
        case "phone": return {employees: sortByPhone(state)};
        case "age": return {employees: sortByAge(state)};
        case "find": return {employees: sortByInput({employees: initalState}, action.input)}
        default: return state;
    }
}

export default sortReducer;

