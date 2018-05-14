import { Injectable } from '@angular/core';
import { Student } from '../app/student';
import { STUDENT } from '../app/mock-student';

@Injectable()
export class StudentService {
    constructor() { }

    getList(): Student[] {
        return STUDENT;
    }
}