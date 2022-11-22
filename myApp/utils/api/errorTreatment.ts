import { toastr } from 'react-redux-toastr'

export const errorCatch = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message

export const toastError = (error: any, title = 'Error Request') => {
	const message = errorCatch(error)
	toastr.error(title, message)
	throw message
}

export const logError = (error: any, title = 'Error Request') => {
	const message = errorCatch(error)
	console.log(title, message)
	throw message
}
