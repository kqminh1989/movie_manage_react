import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import IndexSaga from './saga'
import logger from 'redux-logger'
import excelImportReducer from './movie/reducers/ExcelImportReducer'
import excelDataReducer from './movie/reducers/ExcelDataReducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	combineReducers({
		excelImport: excelImportReducer,
		excelData: excelDataReducer
	}),
	{},
	applyMiddleware(
		logger,
		sagaMiddleware
	)
)

sagaMiddleware.run(IndexSaga)

export default store