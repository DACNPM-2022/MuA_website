import bcrypt from 'bcryptjs';

function checkPassword(bodyPassword, password) {
    if(bcrypt.compareSync(bodyPassword, password)) {
        return true;
    }
    return false;
}


export default { checkPassword };