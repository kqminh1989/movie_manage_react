import { EXCEL_PROCESS } from '../../constant'

const initialState = {
	displayClass: 'hide-block',
	excelData: {}
}

const ExcelDataReducer = (state = initialState, action) => {
	const payload = action.payload
	switch (action.type) {
		case EXCEL_PROCESS.EXCEL_PROCESS_SUCCESS:
			let displayClass = payload === null ? 'hide-block' : 'show-block'
			state = {
				...state,
				displayClass: displayClass,
				excelData: payload
			}
			break
		default:
			break
	}
	return state
}

export default ExcelDataReducer