import { JwtPayload } from "jsonwebtoken";

export class Store {
  addToken!: (
    token: string,
    subject: string,
    replace?: boolean
  ) => void | Promise<void>;
  findSubjectByToken!: (token: string) => string | Promise<string>;
  deleteToken!: (token: string) => void | Promise<void>;
  deleteAllTokensForSubject!: (subject: string) => void | Promise<void>;
  clearExpiredTokens!: (
    validateToken: (
      type: "access" | "refresh",
      token: string
    ) => JwtPayload | string | null
  ) => Promise<void>;
}
