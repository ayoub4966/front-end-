import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      type: ['local', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { type, username, password, rememberMe } = this.loginForm.value;
      // Logique pour traiter la soumission du formulaire
      console.log('Type:', type);
      console.log('Nom d\'utilisateur:', username);
      console.log('Mot de passe:', password);
      console.log('Se souvenir de moi:', rememberMe);

      // Simuler une vérification de connexion
      if (username !== 'admin' || password !== 'admin123') {
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
      } else {
        this.errorMessage = null;
        // Rediriger vers la page suivante ou effectuer d'autres actions nécessaires
      }
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement';
    }
  }
}
