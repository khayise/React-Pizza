import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from './store/store';
import type { AddDispatch } from './store/store';

export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AddDispatch>();
