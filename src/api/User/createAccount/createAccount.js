import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation:{
        createAccount: async(_,args) => {
            const { nickName, email, firstName="", lastName="", password="" } = args;
            try{
                const user= await prisma.createUser({
                    nickName,
                    email,
                    firstName,
                    lastName,
                    password
                });
                if(user){
                    return true;
                }else{
                    return false;
                }
            }catch(error){
                return false;
            }
        }
    }
}