import { createContext, useState } from 'react';

export const AccountContext = createContext(null);

const EXAMPLE_USER = {
    iss: "https://accounts.google.com",
    // azp "260556955310-q0td93ic7vum7imt54hjvs0j47pcf3bd.apps.googleusercontent.com",
    aud: "260556955310-q0td93ic7vum7imt54hjvs0j47pcf3bd.apps.googleusercontent.com",
    sub: "112979984289168254472",
    email: "biswajitswain348@gmail.com",
    email_verified: true,
    nbf: 1713925555,
    name: "Byte-Astro",
    picture: "https://lh3.googleusercontent.com/a/ACg8ocJYfqJ8lkM_zo2y7wnKHO4JBkhOylosNjOzm2Yi3Qrh0Bv-fjpb=s96-c",
    given_name: "Byte-Astro",
    iat: 1713925855,
    exp: 1713929455,
    jti: "3da2f793aea58fd18437446e385e5599f2a23307"
}

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState(EXAMPLE_USER);

    return (
        <AccountContext.Provider value={{
            account, setAccount
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider