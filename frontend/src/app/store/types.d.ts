import { CodeError, CodeUserData, LoginError, RegisterError, User, UserProfileData } from '../models/user.model';
import { Category } from '../models/category.model';
import { Subcategory } from '../models/subcategory.model';
import { Course } from '../models/course.model';
import { Lesson, Module } from '../models/course.model';
import { Review } from '../models/review.model';
import { Statistics } from '../models/statistics.model';
import { Message } from '../models/message.model';

export type UsersState = {
  user: null | User,
  saveUser: boolean,
  fetchLoading: boolean,
  fetchLoadingError: null | string,
  addLoading: boolean,
  addError: null | string,
  registerLoading: boolean,
  registerError: null | RegisterError,
  loginLoading: boolean,
  loginError: null | LoginError,
  loginFacebookLoading: boolean,
  loginFacebookError: null | LoginError,
  code: string | null,
  codeError: CodeError | null,
  userData: CodeUserData | null,
  googleLoading: boolean,
  editProfileLoading: boolean,
  editProfileError: null | string,
  addSocialNetworksLoading: boolean,
  addSocialNetworksError: null | string,
  userProfileData: null | UserProfileData,
  fetchUserProfileDataLoading: boolean,
  fetchUserProfileDataError: null | string,
};

export type CategoriesState = {
  categories: Category[],
  category: Category | null,
  fetchLoading: boolean,
  fetchLoadingError: null | string,
  fetchByIdLoading: boolean,
  fetchByIdLoadingError: null | string,
  createLoading: boolean,
  createError: null | string,
  editLoading: boolean,
  editError: null | string,
  removeLoading: boolean,
  removeError: null | string,
};

export type SubcategoriesState = {
  subcategories: Subcategory[],
  subcategory: Subcategory | null,
  fetchLoading: boolean,
  fetchLoadingError: null | string,
  fetchByIdLoading: boolean,
  fetchByIdLoadingError: null | string,
  createLoading: boolean,
  createError: null | string,
  editLoading: boolean,
  editError: null | string,
  removeLoading: boolean,
  removeError: null | string,
};

export type CourseState = {
  courses: Course[],
  course: Course | null,
  searchCourses: Course[],
  allFreeCourses: Course[],
  allPaidCourses: Course[],
  bestCourses: Course[],
  fetchLoading: boolean,
  fetchLoadingError: null | string,
  fetchAllBestCoursesLoading: boolean,
  fetchAllBestCoursesLoadingError: null | string,
  fetchAllFreeCoursesLoading: boolean,
  fetchAllFreeCoursesLoadingError: null | string,
  fetchAllPaidCoursesLoading: boolean,
  fetchAllPaidCoursesLoadingError: null | string,
  fetchPersonalLoading: boolean,
  fetchPersonalLoadingError: null | string,
  fetchSortLoading: boolean,
  fetchSortLoadingError: null | string,
  fetchBySubcategoryLoading: boolean,
  fetchBySubcategoryLoadingError: null | string,
  searchLoading: boolean,
  searchLoadingError: null | string,
  createLoading: boolean,
  createError: null | string,
  startLoading: boolean,
  removeLoading: boolean,
  removeLearningCourse: boolean,
  removeFavoriteCourse: boolean,
  publishLoading: boolean,
  addToTheBestLoading: boolean,
  removeFromBestLoading: boolean,
};

export type ModuleState = {
  modules: Module[],
  fetchLoading: boolean,
  fetchLoadingError: null | string,
  createLoading: boolean,
  createError: null | string,
  removeLoading: boolean,
  removeError: null | string,
};

export type LessonsState = {
  createLessonLoading: boolean,
  createLessonError: null | string,
  fetchLoading: boolean,
  fetchLoadingError: null | string,
  lesson: Lesson | null,
  removeLoading: boolean,
  removeError: null | string,
};

export type ReviewsState = {
  reviews: Review[],
  fetchLoading: boolean,
  fetchLoadingError: null | string,
  createLoading: boolean,
  createError: null | string,
  removeLoading: boolean,
  removeError: null | string,
};

export type StatisticsState = {
  statistics: Statistics | null,
  fetchLoading: boolean,
  fetchLoadingError: null | string,
};

export type MessagesState = {
  messages: Message[],
  fetchLoading: boolean,
  fetchLoadingError: null | string,
  createLoading: boolean,
  createError: null | string,
  removeLoading: boolean,
  removeError: null | string,
};

export type AppState = {
  users: UsersState,
  categories: CategoriesState,
  subcategories: SubcategoriesState,
  courses: CourseState,
  modules: ModuleState,
  lessons: LessonsState,
  reviews: ReviewsState,
  statistics: StatisticsState,
  messages: MessagesState,
};
