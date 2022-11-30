import { atom, useRecoilState } from 'recoil';
export const UserAtom = atom({
    key: 'userInfo',
    default: { id: "", password: "", name: "" },
});
