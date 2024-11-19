<template>
    <ion-page>
      <ion-content>
        <ion-grid>
          <ion-row>
            <!-- Header Section -->
            <ion-col size="12">
              <div class="header-container">
                <img src="@/assets/logo.png" alt="Logo" class="logo" />
                <h1>Nueva Transacción</h1>
                <p>Registra tus movimientos financieros</p>
              </div>
            </ion-col>
  
            <!-- Main Form Section -->
            <ion-col size="12">
              <ion-card>
                <!-- Transaction Type -->
                <ion-card-content>
                  <h2>Tipo de Transacción</h2>
                  <ion-segment v-model="transactionType">
                    <ion-segment-button value="income">
                      <ion-icon :icon="addCircle"></ion-icon>
                      <ion-label>Ingreso</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="expense">
                      <ion-icon :icon="removeCircle"></ion-icon>
                      <ion-label>Gasto</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="transfer">
                      <ion-icon :icon="swapHorizontal"></ion-icon>
                      <ion-label>Transferencia</ion-label>
                    </ion-segment-button>
                  </ion-segment>
                </ion-card-content>
              </ion-card>
  
              <!-- Amount Input -->
              <ion-item class="amount-input">
                <ion-label position="floating">Monto</ion-label>
                <ion-input
                  type="number"
                  v-model="amount"
                  placeholder="0.00"
                ></ion-input>
              </ion-item>
  
              <!-- Categories -->
              <ion-card>
                <ion-card-content>
                  <h2>Categoría</h2>
                  <div class="categories-grid">
                    <div
                      v-for="category in categories"
                      :key="category.id"
                      class="category-item"
                      :class="{ 'selected': selectedCategory === category.id }"
                      @click="selectCategory(category.id)"
                    >
                      <ion-icon :icon="category.icon" :style="{ color: category.color }"></ion-icon>
                      <ion-label>{{ category.name }}</ion-label>
                    </div>
                  </div>
                </ion-card-content>
              </ion-card>
  
              <!-- Date and Time -->
              <ion-card>
                <ion-card-content>
                  <h2>Fecha y Hora</h2>
                  <div class="datetime-container">
                    <ion-item button @click="openDatePicker" class="date-picker">
                      <ion-label>Fecha</ion-label>
                      <ion-text>{{ formattedDate }}</ion-text>
                      <ion-icon :icon="calendar" slot="end"></ion-icon>
                    </ion-item>
  
                    <ion-item button @click="openTimePicker" class="time-picker">
                      <ion-label>Hora</ion-label>
                      <ion-text>{{ formattedTime }}</ion-text>
                      <ion-icon :icon="time" slot="end"></ion-icon>
                    </ion-item>
                  </div>
                </ion-card-content>
              </ion-card>
  
              <!-- Description -->
              <ion-item>
                <ion-label position="floating">Descripción (opcional)</ion-label>
                <ion-textarea
                  v-model="description"
                  rows="3"
                  placeholder="Ingresa una descripción"
                ></ion-textarea>
              </ion-item>
  
              <!-- Attachment -->
              <ion-card>
                <ion-card-content>
                  <h2>Adjuntar Comprobante</h2>
                  <div class="upload-container" @click="selectFile">
                    <ion-icon :icon="cloudUpload"></ion-icon>
                    <p>Toca para subir imagen</p>
                  </div>
                </ion-card-content>
              </ion-card>
  
              <!-- Save Button -->
              <ion-button expand="block" @click="saveTransaction" class="login-button">
              <strong>Guardar Transacción</strong>
            </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonIcon,
    IonText
  } from '@ionic/vue';
  import {
    addCircle,
    removeCircle,
    swapHorizontal,
    cash,
    calendar,
    time,
    cloudUpload,
    restaurant,
    cart,
    medkit,
    car,
    add
  } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'TransactionForm',
    components: {
      IonPage,
      IonContent,
      IonGrid,
      IonRow,
      IonCol,
      IonCard,
      IonCardContent,
      IonItem,
      IonLabel,
      IonInput,
      IonTextarea,
      IonButton,
      IonSegment,
      IonSegmentButton,
      IonIcon,
      IonText
    },
    setup() {
      const transactionType = ref('expense');
      const amount = ref('');
      const description = ref('');
      const selectedCategory = ref(null);
      const selectedDate = ref(new Date());
      const selectedTime = ref(new Date());
  
      const categories = [
        { id: 1, name: 'Comida', icon: restaurant, color: '#1565C0' },
        { id: 2, name: 'Compras', icon: cart, color: '#F57C00' },
        { id: 3, name: 'Salud', icon: medkit, color: '#4CAF50' },
        { id: 4, name: 'Transporte', icon: car, color: '#E91E63' },
        { id: 5, name: 'Agregar', icon: add, color: '#00BCD4' }
      ];
  
      const selectCategory = (categoryId) => {
        selectedCategory.value = categoryId;
      };
  
      const openDatePicker = async () => {
        // Implement date picker logic
      };
  
      const openTimePicker = async () => {
        // Implement time picker logic
      };
  
      const selectFile = async () => {
        // Implement file selection logic
      };
  
      const saveTransaction = async () => {
        // Implement save logic
      };
  
      return {
        transactionType,
        amount,
        description,
        selectedCategory,
        categories,
        selectCategory,
        openDatePicker,
        openTimePicker,
        selectFile,
        saveTransaction,
        // Icons
        addCircle,
        removeCircle,
        swapHorizontal,
        cash,
        calendar,
        time,
        cloudUpload,
        // Computed properties
        formattedDate: () => selectedDate.value.toLocaleDateString(),
        formattedTime: () => selectedDate.value.toLocaleTimeString()
      };
    }
  });
  </script>
  
  <style scoped>
  .header-container {
    background: linear-gradient(to bottom, #4B39EF, #000000);
    padding: 24px;
    color: white;
    border-radius: 0 0 24px 24px;
  }
  
  .logo {
    width: 90px;
    height: 81px;
    object-fit: cover;
    border-radius: 8px;
  }
  h2{
    text-align: center;
    font-size: 20pt;
    padding: 5px;
    color: #000000;
  }
  ion-card-content{
    background-color: #636363d2;
    border-radius: 20px;
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
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 12px;
    padding: 16px 0;
  }
  
  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background-color: #f5f5f5;
    border-radius: 16px;
    cursor: pointer;
  }
  
  .category-item.selected {
    background-color: #4b39ef;
  }
  
  .category-item ion-icon {
    font-size: 32px;
    margin-bottom: 8px;
  }
  
  .datetime-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  
  .upload-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border: 2px dashed #c0c5d0;
    border-radius: 20px;
    padding: 24px;
    cursor: pointer;
  }
  
  .upload-container ion-icon {
    font-size: 40px;
    color: var(--ion-color-primary);
    margin-bottom: 8px;
    color: #4b39ef;
  }
  </style>