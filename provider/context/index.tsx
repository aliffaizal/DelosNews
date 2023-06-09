import User from "../../provider/store/user"
import { ArticleContextType, OptionContextType } from "../../types/type"
import { createContext } from "react"

export const OptionContext = createContext<OptionContextType | null>(null)
export const ArticleContext = createContext<ArticleContextType | null>(null)
export const UserContext = createContext<typeof User | null>(null)