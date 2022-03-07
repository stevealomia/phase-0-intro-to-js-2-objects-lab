// Write your solution in this file!
const employee = {
    name: "Franco",
    streetAdress: "Long Island"
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return {
        [key]: value,
        ...employeeObj,
        
    }

}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value
    return employeeObj   
}

function deleteFromEmployeeByKey(employeeObj, key) {
    const newObj = {...employeeObj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key];
    return employeeObj;
}
