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
        <ion-item v-for="page in pages" v-bind:key="page.id">
          <ion-label :routerLink="'/tabs/page/' + page.id" >{{ page.name }}</ion-label>
          <ion-badge v-if="page.label" color="danger">{{ page.label }}</ion-badge>
        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup lang="js">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonMenu, IonList, IonItem, IonLabel, IonButtons, IonMenuButton} from '@ionic/vue';
import SettingsMenu from "@/components/SettingsMenu.vue";
import HeaderBar from "@/components/HeaderBar.vue";
</script>

<script lang="js">
export default {
  data() {
    return {
      pages: [
        { id: 1, name: 'Messages from the organizers', label: 'Updated' },
        { id: 2, name: 'Information about excursion'},
        { id: 3, name: 'Travelling information', label: 'Updated'},
        { id: 4, name: 'Conference venue'},
        { id: 5, name: 'Food information'},
      ]};
    }
  }
</script>
