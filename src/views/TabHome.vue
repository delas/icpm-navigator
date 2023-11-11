<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-menu side="end" contentId="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>Account</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>You are currently logged as test@email.com.</p>
        <p>To change your configuration use the setting button below.</p>
        <ion-list>
          <ion-item>
            <ion-icon :icon="settingsOutline" slot="start" />
            <ion-label>Settings</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="logOutOutline" slot="start" />
            <ion-label>Logout</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>About the app</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-content id="main-content" :fullscreen="true">
      <img src="https://icpmconference.org/2024/wp-content/uploads/sites/9/2023/09/cph.jpg" />

      <ion-card>
        <ion-card-header>
          <ion-card-title>ICPM 2024</ion-card-title>
          <ion-card-subtitle>October 14-18, 2024; Copenhagen, Denmark</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonMenu, IonList, IonItem, IonLabel, IonButtons, IonMenuButton} from '@ionic/vue';
import { settingsOutline, logOutOutline } from "ionicons/icons";
</script>
