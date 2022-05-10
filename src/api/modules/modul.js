import { apiHttp } from '../axiosApi.js'
import {

  moduloPath, moduloSave,

} from '../config/apiRoute.js'

export const createModulos = (body) =>
  apiHttp('POST', `${moduloSave}`, body)

export const editModulos = (body) =>
  apiHttp('PUT', `${moduloSave}`, body)

export const getModulos = () =>
  apiHttp('GET', `${moduloPath}`)

export const deleteModulos = (body) => 
  apiHttp('DELETE', `${moduloPath}`, body)