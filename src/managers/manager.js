import { getAll } from '../services/service.js'

export const getAllManager = (cbOk, cbNok) => {
    getAll().then((response) => {
        return response.json().then((parsedJson) => {
            cbOk(parsedJson);
        })
    }).catch((err) => {
        cbNok(err);
    })
}