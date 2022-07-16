import { JwtPayload } from "jsonwebtoken";
export declare class Store {
    addToken: (token: string, subject: string, replace?: boolean) => void;
    findSubjectByToken: (token: string) => string | Promise<string>;
    deleteToken: (token: string) => void | Promise<string>;
    deleteAllTokensForSubject: (subject: string) => void | Promise<string>;
    clearExpiredTokens: (validateToken: (type: "access" | "refresh", token: string) => JwtPayload | string | null) => Promise<void>;
}
