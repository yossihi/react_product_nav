const users = [
    {username: "yossi", password: 123}
]

const products = [
    {desc: "some prod", price: 3.2, id: 1, photo: `https://picsum.photos/id/23${1}/200`},
    {desc: "another prod", price: 4.2, id: 2, photo: `https://picsum.photos/id/23${2}/200`},
    {desc: "my prod", price: 5.2, id: 3, photo: `https://picsum.photos/id/23${3}/200`},
    {desc: "his prod", price: 6.2, id: 4, photo: `https://picsum.photos/id/23${4}/200`},
    {desc: "his prod", price: 6.2, id: 4, photo: `https://picsum.photos/id/23${5}/200`},
    {desc: "his prod", price: 6.2, id: 4, photo: `https://picsum.photos/id/23${6}/200`},
    {desc: "his prod", price: 6.2, id: 4, photo: `https://picsum.photos/id/23${7}/200`}



]

export const checkUser=(username, password) => {
    for (let index = 0; index < users.length; index++) {
        if (users[index].username === username && users[index].password === +password) {
            return true
        }
    }
    return false
}

export const registerUser = (newUsername, newPassword) => {
    // Check if the username is already taken
    const isUsernameTaken = users.some(user => user.username === newUsername);

    if (isUsernameTaken) {
        return { success: false, message: "Username already taken" };
    }

    // If username is not taken, add the new user to the array
    users.push({ username: newUsername, password: +newPassword });
    return { success: true, message: "Registration successful" };
};

export const getAllProd = () => {
    return products
}