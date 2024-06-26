//Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

export const getAllOfficeAndcodeCity = async() =>{
    let res = await fetch ("http://172.16.101.146:5504/offices")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return{
            code_office: val.code_office,
            city: val.city
        }
    });
    return dataUpdate;
}

//Devuelve un listado con la ciudad y el teléfono de las oficinas de España.

export const getAllOfficeCityAndMovil = async() => {
    let res = await fetch("http://172.16.101.146:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            code_office: val.code_office,
            movil: val.movil
        }
    });
    return dataUpdate
}

export const getOfficesBycode = async() =>{
    let res = await fetch("http://172.16.101.146:5504/offices?code_office=${code}")
    let data = await res.json();
    return data;
}