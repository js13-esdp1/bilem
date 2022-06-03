import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/types';
import { searchCoursesRequest } from '../../store/course/course.actions';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { fetchCategoriesRequest } from '../../store/categories/categories.actions';
import { fetchSubcategoriesByCategoryRequest } from '../../store/subcategories/subcategories.actions';
import { ModalComponent } from '../../ui/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../../models/category.model';
import { Course } from '../../models/course.model';
import { Subcategory } from '../../models/subcategory.model';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy{
  @ViewChild('searchForm') searchForm!: NgForm;
  querySub!: Subscription;
  searchLoading: Observable<boolean>;
  category!: string;
  categoriesArr: Category[] = [];
  subCategoriesArr: Subcategory[] = [];
  categories: Observable<Category[]>;
  courses: Observable<Course[]>;
  categoriesArray!: Category[];
  categorySub!: Subscription;
  subCategorySub!: Subscription;
  coursesBySubcategorySub!: Subscription;
  subCategories: Observable<Subcategory[]>;
  fetchLoadingSubcategories: Observable<boolean>;
  subCategoriesArray!: Subcategory[];
  fetchLoadingCategory: Observable<boolean>;
  fetchLoadingError: Observable<null | string>

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  )
  {
    this.searchLoading = store.select(state => state.courses.searchLoading);
    this.categories = store.select(state => state.categories.categories);
    this.courses = store.select(state => state.courses.courses);
    this.fetchLoadingCategory = store.select(state => state.categories.fetchLoading);
    this.fetchLoadingError = store.select(state => state.categories.fetchLoadingError);
    this.subCategories = store.select(state => state.subcategories.subcategories);
    this.fetchLoadingSubcategories = store.select(state => state.subcategories.fetchLoading);
  }

  ngOnInit() {
    this.store.dispatch(fetchCategoriesRequest());

    this.querySub = this.route.queryParams
      .subscribe(params => {
          if (params) {
            const title = params['title']?.toLowerCase();
            setTimeout(() => {
              this.searchForm.form.patchValue(params);
              this.store.dispatch(searchCoursesRequest(
                {courseData: {title, is_free: params['is_free']}}));
            })
          }
        }
      );

    this.categorySub = this.categories.subscribe(categories => {
      if (categories) {
        this.categoriesArray = categories;
      }
    });

    this.store.dispatch(fetchSubcategoriesByCategoryRequest({id: ''}));
    this.subCategorySub = this.subCategories.subscribe(subCategories => {
      if (subCategories) {
        this.subCategoriesArray = subCategories;
      }
    });
  }

  openDialogCategoryDelete(id: string, title: string): void {
    this.dialog.open(ModalComponent, {
      data: {title: `категорию "${title}"`, id, type: 'Категория'},
    });
  }

  openDialogSubcategoryDelete(id: string, title: string): void {
    this.dialog.open(ModalComponent, {
      data: {title: `подкатегорию "${title}"`, id, type: 'Подкатегория'},
    });
  }

  show() {
    const drop = <HTMLElement>document.querySelector('.dropdown');
    drop.style.display = 'flex';
    drop.style.flexDirection = 'row';
  }

  hide() {
    const drop = <HTMLElement>document.querySelector('.dropdown');
    drop.style.display = 'none';
  }

  showSub(id: string) {
    this.subCategoriesArr = this.subCategoriesArray.filter(s => s.category._id === id);

    const drop = <HTMLElement>document.querySelector('.subcategories-content');
    drop.style.display = 'flex';
    drop.style.flexDirection = 'column';
  }

  hideSub() {
    const drop = <HTMLElement>document.querySelector('.subcategories-content');
    drop.style.display = 'none';
  }

  getCategoryCourses(id: string) {
    this.hide();
    void this.router.navigate([`/categories/${id}`]);
  }

  getSubcategoryCourses(id: string) {
    this.hide();
    void this.router.navigate([`/subcategories/${id}`]);
  }

  onSubmit() {
    if (this.searchForm.value.title === '' && (this.searchForm.value.is_free === '' || !this.searchForm.value.is_free)) {
      void this.router.navigate(['/']);
    }

    let courseData = {};

    if(this.searchForm.value.is_free === '' || !this.searchForm.value.is_free) {
        courseData = {
        title: this.searchForm.value.title.toLowerCase()
      }
    }

    if(this.searchForm.value.is_free) {
      courseData = {
        title: this.searchForm.value.title.toLowerCase(),
        is_free: this.searchForm.value.is_free
      }
    }

    this.store.dispatch(searchCoursesRequest({courseData}));
  }

  ngOnDestroy() {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
    if (this.categorySub) {
      this.categorySub.unsubscribe();
    }
    if (this.subCategorySub) {
      this.subCategorySub.unsubscribe();
    }
    if (this.coursesBySubcategorySub) {
      this.coursesBySubcategorySub.unsubscribe();
    }
  }
}
