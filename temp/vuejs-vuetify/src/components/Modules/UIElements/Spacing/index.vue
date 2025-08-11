<template>
  <v-card class="mb-25 spacing-box trezo-card">
    <v-tabs class="profile-tab" v-model="tab">
      <v-tab value="margins">Margins</v-tab>
      <v-tab value="paddings">Paddings</v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="margins">
          <div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.m-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;m-0&quot;</span
                >&gt;margin: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ms-auto</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ms-auto&quot;</span
                >&gt;margin-left: auto;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ms-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ms-0&quot;</span
                >&gt;margin-left: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ms-5</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ms-5&quot;</span
                >&gt;margin-left: 5px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ms-10</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ms-10&quot;</span
                >&gt;margin-left: 10px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ms-12</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ms-12&quot;</span
                >&gt;margin-left: 12px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ms-15</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ms-15&quot;</span
                >&gt;margin-left: 15px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ms-20</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ms-20&quot;</span
                >&gt;margin-left: 20px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ms-25</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ms-25&quot;</span
                >&gt;margin-left: 25px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ms-30</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ms-30&quot;</span
                >&gt;margin-left: 30px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.me-auto</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;me-auto&quot;</span
                >&gt;margin-right: auto;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.me-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;me-0&quot;</span
                >&gt;margin-right: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.me-5</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;me-5&quot;</span
                >&gt;margin-right: 5px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.me-10</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;me-10&quot;</span
                >&gt;margin-right: 10px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.me-12</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;me-12&quot;</span
                >&gt;margin-right: 12px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.me-15</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;me-15&quot;</span
                >&gt;margin-right: 15px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.me-20</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;me-20&quot;</span
                >&gt;margin-right: 20px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.me-25</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;me-25&quot;</span
                >&gt;margin-right: 25px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.me-30</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;me-30&quot;</span
                >&gt;margin-right: 30px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-0&quot;</span
                >&gt;margin-top: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-5</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-5&quot;</span
                >&gt;margin-top: 5px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-8</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-8&quot;</span
                >&gt;margin-top: 8px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-10</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-10&quot;</span
                >&gt;margin-top: 10px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-12</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-12&quot;</span
                >&gt;margin-top: 12px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-15</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-15&quot;</span
                >&gt;margin-top: 15px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-18</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-18&quot;</span
                >&gt;margin-top: 18px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-20</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-20&quot;</span
                >&gt;margin-top: 20px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-25</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-25&quot;</span
                >&gt;margin-top: 25px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mt-30</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mt-30&quot;</span
                >&gt;margin-top: 30px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-0&quot;</span
                >&gt;margin-bottom: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-5</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-5&quot;</span
                >&gt;margin-bottom: bpx;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-8</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-8&quot;</span
                >&gt;margin-bottom: 8px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-10</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-10&quot;</span
                >&gt;margin-bottom: 10px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-12</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-12&quot;</span
                >&gt;margin-bottom: 12px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-15</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-15&quot;</span
                >&gt;margin-bottom: 15px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-18</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-18&quot;</span
                >&gt;margin-bottom: 18px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-20</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-20&quot;</span
                >&gt;margin-bottom: 20px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-25</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-25&quot;</span
                >&gt;margin-bottom: 25px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.mb-30</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;mb-30&quot;</span
                >&gt;margin-bottom: 30px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
          </div>
        </v-window-item>

        <v-window-item value="paddings">
          <div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.p-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;p-0&quot;</span
                >&gt;padding: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.p-5</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;p-5&quot;</span
                >&gt;padding: 5px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.p-10</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;p-10&quot;</span
                >&gt;padding: 10px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.p-12</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;p-12&quot;</span
                >&gt;padding: 12px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.p-15</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;p-15&quot;</span
                >&gt;padding: 15px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.p-20</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;p-20&quot;</span
                >&gt;padding: 20px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.p-25</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;p-25&quot;</span
                >&gt;padding: 25px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.p-30</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;p-30&quot;</span
                >&gt;padding: 30px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pt-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pt-0&quot;</span
                >&gt;padding-top: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pt-5</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pt-5&quot;</span
                >&gt;padding-top: 5px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pt-10</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pt-10&quot;</span
                >&gt;padding-top: 10px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pt-12</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pt-12&quot;</span
                >&gt;padding-top: 12px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pt-15</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pt-15&quot;</span
                >&gt;padding-top: 15px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pt-20</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pt-20&quot;</span
                >&gt;padding-top: 20px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pt-25</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pt-25&quot;</span
                >&gt;padding-top: 25px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pt-30</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pt-30&quot;</span
                >&gt;padding-top: 30px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pb-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pb-0&quot;</span
                >&gt;padding-bottom: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pb-5</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pb-5&quot;</span
                >&gt;padding-bottom: 5px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pb-10</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pb-10&quot;</span
                >&gt;padding-bottom: 10px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pb-12</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pb-12&quot;</span
                >&gt;padding-bottom: 12px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pb-15</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pb-15&quot;</span
                >&gt;padding-bottom: 15px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pb-20</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pb-20&quot;</span
                >&gt;padding-bottom: 20px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pb-25</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pb-25&quot;</span
                >&gt;padding-bottom: 25px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pb-30</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pb-30&quot;</span
                >&gt;padding-bottom: 30px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ps-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ps-0&quot;</span
                >&gt;padding-left: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ps-5</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ps-5&quot;</span
                >&gt;padding-left: 5px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ps-10</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ps-10&quot;</span
                >&gt;padding-left: 10px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ps-12</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ps-12&quot;</span
                >&gt;padding-left: 12px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ps-15</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ps-15&quot;</span
                >&gt;padding-left: 15px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ps-20</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ps-20&quot;</span
                >&gt;padding-left: 20px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ps-25</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ps-25&quot;</span
                >&gt;padding-left: 25px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.ps-30</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;ps-30&quot;</span
                >&gt;padding-left: 30px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pe-0</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pe-0&quot;</span
                >&gt;padding-right: 0px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pe-5</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pe-5&quot;</span
                >&gt;padding-right: 5px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pe-10</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pe-10&quot;</span
                >&gt;padding-right: 10px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pe-12</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pe-12&quot;</span
                >&gt;padding-right: 12px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pe-15</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pe-15&quot;</span
                >&gt;padding-right: 15px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pe-20</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pe-20&quot;</span
                >&gt;padding-right: 20px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pe-25</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pe-25&quot;</span
                >&gt;padding-right: 25px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
            <div class="d-flex mb-25 align-items-center">
              <span class="d-block me-25 fw-semibold">.pe-30</span>
              <code>
                &lt;<span class="red">div</span>
                <span class="green">class</span>=<span class="yellow"
                  >&quot;pe-30&quot;</span
                >&gt;padding-right: 30px;&lt;/<span class="red">div</span>&gt;
              </code>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Spacing",
  data: () => ({
    tab: null,
  }),
});
</script>

<style lang="scss" scoped>
code {
  display: inline-block;
  color: var(--blackColor);

  .red {
    color: #d73a49;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>

<style lang="scss" scoped>
.profile-tab {
  &.v-slide-group {
    background-color: transparent !important;
    margin-bottom: 25px;

    .v-slide-group__container {
      .v-slide-group__content {
        .v-btn {
          margin-right: 10px;
          height: 40px;
          padding: 0 15px;
          text-transform: initial;
          color: var(--primaryColor);
          font-weight: 500;
          letter-spacing: 0;
          background-color: transparent;
          border: 1px solid var(--primaryColor);
          border-radius: 5px;
          &:last-child {
            margin-right: 0;
          }
          &.v-tab-item--selected {
            color: var(--whiteColor);
            background-color: var(--primaryColor);
          }
        }
      }
    }
  }
}
.v-tabs--density-default {
  --v-tabs-height: auto !important;
}
.v-card-text {
  padding: 0;
}
</style>
