<template>
  <form>
    <v-row>
      <v-col cols="12" xxl="8" xl="8" lg="8">
        <v-card
          class="trezo-card border-radius d-block bg-white border-0 shadow-none"
        >
          <div class="v-card-header">
            <h5 class="mb-0">Add Course</h5>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Title </v-label>
                <v-text-field
                  label="Write title"
                  placeholder="E.g. Cybersecurity Awareness"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Description
                </v-label>
                <TextEditor />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Price </v-label>
                <v-text-field
                  label="Write price"
                  placeholder="E.g. $90"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Start Date
                </v-label>
                <v-text-field type="date" class="date-input"> </v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  End Date
                </v-label>
                <v-text-field type="date" class="date-input"> </v-text-field>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Instructor
                </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Olivia Clark',
                    'Ava Turner',
                    'Lucas Morgan',
                    'Isabella Cooper',
                  ]"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black"> Tags </v-label>
                <v-select
                  label="Select"
                  :items="[
                    'Technology',
                    'Science',
                    'Health & Wellness',
                    'Education',
                    'Food & Cooking',
                    'Lifestyle & Fashion',
                  ]"
                >
                </v-select>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group mb-0">
                <v-label class="d-block fw-medium text-black">
                  Course Avatar
                </v-label>
                <FileUploader />
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" xxl="4" xl="4" lg="4">
        <v-card
          class="trezo-card border-radius d-block bg-white border-0 shadow-none"
        >
          <div class="v-card-header">
            <h5 class="mb-0">Course Content</h5>
          </div>
          <div class="row">
            <div class="col-xl-12 col-md-6 col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Lesson Title
                </v-label>
                <v-text-field
                  label="Write lesson title"
                  placeholder="E.g. Course Overview"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-xl-12 col-md-6 col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Lesson Time
                </v-label>
                <v-text-field
                  label="Write lesson time"
                  placeholder="E.g. 05:30"
                  required
                ></v-text-field>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="trezo-form-group">
                <v-label class="d-block fw-medium text-black">
                  Lesson Description
                </v-label>
                <v-textarea
                  label="Type here...."
                  placeholder="E.g. It makes me feel..."
                ></v-textarea>
              </div>
            </div>
          </div>
          <div
            class="form-btn-box d-md-flex align-items-center justify-space-between"
          >
            <button type="button" class="warn">Save Course</button>
            <button type="button" class="primary">
              <i class="material-symbols-outlined"> add </i>
              Add More Field
            </button>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </form>
</template>

<script>
import TextEditor from "@/components/Common/TextEditor.vue";
import FileUploader from "@/components/Common/FileUploader.vue";

export default {
  name: "CreateCourse",
  components: {
    TextEditor,
    FileUploader,
  },
};
</script>
