import { serviceMock } from "./serviceMock.js";
const activeMock=true;


const SERVER_PATH ='https://jsonplaceholder.typicode.com';
const headers=  {
    'Content-Type' : 'application/json'
}

const get = (path)=> {
    return fetch(`${SERVER_PATH}${path}`)
    .then(doc=>doc.json())
    .catch(e=>null)
}

// Enviar datos
const post = (path, dato)=> {
    if (activeMock && path=='/login')
        return serviceMock.loginIncorrecto();
    //return serviceMock.logincorrecto(dato);


    return fetch(`${SERVER_PATH}${path}`, {
        method: 'POST',
        body: JSON.stringify(dato),
        headers
    })
    .then(doc=>doc.json())
    .catch(e=>null)
}
// Enviar datos
const put = (path,id, dato)=> {
    return fetch(`${SERVER_PATH}${path}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(dato),
        headers
    })
    .then(doc=>doc.json())
    .catch(e=>null)
}

// Borrar datos
const del = (path, id)=> {
    return fetch(`${SERVER_PATH}${path}/${id}`, {
        method: 'DELETE',
        headers
    })
    .then(doc=>doc.json())
    .catch(e=>null)
}

export const serviceBack = {
    get,
    post,
    del,
    put,
}
