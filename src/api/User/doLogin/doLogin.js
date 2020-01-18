import {prisma} from "../../../../generated/prisma-client";
import {generateToken} from "../../../utils";

export default {
    Mutation: {
        doLogin: async (_, args, {request}) => {
            const {email, password} = args;
            const user = await prisma.user({email});
            if (email === user.email && password === user.password) {
                const genKey = generateToken(user.id);
                // console.log(genKey);
                return genKey;
            }else{
                throw Error("Wrong Email");
            }
        }
    }
}