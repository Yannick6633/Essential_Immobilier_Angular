export class User {
  id: number;
  name: string;
  login: string;
  age: number;
  email: string;
  password: string;
  phone: string;
  constructor(name: string, login: string, age: number, email: string, password: string, phone: string) {
    this.name = name;
    this.login = login;
    this.age = age;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }
}
