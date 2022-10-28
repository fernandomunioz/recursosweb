async function  logincorrecto(dato){
    return {name:dato.name, token:'token12340'}
}
async function  loginIncorrecto(dato){
    return null;
}

export const serviceMock= {
    logincorrecto,
    loginIncorrecto
}