import { EXCEL_IMPORT } from '../../constant'

const initialState = {
	progessState: 'none'
}

const ExcelImportReducer = (state = initialState, action) => {
	const payload = action.payload
	switch (action.type) {
		case EXCEL_IMPORT.EXCEL_IMPORT_SUCCESS:
			console.log('Excel Has Been Import', payload)
			break
		default:
			break
	}
	return state
}

export default ExcelImportReducer