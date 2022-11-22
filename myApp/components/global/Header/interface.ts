import { IMainHeader } from '@/GlobalComponents/Header/cases/main/interface'

export interface IHeader extends IMainHeader {
	homeHeader?: boolean
	signHeader?: boolean
	mainHeader?: boolean
}
