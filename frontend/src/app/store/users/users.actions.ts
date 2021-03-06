import { createAction, props } from '@ngrx/store';
import {
  CodeError,
  CodeUserData,
  EditPasswordData,
  EmailData,
  googleLoginUserData,
  LoginError,
  LoginFacebookUser,
  LoginUserData,
  profileUserData,
  RegisterError,
  RegisterUserData,
  socialNetworks,
  User,
  UserProfileData
} from '../../models/user.model';

export const fetchUserRequest = createAction(
  '[Users] Fetch User Request',
);
export const fetchUserSuccess = createAction(
  '[Users] Fetch User Success',
  props<{user: User | null}>()
);
export const fetchUserFailure = createAction(
  '[Users] Fetch User Failure',
  props<{error: string}>()
);

export const registerUserRequest = createAction(
  '[Users] Register Request',
  props<{userData: RegisterUserData}>()
);
export const registerUserSuccess = createAction(
  '[Users] Register Success',
  props<{user: User}>()
);
export const registerUserFailure = createAction(
  '[Users] Register Failure',
  props<{error: null | RegisterError}>()
);
export const loginUserRequest = createAction(
  '[Users] Login Request',
  props<{userData: LoginUserData}>()
);
export const loginUserSuccess = createAction(
  '[Users] Login Success',
  props<{user: User}>()
);
export const loginUserFailure = createAction(
  '[Users] Login Failure',
  props<{error: null | LoginError}>()
);

export const loginFacebookRequest = createAction(
  '[Users] Login Facebook Request',
  props<{userData: LoginFacebookUser}>()
);

export const loginFacebookSuccess = createAction(
  '[Users] Login Facebook Success',
  props<{user: User}>()
);
export const loginFacebookFailure = createAction(
  '[Users] Login Facebook Failure',
  props<{error: null | LoginError}>()
);

export const logoutUser = createAction('[Users] Logout');
export const logoutUserRequest = createAction('[Users] Server Logout Request');

export const sendEmailRequest = createAction('[User] SendEmail Request', props<{email: EmailData}>());
export const sendEmailSuccess = createAction('[User] SendEmail Success',  props<{userData: CodeUserData}>());

export const sendUserCodeRequest = createAction('[User] SendCode Request', props<{userData: CodeUserData}>());
export const sendUserCodeSuccess = createAction('[User] SendCode Success', props<{code: string}>());
export const sendUserCodeFailure = createAction('[User] SendCode Failure', props<{error: CodeError | null}>());

export const editPasswordRequest = createAction('[User] EditPassword Request', props<{password: EditPasswordData}>());
export const editPasswordSuccess = createAction('[User] EditPassword Success');
export const editPasswordFailure = createAction('[User] EditPassword Failure', props<{error: string}>());

export const loginGoogleRequest = createAction('[Users] LoginGoogle Request', props<{userData: googleLoginUserData}>());
export const loginGoogleSuccess = createAction('[Users] LoginGoogle Success', props<{user: User}>());
export const loginGoogleFailure = createAction('[Users] LoginGoogle Failure', props<{error: null | LoginError}>());

export const editProfileRequest = createAction(
  '[User] EditProfile Request', props<{userData: profileUserData}>()
);
export const editProfileSuccess = createAction(
  '[User] EditProfile Success', props<{user: User | null}>()
);
export const editProfileFailure = createAction(
  '[User] EditProfile Failure', props<{error: null | string}>()
);

export const addSocialNetworksRequest = createAction(
  '[User] AddSocialNetworks Request', props<{socialNetworks: socialNetworks}>());
export const addSocialNetworksSuccess = createAction(
  '[User] AddSocialNetworks Success', props<{user: User}>()
);
export const addSocialNetworksFailure = createAction(
  '[User] AddSocialNetworks Failure', props<{error: null | string}>()
);

export const fetchUserProfileRequest = createAction(
  '[UserProfile] Fetch Request',
  props<{userId: string}>());
export const fetchUserProfileSuccess = createAction(
  '[UserProfile] Fetch Success',
  props<{userProfileData: UserProfileData}>());
export const fetchUserProfileFailure = createAction(
  '[UserProfile] Fetch Failure',
  props<{error: string}>());

export const changeSaveUser = createAction('[User] Change Safe User', props<{save: boolean}>());
