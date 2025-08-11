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
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Event Type </v-label>
            <v-select label="Select" :items="['Free', 'Paid']"> </v-select>
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
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Event Type </v-label>
            <v-select label="Select" :items="['Online', 'Offline', 'Both']">
            </v-select>
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
            >
            </v-select>
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
            >
            </v-select>
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
            >
            </v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Event City </v-label>
            <v-select
              label="Select"
              :items="['New York', 'Tokyo', 'London', 'Amsterdam', 'Paris']"
            >
            </v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Start Date
            </v-label>
            <v-text-field type="date" class="date-input"> </v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event End Date
            </v-label>
            <v-text-field type="date" class="date-input"> </v-text-field>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black"> Event Time </v-label>
            <v-select
              label="Select"
              :items="['9AM - 10AM', '11AM - 12PM', '2PM - 4PM']"
            >
            </v-select>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Registration Deadline
            </v-label>
            <v-text-field type="date" class="date-input"> </v-text-field>
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
              required
            ></v-text-field>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="trezo-form-group">
            <v-label class="d-block fw-medium text-black">
              Event Details
            </v-label>
            <CommonTextEditor />
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

<script>
export default {
  name: "CreateAnEvent",
};
</script>
