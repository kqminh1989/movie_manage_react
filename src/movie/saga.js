import { takeLatest, call, put } from 'redux-saga/effects'
import { EXCEL_IMPORT, EXCEL_PROCESS, EXCEL_PROCESS_DATA } from '../constant'
import { postExcelImportRequest, postExcelDataRequest, processExcelRequest } from './api/api'

function* excelImportProcess(action) {
	try {
		const response = yield call(postExcelImportRequest, action.payload.formData)
		if(response.data.status === true) {
			yield put({ type: EXCEL_PROCESS.EXCEL_PROCESS_SUCCESS, payload: response.data.data })
		} else {
			yield put({ type: EXCEL_IMPORT.EXCEL_IMPORT_FAILED })
		}
	} catch(error) {
		yield put({ type: EXCEL_IMPORT.EXCEL_IMPORT_FAILED })
	}
}

export function* excelImportWatcher() {
	yield takeLatest(EXCEL_IMPORT.EXCEL_IMPORT_REQUEST, excelImportProcess)
}

function* excelDataProcess(action) {
	try {
		const response = yield call(postExcelDataRequest)
		if(response.data.status === true) {
			yield put({ type: EXCEL_PROCESS.EXCEL_PROCESS_SUCCESS, payload: response.data.data })
		} else {
			yield put({ type: EXCEL_PROCESS.EXCEL_PROCESS_FAILED, payload: response.data.data })
		}
	} catch(error) {
		yield put({ type: EXCEL_PROCESS.EXCEL_PROCESS_FAILED })
	}
}

export function* excelDataWatcher() {
	yield takeLatest(EXCEL_PROCESS.EXCEL_PROCESS_REQUEST, excelDataProcess)
}

function* excelProcess(action) {
	try {
		const response = yield call(processExcelRequest, action.payload.formData)
		if(response.data.status === true) {
			yield put({ type: EXCEL_PROCESS_DATA.EXCEL_PROCESS_DATA_SUCCESS, payload: response.data.data })
		} else {
			yield put({ type: EXCEL_PROCESS_DATA.EXCEL_PROCESS_DATA_FAILED, payload: response.data.data })
		}
	} catch(error) {
		yield put({ type: EXCEL_PROCESS_DATA.EXCEL_PROCESS_DATA_FAILED })
	}
}

export function* excelProcessWatcher() {
	yield takeLatest(EXCEL_PROCESS_DATA.EXCEL_PROCESS_DATA_REQUEST, excelProcess)
}