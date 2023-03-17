import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolebasedService } from '../services/rolebased.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  warning="You dont have access."
  constructor(private service: RolebasedService, private router: Router,){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.service.isloggedin()) {
        if (route.url.length > 0) {
          let menu = route.url[0].path;
          if (menu == 'user') {
            if (this.service.getrole() == 'admin') {
              return true;
            } else {
              this.router.navigate(['']);
              alert(this.warning)  
              return false;
            }
          }else{
            return true;
          }
        } else {
          return true;
        }
      }
      else {
        this.router.navigate(['login']);
        return false;
      }
    
  }
  
}
