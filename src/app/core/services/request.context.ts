import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFeatures, selectIsLoggedIn, selectPrivileges, selectRole } from './auth.selectors';
import { Privileges } from '../../models/privileges.constant';

@Injectable({
  providedIn: 'root'
})
export class RequestContextService {
    isLoggedIn: boolean = false;
    privileges: string[] = [];
    features: string[] = [];
    role: string = 'user';
    isAdmin: boolean = false;

  constructor(private store: Store) 
  {
    this.store.select(selectIsLoggedIn).subscribe(value => {
        this.isLoggedIn = value;
    });

    this.store.select(selectPrivileges).subscribe(value => {
        this.privileges = value;
    });

    this.store.select(selectFeatures).subscribe(value => {
        this.features = value;
    });

    this.store.select(selectRole).subscribe(value => {
        this.role = value;
        this.isAdmin = (this.role === 'Admin' || this.role === 'admin');
    });

    console.log('RequestContextService initialized with:', {
        isLoggedIn: this.isLoggedIn,
        privileges: this.privileges,
        features: this.features,
        role: this.role,
        isAdmin: this.isAdmin
    });
  }

    hasPrivilege(privilege: Privileges): boolean {
    return this.privileges.includes(privilege);
    }

    canAccessAdminPanel(): boolean {
        return this.role != null && this.role.toLowerCase() !== 'user' && this.role !== undefined;
    }
}
