import { apiHttp } from '../axiosApi.js'
import {

  rolePath, roleSave,

} from '../config/apiRoute.js'

export const createRoles = (body) =>
  apiHttp('POST', `${roleSave}`, body)

export const editRoles = (roleId, body) =>
  apiHttp('PUT', `${roleSave}/${roleId}`, body)

export const getRoles = () =>
  apiHttp('GET', `${rolePath}`)

  export const deleteRoles = (body) => 
  apiHttp('DELETE', `${rolePath}`, body)
