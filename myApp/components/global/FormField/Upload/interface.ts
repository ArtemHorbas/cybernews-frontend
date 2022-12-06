export interface IUploadFile {
	inputName: string
	folder: string
	media?: string
	setMedia: (url: string) => void
}
