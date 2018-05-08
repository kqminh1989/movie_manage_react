import { API } from '../../constant'
import axios from 'axios'

const uploadExcelAPI     = API + '/import_excel'
const uploadExcelDataAPI = API + '/excel_process_data'
const processExcelAPI    = API + '/process_excel'

export function postExcelImportRequest(data) {
	const formData = new FormData()
	formData.append('file', data.file)
	return axios({
	  method: 'post',
	  url: uploadExcelAPI,
	  data: formData
	})
}

export function postExcelDataRequest(data) {
	return axios({
	  method: 'get',
	  url: uploadExcelDataAPI,
	  headers: {'Content-Type': 'application/json'},
	  data: {}
	})
}

export function processExcelRequest(data) {
	return axios({
		method: 'get',
		url: processExcelAPI
	})
}