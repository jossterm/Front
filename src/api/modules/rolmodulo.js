import { apiHttp } from '../axiosApi.js'
import {

  rolmoduloPath, rolmoduloSave,

} from '../config/apiRoute.js'

export const createRolModulo = (roleId,moduloId) =>
  apiHttp('POST', `${roleSave}/${roleId}/${moduloId}`)

export const editRolModulo = (roleId, body) =>
  apiHttp('PUT', `${rolmoduloSave}/${roleId}`, body)

export const getRolModulo = (roleId) =>
  apiHttp('GET', `${rolmoduloPath}/${roleId}`)

  export const deleteRolModulo = (body) => 
  apiHttp('DELETE', `${rolmoduloPath}`, body)
