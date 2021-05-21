import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUserDetails(username:string) {
    return this.http.get(`https://api.github.com/users/${username}`)
  }

  getRepos(repoUrl:string) {
    return this.http.get(repoUrl)
  }
}
