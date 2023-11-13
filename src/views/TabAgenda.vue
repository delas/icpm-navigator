<template>
  <ion-page>
    <HeaderBar name="Agenda" />
    <ion-content :fullscreen="true">
      <ExploreContainer name="Agenda" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import HeaderBar from "@/components/HeaderBar.vue";
</script>
