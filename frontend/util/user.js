
export const fetchUser =(userId) => (
    $.ajax({
        method: "Get",
        url: `/api/users/${userId}`
    })
);

