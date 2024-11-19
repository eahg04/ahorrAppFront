<template>
    <ion-page>
      <ion-content :fullscreen="true" class="ion-padding">
        <!-- Header Section with Gradient -->
        <div class="gradient-header">
          <div class="profile-section">
            <ion-avatar>
              <img src="@/assets/perfil.jpg" alt="Profile" />
            </ion-avatar>
            <h2 class="white-text">Cuenta Principal</h2>
            <p class="light-text">Tu dinero, Tu control</p>
          </div>
        </div>
  
        <!-- Main Content Section -->
        <div class="main-content">
          <!-- Balance Card -->
          <ion-card class="card">
            <ion-card-content>
              <div class="balance-section">
                <h3>Balance Total</h3>
                <h1 class="primary-color"><strong>$12,345.67</strong></h1>
                <div class="transaction-row">
                  <span class="label">Income</span>
                  <span class="amount success">+$850.766</span>
                </div>
                <div class="transaction-row">
                  <span class="label">Expenses</span>
                  <span class="amount danger">-$472.346</span>
                </div>
              </div>
            </ion-card-content>
          </ion-card>
  
          <!-- Quick Actions Section -->
          <h3>Acciones Rápidas</h3>
          <div class="quick-actions">
            <div class="action-item">
              <ion-button fill="clear" class="action-button primary">
                <div class="action-content">
                  <ion-icon :icon="cashOutline" />
                </div>
              </ion-button>
              <span class="text">Envío</span>
            </div>
  
            <div class="action-item">
              <ion-button fill="clear" class="action-button secondary">
                <div class="action-content">
                  <ion-icon :icon="businessOutline" />
                </div>
              </ion-button>
              <span class="text">Depósito</span>
            </div>
  
            <div class="action-item">
              <ion-button fill="clear" class="action-button tertiary">
                <div class="action-content">
                  <ion-icon :icon="cardOutline" />
                </div>
              </ion-button>
              <span class="text">Tarjetas</span>
            </div>
  
            <div class="action-item">
              <ion-button fill="clear" class="action-button success">
                <div class="action-content">
                  <ion-icon :icon="statsChartOutline" />
                </div>
              </ion-button>
              <span class="text">Perspectivas</span>
            </div>
          </div>
  
          <!-- Recent Transactions Section -->
          <h3>Transacciones Recientes</h3>
          <ion-card class="card-transactions">
            <ion-card-content>
              <ion-list>
                <ion-item v-for="(transaction, index) in recentTransactions" 
                         :key="index"
                         lines="full">
                  <ion-avatar slot="start">
                    <div class="transaction-icon">
                      <ion-icon :icon="transaction.icon" />
                    </div>
                  </ion-avatar>
                  <ion-label>
                    <h2>{{ transaction.name }}</h2>
                    <p>{{ transaction.date }}</p>
                  </ion-label>
                  <ion-note slot="end" :color="transaction.amount.includes('-') ? 'danger' : 'success'">
                    {{ transaction.amount }}
                  </ion-note>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </ion-card>
          <ion-button expand="block" class="login-button">
            <strong>Ver todas las transacciones</strong>
          </ion-button>
          <footer class="footer">
              <p>&copy; 2024 <span class="creator">Grupo 8 Enfasis en programacion Movil</span>. <br>Todos los derechos reservados.</p>
              <p>
                Desarrollado por: <span class="creator">Oscar Javier Dominguez Ramirez Cod</span> |
                <a href="mailto:[correo@ejemplo.com]" class="contact-link">Contacto</a>
              </p>
            </footer>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonAvatar
  } from '@ionic/vue'
  import {
    cashOutline,
    businessOutline,
    cardOutline,
    statsChartOutline,
    cartOutline,
    restaurantOutline,
    carOutline
  } from 'ionicons/icons'
  
  export default defineComponent({
    name: 'FinanceHome',
    components: {
      IonPage,
      IonContent,
      IonCard,
      IonCardContent,
      IonButton,
      IonIcon,
      IonList,
      IonItem,
      IonLabel,
      IonNote,
      IonAvatar
    },
    setup() {
      const recentTransactions = [
        {
          name: 'Mercado Zapatoca',
          date: 'May 15, 2023',
          amount: '-$250.570',
          icon: cartOutline
        },
        {
          name: 'Texaco',
          date: 'May 14, 2023',
          amount: '-$55.000',
          icon: carOutline
        },
        {
          name: 'Crepes & Waffles',
          date: 'May 13, 2023',
          amount: '-$72.850',
          icon: restaurantOutline
        }
      ]
  
      return {
        cashOutline,
        businessOutline,
        cardOutline,
        statsChartOutline,
        recentTransactions
      }
    }
  })
  </script>
  
  <style scoped>
  :root {
    --primary-color: #1976D2;
    --error-color: #F44336;
    --text-primary: #000000;
    --text-secondary: #757575;
  }
  
  .gradient-header {
    background: linear-gradient(to bottom, #4B39EF, #000000);
    padding: 24px;
    border-radius: 0 0 24px 24px;
    margin: -16px -16px 0 -16px;
  }
  
  .profile-section {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  
  .card{
    border-radius: 30px;
    height: auto;
    padding: 30px;
    margin: 0 0 30px 0;
    background-color: #F1F4F8;
    box-shadow: #999;
  }
  .card-transactions{
    border-radius: 30px;
    height: auto;
    padding: 30px;
    margin: 0 0 30px 0;
    background-color: #0c0c0cea;
    box-shadow: #999;
  }
  .card-content-md h3{
    font-size: 24pt;
    color: #000000;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
  h3{
    font-size: 24pt;
    color: #000000;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 20px;
  }
  h2{
    font-weight: bold;
    font-size: 12pt;
  }
  
  
  
  .text{
    color: #000000;
  }
  
  ion-avatar {
    width: 70px;
    height: 70px;
    padding-top: 10px;
  }
  
  ion-note{
    color: #da2707;
    font-size: 14pt;
    padding-top:50px;
  }
  
  
  .white-text {
    color: white;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }
  
  .light-text {
    color: #E0E0E0;
    margin: 8px 0 0 0;
  }
  
  .main-content {
    margin-top: -24px;
    background: var(--ion-background-color);
    padding: 24px;
    background-color: #fff;
    width: 100%;
    text-align: center;
  }
  
  .balance-section {
    text-align: center;
    color: #999;
  }
  
  .balance-section h1 {
    font-size: 36px;
    margin: 16px 0;
    color: #4B39EF;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 44pt;
  }
  
  .transaction-row {
    display: flex;
    justify-content: space-between;
    font-size: 16pt;
    color: #57636C;
  }
  
  .quick-actions {
    display: flex;
    justify-content: space-between;
    padding-top: 25px;
    
  }
  
  .action-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  
  
  .action-button {
    --padding-start: 0;
    --padding-end: 0;
    width: 60px;
    height: 60px;
  }
  .login-button {
      --background: #4b39ef;
      --background-hover: #ffff;
      --border-radius: 30px;
      --padding: 50px;
      font-weight: bold;
      width: 100%;
      height: 56px;
      padding: 0px 0px 10px 0px;
      color: #E0E0E0;
    }
  
  .action-content {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50% / 50%;
  }
  
  .primary .action-content {
    background: var(--ion-color-primary);
    background-color: #4b39ef;
  }
  
  .secondary .action-content {
    background: var(--ion-color-secondary);
    background-color: #39dfb5;
  }
  
  .tertiary .action-content {
    background: var(--ion-color-tertiary);
    background-color: #f8a50a;
  }
  
  .success .action-content {
    background: var(--ion-color-success);
    background-color: #39df4f;
  }
  
  .action-content ion-icon {
    font-size: 24px;
    color: white;
  }
  
  .transaction-icon {
    background: #E0E0E0;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  
  .transaction-icon ion-icon {
    font-size: 24px;
    color: var(--ion-color-primary);
  
  }
  
  .view-all-button {
    margin-top: 24px;
    --border-radius: 28px;
  }
  
  .primary-color {
    color: var(--ion-color-primary);
  }
  
  .success {
    color: var(--ion-color-success);
  }
  
  .danger {
    color: var(--ion-color-danger);
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