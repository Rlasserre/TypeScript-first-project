let isActive: boolean;

//isActive = 'false'; somente aceita booleano.

isActive = false;

function mapUserState(status: boolean) {
    if (status) {
        return 'User Active.'
    } else {
        return 'User Inactive.'
    }
}

mapUserState(true);