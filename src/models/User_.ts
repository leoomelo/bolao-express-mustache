type User = {
  name: string,
  email: string,
  password: string
}

const data: User[] = [
  {name: 'Leonardo', email: 'leoomelo@gmail.com', password: '123456'},
  {name: 'Pedro', email: 'pedro@gmail.com', password: '123456'}
]

export const User = {
  getAll: (): User[] => {
    return data
  }
}