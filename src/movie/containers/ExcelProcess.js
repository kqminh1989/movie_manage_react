import React, { Component } from 'react'
import ExcelProcessComponent from '../components/ExcelProcessComponent'
import { EXCEL_PROCESS, EXCEL_PROCESS_DATA } from '../../constant'
import { connect } from 'react-redux'

class ExcelProcess extends Component {

	componentDidMount () {
		this.props.excelDataFunc()
	}

	onSubmitData(event) {
		event.preventDefault()
		this.props.excelDataProcessFunc()
	}

	render() {
		return (
			<ExcelProcessComponent 
				excelData = { this.props.excelData }
				excelDataProcessFunc = { this.onSubmitData.bind(this) }
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		excelData: state.excelData
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		excelDataFunc: () => {
			dispatch({
				type: EXCEL_PROCESS.EXCEL_PROCESS_REQUEST,
				payload: ''
			})
		},
		excelDataProcessFunc: () => {
			dispatch({
				type: EXCEL_PROCESS_DATA.EXCEL_PROCESS_DATA_REQUEST,
				payload: {}
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (ExcelProcess)
