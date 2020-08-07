Redux 
1) tao ra 1 store duy nhat dung de thay doi du lieu
view -> action -> reducer -> store -> view

-----
Store: la 1 bien luu tru du lieu cho phep getState(), updateState() and dispath(action).
import {createStore} from 'redux';
import rootReducers from './reducers';

const store = createStore(rootReducers);
-----
Action Creators: noi tao ra action dung de mo ta event do nguoi dung tao ra
export const selectPost = (post) => {
    return {
        type: "SELECT_POST",
        payload: post
    }
}
-----
Reducer: la mot function nha dau vao la mot state va cac mo ta ve su kien va dua vao do tra ve state tiep theo
nhung khong thay doi state cu
export default function activePostReducer (state = initialState, action) {
    switch (action.type) {
        case "SELECT_POST":
            return action.payload;
        default:
            return state
    }
}
-----
view: hien thi du lieu cung cap boi store
------------------------------------------
Nguyen ly hoat dong cua redux
1) Khi co mot su kien GET, POST, PUT, DELETE -> actionCreator se sinh ra 1 action mo ta nhung gi dang xay ra.
2) action se thuc hien dieu phoi Reducer xu ly thong qua ham dispatch(action).
3) Reducer (ngoi cho) dua vao nhung mo ta cua Action de biet can thuc hien thay doi gi cho state va thuc hien Update
4) Khi state duoc update thi cac trigger theo doi state se nhan duoc thon tin update va tien hanh render la phan view de hien thi cho nguoi dung
------------------------------------------
nguyen tac trong Redux
1) Store luon la nguon du lieu dung la tincay duy nhat
2) State chi duoc phep doc cach duy nhat de thay doi state laf phat sinh 1 action
va de reducer tu dong thay doi state
3) function Reducer phai la 1 pure function (voi 1 dau vao chi cho ra 1 dau ra duy nhat)
------------------------------------------
add redis dev tool
>> npm install --save redux-devtools-extension