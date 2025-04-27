import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { catchError, delay, map, mergeMap, tap } from 'rxjs/operators';
import { User } from 'src/app/_interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  private isInLogginProcessSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isInLogginProcess$: Observable<boolean> = this.isInLogginProcessSubject.asObservable();


  private readonly _user = new BehaviorSubject<User | null>(null);
  readonly user$ = this._user.asObservable();


  constructor(private http: HttpClient, private router: Router) {
    // this.checkTokenExpiration();
  }

  login(email: string, password: string): Observable<any> {
    this.isInLogginProcessSubject.next(true);
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password }, {
      withCredentials: true
    }).pipe(
      tap((response: any) => {
        this.setUser(response.user);
        this.loggedInSubject.next(true);
        this.isInLogginProcessSubject.next(false);
      }),
      catchError((error: HttpErrorResponse) => {
        // Arrêter le loader en cas d'erreur
        this.isInLogginProcessSubject.next(false);
        if (error.status === 401) this.logout(); // Déconnecter l'utilisateur
        throw 'Une erreur est survenue. Veuillez réessayer.';
      })
    );
  }

  logout(): void {
    this.http.post(`${environment.apiUrl}/auth/logout`, {}, { withCredentials: true }).subscribe(() => {
      this.loggedInSubject.next(false);
      this.router.navigate(['/login']);
    });
  }
  setUser(user: User) {
    this._user.next(user);
  }

  hasRole(role: string): Observable<boolean> {
    return this.user$.pipe(
      map(user => user?.role.includes(role) ?? false)
    );
  }


}