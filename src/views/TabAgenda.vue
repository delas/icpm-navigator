<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Agenda</ion-title>
        <img
            slot="end"
            height="30"
            style="margin-right: 10px"
            src="https://icpmconference.org/2023/wp-content/uploads/sites/8/2022/10/icpm-logo-1.png" />
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Agenda" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
