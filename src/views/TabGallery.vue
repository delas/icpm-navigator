<template>
  <ion-page>
    <HeaderBar name="Gallery" />
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo.filepath" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>


  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';
import HeaderBar from "@/components/HeaderBar.vue";

const { photos, takePhoto } = usePhotoGallery();

</script>
