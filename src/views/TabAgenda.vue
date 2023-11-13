<template>
  <ion-page>
    <Header name="Agenda" />
    <ion-content :fullscreen="true">
      <ExploreContainer name="Agenda" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from "@/components/Header.vue";
</script>
