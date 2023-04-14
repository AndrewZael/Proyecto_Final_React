const userObj = (user = {}) => {
    return {
        username: user.displayName || user.email,
        name: '',
        lastname: '',
        email: user.email,
        user_id: user.uid,
        profile_picture: user.photoURL, 
        favorites: [],
        publications: [],
        subscribed: false,
        publisher: false,
        provider_Id: user.providerData[0].providerId || user.provider_Id
    }
}

export default userObj;