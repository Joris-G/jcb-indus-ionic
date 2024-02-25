import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { catchError, delay, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  private isInLogginProcessSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isInLogginProcess$: Observable<boolean> = this.isInLogginProcessSubject.asObservable();

  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {
    this.checkTokenExpiration();
  }

  login(username: string, password: string): Observable<any> {
    this.isInLogginProcessSubject.next(true);
    return this.http.post<any>('votre/api/login', { username, password }).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.loggedInSubject.next(true);
          this.startTokenExpirationTimer();
        }
        this.isInLogginProcessSubject.next(false);
      }),
      catchError((error: HttpErrorResponse) => {
        // Arrêter le loader en cas d'erreur
        this.isInLogginProcessSubject.next(false);
        if (error.status === 401) { // Si erreur d'authentification
          this.logout(); // Déconnecter l'utilisateur
        }
        throw 'Une erreur est survenue. Veuillez réessayer.';
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false);
    this.stopTokenExpirationTimer();
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private startTokenExpirationTimer(): void {
    const tokenExpirationTime = 15 * 60 * 1000; // 15 minutes en millisecondes
    this.tokenExpirationTimer = setTimeout(() => {
      // Afficher l'alerte modale
      // ...
    }, tokenExpirationTime - 2 * 60 * 1000); // Afficher l'alerte 2 minutes avant l'expiration
  }

  private stopTokenExpirationTimer(): void {
    clearTimeout(this.tokenExpirationTimer);
  }

  private checkTokenExpiration(): void {
    const token = this.getToken();
    if (token) {
      const expirationDate = new Date(new Date().getTime() + 15 * 60 * 1000); // Date d'expiration du token
      const now = new Date();
      const expiresIn = expirationDate.getTime() - now.getTime();
      this.startTokenExpirationTimer();
    }
  }
}