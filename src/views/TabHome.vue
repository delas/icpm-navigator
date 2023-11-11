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
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-content id="main-content" :fullscreen="true">
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon} from '@ionic/vue';
import { settingsOutline, logOutOutline } from "ionicons/icons";
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
