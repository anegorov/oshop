import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list('/categories').snapshotChanges()
    .pipe(map( action => action
      .map(a => {
          const key = a.payload.key;
          let data = a.payload.val()          
        return {k:key, d:data};
      })));
  }
}
