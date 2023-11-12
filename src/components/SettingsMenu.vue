<template>
  <ion-menu side="end" contentId="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <img src="/public/img/icpm-logo-1.png" />
        <p>You are currently logged in as test@email.com.</p>
      </div>
      <ion-list lines="full">
        <ion-item button="true">
          <ion-label>
            <ion-icon :icon="settingsOutline" slot="start" />
            Settings
          </ion-label>
        </ion-item>
        <ion-item button="true">
          <ion-label>
            <ion-icon :icon="informationCircleOutline" slot="start" />
            About the app
          </ion-label>
        </ion-item>
        <ion-item button="true">
          <ion-label>
            <ion-icon :icon="logOutOutline" slot="start" />
            Logout
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
import {informationCircleOutline, logOutOutline, settingsOutline} from "ionicons/icons";
import {IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar} from "@ionic/vue";
</script>