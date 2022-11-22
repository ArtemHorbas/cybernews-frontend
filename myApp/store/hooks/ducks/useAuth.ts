import { useTypedSelector } from '@/store/hooks/useTypedSelector'

export const useAuth = () => useTypedSelector(state => state.auth)
