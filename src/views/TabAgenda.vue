<template>
  <ion-page>
    <HeaderBar name="Agenda" />
    <ion-toolbar>
      <ion-segment value="default">
        <ion-segment-button value="mon"><ion-label>Mon</ion-label></ion-segment-button>
        <ion-segment-button value="tue"><ion-label>Tue</ion-label></ion-segment-button>
        <ion-segment-button value="wed"><ion-label>Wed</ion-label></ion-segment-button>
        <ion-segment-button value="thu"><ion-label>Thu</ion-label></ion-segment-button>
        <ion-segment-button value="fri"><ion-label>Fri</ion-label></ion-segment-button>
      </ion-segment>
    </ion-toolbar>

    <ion-content id="main-content" :fullscreen="true">
      <ion-list>
        <ion-item-group v-for="session in sessions">
          <ion-item-divider sticky>
            <ion-label>{{ session.time }}</ion-label>
          </ion-item-divider>
          <ion-item-sliding>
            <ion-item v-for="subsession in session.subsessions">
              <ion-label>
                <h3>
                  {{ subsession.name }}
                  <ion-icon :name="cafeOutline"></ion-icon>
                </h3>
                <p>{{ subsession.time }}: {{ subsession.place }}</p>
              </ion-label>
            </ion-item>
          </ion-item-sliding>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="js">
import { IonPage, IonToolbar, IonContent, IonList, IonItemGroup, IonItemSliding, IonItem, IonItemDivider, IonIcon, IonSegment, IonSegmentButton, IonLabel} from '@ionic/vue';
import { cafeOutline } from 'ionicons/icons';
import HeaderBar from "@/components/HeaderBar.vue";
</script>

<script lang="js">
export default {
  data() {
    return {
      sessions: [
        {
          time: '08:00',
          subsessions: [
            {name: 'Registration', time: '08:00 - 09:00', place: 'Foyer'}
          ]
        },
        {
          time: '09:00 - 10:30',
          subsessions: [
            {name: 'COMINDS', time: '09:00 - 10:30', place: 'Workshop Room 1'},
            {name: 'EdbA', time: '09:00 - 10:30', place: 'Workshop Room 2'},
            {name: 'EduPM', time: '09:00 - 10:30', place: 'Workshop Room 3'},
            {name: 'ML4PM', time: '09:00 - 10:30', place: 'Workshop Room 4'},
            {name: 'PODS4H', time: '09:00 - 10:30', place: 'Workshop Room 5'}
          ]
        },
        {
          time: '10:30 – 11:15',
          subsessions: [
            {name: 'Coffee break', time: '10:30 – 11:15', place: 'Foyer'}
          ]
        },
      ]
    }
  }
}
</script>
