import { Injectable } from '@angular/core';

@Injectable()
export class ApiaryService {
    id: number;

    constructor() {
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
}