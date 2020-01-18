import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        me: async(_,args,{request}) => {
            isAuthenticated(request);
            const { user } = request;
            const userProfile  = await prisma.user({id: user.id});
            const posts = await prisma.user({id: user.id}).posts();
            return null;
        }
    }
}