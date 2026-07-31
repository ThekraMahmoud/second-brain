export function requireLogin(
isLoggedIn,onLoginModal
) {
    if (!isLoggedIn) {
        onLoginModal(true);
        return false;
    }
    return true;
}