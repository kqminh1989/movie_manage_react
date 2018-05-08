import { all } from 'redux-saga/effects'
import { excelImportWatcher, excelDataWatcher, excelProcessWatcher } from './movie/saga'

const IndexSagas = function* () {
	yield all([
		excelImportWatcher(),
		excelDataWatcher(),
		excelProcessWatcher()
	])
}

export default IndexSagas