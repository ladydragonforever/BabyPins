// sign up
export const postUser = user => {
    return $.ajax({
        method: "post",
        url: "api/users",
        data: { user }
    });
}

// sign in
export const postSession = user => {
    return $.ajax({
        method: "post",
        url: "api/session",
        data: { user }
    });
}

// sign out

export const deleteSession = () => {
    return $.ajax({
        method: "delete",
        url: "api/session",
    });
}