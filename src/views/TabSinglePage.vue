<template>
  <ion-page>
    <HeaderBar :name="title" />

    <ion-content id="main-content" :fullscreen="true">
      <div class="ion-padding" v-html="content"></div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="js">
import {IonPage, IonContent} from '@ionic/vue';
import HeaderBar from "@/components/HeaderBar.vue";
</script>

<script lang="js">
// add some page data
export default {
  data() {
    return {
      title: 'Example of a page',
      content: '<p>Some content</p><p>Some more content</p>'
    }
  }
}
</script>