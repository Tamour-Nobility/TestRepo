<template>
  <v-card class="mb-25 border-radius d-block bg-white border-0 shadow-none">
    <form>
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Event Name </v-label>
            <v-text-field
              label="Enter event name"
              placeholder="E.g. Annual Conference 2024"
              v-model="formData.eventName"
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Event Type </v-label>
            <v-select
              label="Select"
              :items="['Free', 'Paid']"
              v-model="formData.eventType"
            ></v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Price
            </v-label>
            <v-text-field
              label="Enter event price"
              placeholder="E.g. $20.00"
              v-model="formData.eventPrice"
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Event Type </v-label>
            <v-select
              label="Select"
              :items="['Online', 'Offline', 'Both']"
              v-model="formData.eventMode"
            ></v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Select Topic
            </v-label>
            <v-select
              label="Select"
              :items="[
                'Pepper Festival',
                'A Day of Comedy',
                'Replicate Oktoberfest',
                'Kite Flying Festival',
                'Music Concert',
              ]"
              v-model="formData.eventTopic"
            ></v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Vanue
            </v-label>
            <v-text-field
              label="Enter event vanue"
              placeholder="E.g. 2750 Quadra Street Victoria Road"
              v-model="formData.eventVenue"
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Country
            </v-label>
            <v-select
              label="Select"
              :items="[
                'Switzerland',
                'New Zealand',
                'Germany',
                'United States',
                'Japan',
                'Netherlands',
                'Sweden',
                'Canada',
                'United Kingdom',
                'Australia',
              ]"
              v-model="formData.eventCountry"
            ></v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event State
            </v-label>
            <v-select
              label="Select"
              :items="[
                'Florida',
                'Wisconsin',
                'Washington',
                'Nebraska',
                'Minnesota',
              ]"
              v-model="formData.eventState"
            ></v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Event City </v-label>
            <v-select
              label="Select"
              :items="['New York', 'Tokyo', 'London', 'Amsterdam', 'Paris']"
              v-model="formData.eventCity"
            ></v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Start Date
            </v-label>
            <v-text-field
              type="date"
              class="date-input"
              v-model="formData.eventStartDate"
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event End Date
            </v-label>
            <v-text-field
              type="date"
              class="date-input"
              v-model="formData.eventEndDate"
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Event Time </v-label>
            <v-select
              label="Select"
              :items="['9AM - 10AM', '11AM - 12PM', '2PM - 4PM']"
              v-model="formData.eventTime"
            ></v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Registration Deadline
            </v-label>
            <v-text-field
              type="date"
              class="date-input"
              v-model="formData.registrationDeadline"
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Organizers
            </v-label>
            <v-text-field
              label="Enter event organizers name"
              placeholder="E.g. Hand Watch"
              v-model="formData.eventOrganizers"
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Sponsors
            </v-label>
            <v-text-field
              label="Enter event sponsors name"
              placeholder="E.g. Hand Watch"
              v-model="formData.eventSponsors"
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Details
            </v-label>
            <CommonTextEditor v-model="formData.eventDetails" />
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Image
            </v-label>
            <CommonFileUploader style="min-height: 190px" />
          </div>
        </div>
      </div>
      <div class="form-btn-box">
        <button type="button" class="warn">Cancel</button>
        <button type="button" class="primary">
          <i class="material-symbols-outlined"> add </i>
          Create/Publish
        </button>
      </div>
    </form>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  eventName: "Annual Conference 2024",
  eventType: "Free",
  eventPrice: "$20.00",
  eventMode: "Online",
  eventTopic: "Pepper Festival",
  eventVenue: "2750 Quadra Street Victoria Road",
  eventCountry: "United States",
  eventState: "Florida",
  eventCity: "New York",
  eventStartDate: "",
  eventEndDate: "",
  eventTime: "9AM - 10AM",
  registrationDeadline: "",
  eventOrganizers: "Hand Watch",
  eventSponsors: "Hand Watch",
  eventDetails: "",
});
</script>
