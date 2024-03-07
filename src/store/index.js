import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

//store는 하나의 객체만을 저장해야하므로 중첩 객체 사용.
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;