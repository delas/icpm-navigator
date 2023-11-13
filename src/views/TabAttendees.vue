<template>
  <ion-page>
    <Header name="Attendees" />
    <ion-content :fullscreen="true">
      <p class="ion-padding">Here is the list of all attendees:</p>
      <ion-list lines="full">
        <ion-item v-for="person in persons" :key="person.name">
          <ion-avatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>{{ person.name }}</h2>
            <p>{{ person.email }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="js">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import Header from "@/components/Header.vue";
</script>

<script lang="js">
export default {
  data() {
    return {
      persons: [
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
        { name: 'John Doe', email: 'johndoe@gmail.com' },
        { name: 'Jane Doe', email: 'janedoe@gmail.com' },
        { name: 'John Smith', email: 'johnsmith@gmail.com' },
      ]
    };
  },
};
</script>
