
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyCj_uW2CiGQ5fD_RScvbyYJaiS-k7EFdFg",
    authDomain: "crud-angular2.firebaseapp.com",
    databaseURL: "https://crud-angular2.firebaseio.com",
    storageBucket: "crud-angular2.appspot.com",
    messagingSenderId: "833657197636"

};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};