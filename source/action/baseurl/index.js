// const IP1 = '192.168.1.107'; 
const IP1 = '192.168.43.54';

const SERVER_URL = 'http://' + IP1 + '/SPW/';

const API = 'api/';

const baseurl = {

    SERVER_IMAGE_URL: SERVER_URL,

    // USER LOCALHOST.......................................
    USER_REGISTRATION: SERVER_URL + API + 'user/user_registration.php',
    USER_LOGIN: SERVER_URL + API + 'user/user_login.php',

    // FORGOT PASSWORD LOCALHOST.......................................
    FORGOT_PASSWORD: SERVER_URL + API + 'user/forgot_password_request.php',

}

export default baseurl;