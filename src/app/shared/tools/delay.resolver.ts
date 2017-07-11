
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

export class DelayResolver implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return Observable.of(null).delay(5000);
    }
}