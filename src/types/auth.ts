export interface User {
  id?: string
  name: string
  email: string
  username: string
}

export interface SigninData {
  email: string
  password: string
}

export interface SignupData extends SigninData {
  username: string
}

export interface AuthResponse {
  success?: boolean
  error?: string
  user?: User
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  setUser: (user: User | null) => void
  setIsLoading: (loading: boolean) => void
}
