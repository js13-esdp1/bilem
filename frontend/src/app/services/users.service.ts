import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CodeUserData,
  EditPasswordData,
  EmailData,
  googleLoginUserData,
  LoginFacebookUser,
  LoginUserData,
  RegisterUserData,
  User
} from '../models/user.model';
import { environment, environment as env } from '../../environments/environment';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) { }

  registerUser(userData: RegisterUserData) {
    return this.http.post<User>(env.apiUrl + '/users', userData);
  }

  login(userData: LoginUserData) {
    return this.http.post<User>(env.apiUrl + '/users/sessions', userData);
  }

  logout() {
    return this.http.delete(env.apiUrl + '/users/sessions');
  }

  loginWithFacebook(userData: LoginFacebookUser) {
    return this.http.post<User>(env.apiUrl + '/users/facebookLogin', userData);
  }

  loginGoogle(userData: googleLoginUserData){
    return this.http.post<User>(environment.apiUrl + '/users/googleLogin', userData);
  }

  recoveryPassword(email: EmailData) {
    return this.http.post<User>(environment.apiUrl + `/users/recovery`, email);
  }

  sendCode(userData: CodeUserData) {
    return this.http.post<string>(environment.apiUrl + `/users/checkCode`, userData).pipe(
      map(response => {
        return response;
      })
    );
  }

  editPassword(password: EditPasswordData) {
    return this.http.put(environment.apiUrl + `/users/editPassword`, password);
  }

  getUser() {
    return this.http.get<User>(env.apiUrl + '/users').pipe(
      map(response => {
        return new User(
          response._id,
          response.email,
          response.token,
          response.displayName,
          response.role,
          response.aboutMe,
          response.myCourses,
          response.favoriteCourses,
        );
      })
    );
  }
}
