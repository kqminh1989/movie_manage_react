import React, { Component } from 'react'
import ExcelImportComponent from '../components/ExcelImportComponent'
import { EXCEL_IMPORT } from '../../constant'
import { connect } from 'react-redux'

class ExcelImport extends Component {
	constructor() {
		super()
		this.state = {
			formData: {
				file: ''
			}
		}
	}

	handleInputChange(event) {
		const target = event.target
		const value  = target.files[0]
		this.setState({
			formData: {
				file: value
			}
		})
	}

	onSubmit(event) {
		event.preventDefault()
		this.props.submitForm(this.state.formData)
	}

	render() {
		return (
			<ExcelImportComponent
				submitFunc = { this.onSubmit.bind(this) }
				changeFunc = { this.handleInputChange.bind(this) }
				formData   = { this.state.formData }
			/>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		submitForm: (data) => {
			dispatch({
				type: EXCEL_IMPORT.EXCEL_IMPORT_REQUEST,
				payload: {formData: data}
			})
		}
	}
}

export default connect(null, mapDispatchToProps) (ExcelImport)