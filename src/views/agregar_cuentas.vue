<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content>
      <!-- Contenedor con gradiente -->
      <div
        class="header-container"
        :style="{
          background: 'linear-gradient(180deg, #4B39EF 0%, #000000 100%)',
        }"
      >
        <div class="header-content">
          <img src="@/assets/logo.png" alt="Logo" class="header-image" />
          <h2>Agregar Cuentas</h2>
          <p>Conecta tus finanzas</p>
        </div>
      </div>

      <!-- Sección de Cuentas Bancarias -->
      <ion-card class="card-container">
        <ion-card-header>
          <ion-card-title>Cuentas Bancarias</ion-card-title>
        </ion-card-header>
        <ion-item button detail>
          <ion-avatar slot="start" class="icon-container">
            <img src="@/assets/banco.png">
          </ion-avatar>
          <ion-label>
            <h3>Agregar Cuenta Bancaria</h3>
            <p>Conecta tu cuenta de ahorros o corriente</p>
          </ion-label>
        </ion-item>
      </ion-card>

      <!-- Sección de Tarjetas de Crédito -->
      <ion-card class="card-container">
        <ion-card-header>
          <ion-card-title>Tarjetas de Crédito</ion-card-title>
        </ion-card-header>
        <ion-item button detail>
          <ion-avatar slot="start" class="icon-container">
            <img src="@/assets/cuenta-bancaria.png">
          </ion-avatar>
          <ion-label>
            <h3>Agregar Tarjeta de Crédito</h3>
            <p>Conecta tu tarjeta de crédito</p>
          </ion-label>
        </ion-item>
      </ion-card>

      <!-- Sección de Cuentas Conectadas -->
      <ion-card class="card-container">
        <ion-card-header>
          <ion-card-title>Cuentas Conectadas</ion-card-title>
        </ion-card-header>
        <ion-item>
          <ion-avatar slot="start" class="icon-container">
            <img src="@/assets/santander.png" style="width: 80%; height:auto;">
            
          </ion-avatar>
          <ion-label>
            <h3>Banco Santander</h3>
            <p>Cuenta de Ahorros ****1234</p>
          </ion-label>
          <ion-icon slot="end" name="ellipsis-vertical"></ion-icon>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start" class="icon-container">
            <img src="@/assets/visa.png">
          </ion-avatar>
          <ion-label>
            <h3>Visa</h3>
            <p>Tarjeta de Crédito ****5678</p>
          </ion-label>
          <ion-icon slot="end" name="ellipsis-vertical"></ion-icon>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start" class="icon-container">
            <img src="@/assets/nu.png">
          </ion-avatar>
          <ion-label>
            <h3>Deposito Bajo Monto - Ahorro </h3>
            <p>Nu ****9975</p>
          </ion-label>
          <ion-icon slot="end" name="ellipsis-vertical"></ion-icon>
        </ion-item>
      </ion-card>
      

      <!-- Botón Actualizar Cuentas -->
      <ion-button expand="block"  class="login-button" @click="actualizarCuentas">
        Actualizar Cuentas
      </ion-button>
      <p class="secure-text">
        Tus datos están seguros y encriptados. Nunca compartiremos tu información financiera.
      </p>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonAvatar, IonIcon, IonButton } from '@ionic/vue';

const actualizarCuentas = () => {
  console.log('Actualizar cuentas...');
};
</script>

<style scoped>
.header-container {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;

}
inner-scroll scroll-y{
  background-color: #e0e0e0;
}
.header-content {
  color: white;
}

.header-image {
  width: 100px;
  height: 90px;
  object-fit: cover;
  border-radius: 8px;
}

.card-container {
  margin: 16px;
  background-color: #000;
}

.login-button{
  --background: #4b39ef !important;
    --background-hover: #ffff;
    --border-radius: 30px;
    --padding: 50px;
    font-weight: bold;
    width: 100%;
    height: 56px;
    padding: 0px 0px 10px 0px;
    color: #ffff;
  }

img{
  max-width: 100%;

}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.secure-text {
  text-align: center;
  margin: 24px 16px;
  color: #6c757d;
}
</style>
