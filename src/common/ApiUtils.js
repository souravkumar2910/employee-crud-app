import { API_URL } from "./constant";

const request = (options) => {

    const headers = new Headers({
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:3001"
    });

    const defaults = { headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
        if(!response.ok){
            return Promise.reject(json);
        }
        return json;
    }))

};


export function addEmployee(employee){
    return request({
        url: API_URL + "/create",
        method: "POST",
        body: JSON.stringify(employee),
    });
}

export function getAllEmployees(){
    return request({
        url: API_URL + "/getAll",
        method: "GET",
    });
}

export function getEmpById(employeeId){
    return request({
        url: API_URL + "/get/employee/"+ employeeId,
        method: "GET",
    });
}

export function deleteEmpById(employeeId){
    return request({
        url: API_URL + "/delete/employee/"+ employeeId,
        method: "DELETE",
    });
}