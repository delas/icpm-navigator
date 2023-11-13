<template>
  <ion-page>
    <HeaderBar name="Home" />

    <ion-content id="main-content" :fullscreen="true">
      <img src="https://icpmconference.org/2024/wp-content/uploads/sites/9/2023/09/cph.jpg" />

      <ion-card>
        <ion-card-header>
          <ion-card-title>ICPM 2024</ion-card-title>
          <ion-card-subtitle>October 14-18, 2024</ion-card-subtitle>
          <ion-card-subtitle>Copenhagen, Denmark</ion-card-subtitle>
        </ion-card-header>
      </ion-card>


      <p class="ion-padding" style="font-size: 1.5rem; margin-bottom: 0">
        Pages
      </p>
      <ion-list lines="full">
        <ion-item button="true">
          <ion-label>Messges from the organizers</ion-label>
          <ion-badge color="danger">Updated!</ion-badge>
        </ion-item>
        <ion-item button="true">
          <ion-label>Information about excursion</ion-label>
        </ion-item>
        <ion-item button="true">
          <ion-label>Travelling information</ion-label>
        </ion-item>
        <ion-item button="true">
          <ion-label>Conference venue</ion-label>
          <ion-badge color="danger">Updated!</ion-badge>
        </ion-item>
        <ion-item button="true">
          <ion-label>Food information</ion-label>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonMenu, IonList, IonItem, IonLabel, IonButtons, IonMenuButton} from '@ionic/vue';
import SettingsMenu from "@/components/SettingsMenu.vue";
import HeaderBar from "@/components/HeaderBar.vue";
</script>
