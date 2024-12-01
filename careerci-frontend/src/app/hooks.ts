
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()


import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { setUserInfo, clearUserInfo } from '../reducers/authReducer'

export const useAuth = () => {
    const auth = getAuth();
    const dispatch = useAppDispatch();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUserInfo(user))
        } else {
          dispatch(clearUserInfo())
        }
      });
      return unsubscribe;
    }, [auth, dispatch]);
  }
  