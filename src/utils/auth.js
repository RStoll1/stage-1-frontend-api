export const authorize = (email, password) => {
    // Pretend we did a fetch request that gave us back a token
    return new Promise((resolve, reject) => {
        const token = "a-fake-token";
        // store token like a real login
        localStorage.setItem("jwt", token);
        resolve({ token });
    });
};

export const checkToken = (token) => {
    // Pretend we did a fetch request that gave us back a user
    return new Promise((resolve, reject) => {
        resolve({
            data: { name: "User", email: "fake@example,com", _id: "fake-id" },
        });
    });
};

export const logout = () => {
    localStorage.removeItem("jwt");
};