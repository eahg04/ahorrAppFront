<template>
    <IonPage>
      <IonContent class="ion-padding" fullscreen>
        <!-- Fondo con gradiente -->
        <div class="container">
          <!-- Logo -->
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
  
  
          <!-- Formulario -->
          <form @submit.prevent="login">
            <!-- Correo electrónico -->
            <IonItem lines="none" class="custom-input">
              <IonLabel position="floating">Correo Electrónico</IonLabel>
              <IonInput v-model="email" type="email" clear-input required />
            </IonItem>
  
            <!-- Contraseña -->
            <IonItem lines="none" class="custom-input">
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput v-model="password" :type="passwordVisibility ? 'text' : 'password'" clear-input required />
              <IonIcon :icon="passwordVisibility ? eyeOutline : eyeOffOutline" @click="togglePasswordVisibility"
                slot="end" />
            </IonItem>
  
            <!-- Botón de inicio de sesión -->
            <IonButton expand="block" type="submit" class="login-button">
              <strong> Iniciar Sesión </strong>
            </IonButton>
          </form>
  
          <!-- Recuperar contraseña -->
          <div class="forgot-password">
            <p @click="forgotPassword"><strong>¿Olvidaste tu contraseña?</strong></p>
          </div>
  
          <!-- Divider -->
          <div class="separator-container">
      <div class="line"></div>
      <span class="text">OR</span>
      <div class="line"></div>
    </div>

    
  
          <!-- Botones de redes sociales -->
          <div class="social-buttons">
            <img src="@/assets/google_logo_icon_147282-2.png" class="social-icon" />
            <img src="@/assets/social_apple_mac_65.png" class="social-icon" />
            <img src="@/assets/facebook_logo.png" class="social-icon" />
          </div>
  
          <!-- Registro -->
          <div class="register">
            <p>¿No tienes una cuenta?</p>
            <span @click="register">Regístrate</span>
          </div>
          <div>
            <img src="@/assets/logo-pg.png" class="logo-poli">
          </div>
          <!--Footer-->
          <footer class="footer">
            <p>&copy; 2024 <span class="creator">Grupo 8 Enfasis en programacion Movil</span>. Todos los derechos reservados.</p>
            <p>
              Desarrollado por: <span class="creator">Oscar Javier Dominguez Ramirez Cod</span> |
              <a href="mailto:[correo@ejemplo.com]" class="contact-link">Contacto</a>
            </p>
          </footer>
        </div>
      </IonContent>
    </IonPage>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/vue';
  import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
  
  // Controladores y estados
  const email = ref('');
  const password = ref('');
  const passwordVisibility = ref(false);
  
  const togglePasswordVisibility = () => {
    passwordVisibility.value = !passwordVisibility.value;
  };
  
  // Función de inicio de sesión
  const login = () => {
    console.log('Iniciando sesión con:', email.value, password.value);
  };
  
  // Funciones adicionales
  const forgotPassword = () => {
    console.log('Recuperar contraseña');
  };
  
  const register = () => {
    console.log('Ir a página de registro');
  };
  </script>
  
  <style scoped>


  /* Estilos para el formulario */
  .login-form {
    width: 90%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f1f4f8;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Estilo para los elementos del formulario */
  .custom-item {
    --background: #ffffff;
    --border-radius: 30px;
    --padding-start: 12px;
    --padding-end: 12px;
    border-radius: 50%;
    margin-bottom: 20px;
    padding: 10px;
  }
  
  .custom-input {
    --background: #f2f4f7; /* Color de fondo */
    --border-radius: 50px; /* Bordes redondeados */
    --padding-start: 16px;
    --padding-end: 16px;
    --inner-padding-end: 20px;
    --color: #000; /* Color del texto */
    padding: 0 0 10px 0;
    width: 100%;
    height: auto;
  }
  
  .custom-label {
    color: #cc2900;
    font-size: 1rem;
  }
  
  .custom-input {
    --color: #333;
    --placeholder-color: #aaa;
  }
  
  /* Botón de inicio de sesión */
  .login-button {
    --background: #4b39ef;
    --background-hover: #ffff;
    --border-radius: 30px;
    --padding: 50px;
    font-weight: bold;
    width: 100%;
    height: 56px;
    padding: 0px 0px 10px 0px;
  }
  
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(to bottom, #4B39EF, #000);
    border-radius: 32px;
  }
  
  .logo {
    width: 280px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  .logo-poli {
    width: 150px;
    height: auto;
    object-fit: cover;
    margin-bottom: 20px;
    padding: 20px 0 0 0;
  }
  
  .banner {
    width: 100%;
    max-width: 324px;
    height: auto;
    margin-bottom: 24px;
  }
  
  .login-button {
    margin-top: 24px;
    border-radius: 50%;
    color: rgb(248, 248, 248);
    font-family: sans-serif;
  }
  
  .forgot-password {
    margin-top: 20px;
    cursor: pointer;
    color: rgb(75, 57, 239);
  
  }
  
  .divider {
    display: flex;
    align-items: center;
    margin: 24px 0;
    color: white;
  }
  
  .separator-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 16px 0;
  }
  
  
  .line {
    flex-grow: 1;
    height: 1px;
    background-color: #e0e3e7;
  }
  
  .text {
    color: #a1a1a1;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
  span .middle-line{
    border-top: 1px solid #e0e3e7;
  }
  
  .social-buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 12px;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f1f4f8;
    object-fit: contain;
    align-content: center;
    padding: 5px;
    cursor: pointer;
  
  }
  
  .register {
    display: flex;
    gap: 4px;
    cursor: pointer;
  }
  
  .register span {
    color: #4B39EF;
    font-weight: 600;
    padding: 16px 0px 16px 0px;
  }
  
  .footer {
    text-align: center;
    padding: 20px;
    background-color: transparent;
    color: #3417b8;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    border-top: 1px solid #e0e3e7;
  }
  
  .footer p {
    margin: 10px 0;
  }
  
  .creator {
    font-weight: bold;
    color: #007acc; /* Cambia este color según tu diseño */
  }
  
  .contact-link {
    color: #007acc;
    text-decoration: none;
  }
  
  .contact-link:hover {
    text-decoration: underline;
  }
  
  </style>
  