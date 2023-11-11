<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Attendees</ion-title>
        <img
            slot="end"
            height="30"
            style="margin-right: 10px"
            src="https://icpmconference.org/2023/wp-content/uploads/sites/8/2022/10/icpm-logo-1.png" />
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <p>Here is the list of all attendees:</p>
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

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>

<script>
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
