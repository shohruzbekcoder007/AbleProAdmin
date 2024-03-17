export const getStorage = () => {
    const token = localStorage.getItem('able-access');
    return token
}

export const setStorage = (token) => {
    localStorage.setItem('able-access', token);
}

export const getStorageR = () => {
    const token = localStorage.getItem('able-refresh');
    return token
}

export const setStorageR = (token) => {
    localStorage.setItem('able-refresh', token);
}