import { Injectable } from '@angular/core';
import { Teacher } from '../app/teachers';
import { TEACHER } from '../app/mock-teachers';

@Injectable()
export class TeacherService {
    constructor() { }

    getList(): Teacher[] {
        return TEACHER;
    }
}