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
        <ion-item-group v-for="(session, sindex) in sessions" v-bind:key="sindex">
          <ion-item-divider sticky>
            <ion-label>{{ session.time }}</ion-label>
          </ion-item-divider>
          <ion-item-sliding>
            <ion-item v-for="(subsession, index) in session.subsessions" v-bind:key="index">
              <ion-icon slot="end" v-if="subsession.icon == 'coffee'" :icon="icons.cafeOutline" />
              <ion-icon slot="end" v-if="subsession.icon == 'registration'" :icon="icons.idCardOutline" />
              <ion-icon slot="end" v-if="subsession.icon == 'lunch'" :icon="icons.fastFoodOutline" />
              <ion-icon slot="end" v-if="subsession.icon == 'star'" :icon="icons.starOutline" />
              <ion-label>
                <h3 class="ion-text-wrap" v-html="subsession.name"></h3>
                <p v-if="subsession.time">{{ subsession.time }}</p>
                <p>{{ subsession.place }}</p>
              </ion-label>
            </ion-item>
          </ion-item-sliding>
        </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="js">
import {
  IonPage,
  IonToolbar,
  IonContent,
  IonList,
  IonItemGroup,
  IonItemSliding,
  IonItem,
  IonItemDivider,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonAvatar
} from '@ionic/vue';
import * as icons from 'ionicons/icons'
// import { idCardOutline, cafeOutline } from 'ionicons/icons'
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
            {name: 'Registration', place: 'Building 116 - Foyer', icon: 'registration'},
          ]
        },
        {
          time: '09:00 - 10:30',
          subsessions: [
            {name: 'COMINDS', place: 'Building 116 - Workshop Room 1'},
            {name: 'EdbA', place: 'Building 116 - Workshop Room 2'},
            {name: 'EduPM', place: 'Building 116 - Workshop Room 3'},
            {name: 'ML4PM', place: 'Building 116 - Workshop Room 4'},
            {name: 'PODS4H', place: 'Building 116 - Workshop Room 5'}
          ]
        },
        {
          time: '10:30 – 11:15',
          subsessions: [
            {name: 'Coffee break', place: 'Building 116 - Foyer', icon: 'coffee'},
          ]
        },
        {
          time: '10:30 - 12:30',
          subsessions: [
            {name: '<strong>Keynote</strong><br>Title: Everything there is to Know about Stochastically Known Logs', place: 'Building 116 - Main Auditorium', icon: 'star'},
          ]
        },
        {
          time: '12:30 – 14:00',
          subsessions: [
            {name: 'Lunch', time: '12:30 – 14:00', place: 'Building 101 - Glass Salen', icon: 'lunch'},
          ]
        },
        {
          time: '14:00 - 15:30',
          subsessions: [
            {name: 'COMINDS', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 1'},
            {name: 'EdbA', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 2'},
            {name: 'EduPM', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 3'},
            {name: 'ML4PM', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 4'},
            {name: 'PODS4H', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 5'}
          ]
        },
        {
          time: '15:30 – 16:00',
          subsessions: [
            {name: 'Coffee break', time: '10:30 – 11:15', place: 'Building 116 - Foyer', icon: 'coffee'},
          ]
        },
        {
          time: '16:00 - 17:30',
          subsessions: [
            {name: 'COMINDS', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 1'},
            {name: 'EdbA', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 2'},
            {name: 'EduPM', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 3'},
            {name: 'ML4PM', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 4'},
            {name: 'PODS4H', time: '09:00 - 10:30', place: 'Building 116 - Workshop Room 5'}
          ]
        },
      ]
    }
  }
}
</script>
