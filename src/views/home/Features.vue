<template>
  <v-container id="features" tag="section">
    <base-subheading class="mb-12" subtitle="Treatment options made simple to understand" title="Your New Assistance and CancerCare Information Provider" />

    <v-row align="center">
      <v-col cols="12" md="6">
        <base-subheading
          :left="$vuetify.breakpoint.mdAndUp"
          subtitle="Get to know the type of treatments and complementary available for your cancer, toghether with viable financial support options"
          title="Premium Treatment Navigation"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/2.jpg')" />
      </v-col>
    </v-row>

    <v-row align="center" class="flex-row-reverse">
      <v-col cols="12" md="6">
        <base-subheading
          :right="$vuetify.breakpoint.mdAndUp"
          subtitle="Our team of oncology social workers and oncologists are available 24/7 to answer your questions regarding your personalised treatment report"
          title="Responsive OncoInsights Support Staff"
        />
      </v-col>

      <v-scroll-x-transition appear>
        <v-col>
          <base-img-card :src="require('@/assets/features/3.jpg')" />
        </v-col>
      </v-scroll-x-transition>
    </v-row>

    <v-row align="center">
      <v-col cols="12" md="6">
        <base-subheading
          :left="$vuetify.breakpoint.mdAndUp"
          subtitle="Anytime, anywhere—The power of OncoInsights is at your fingertips."
          title="Complete Control"
        />
      </v-col>

      <v-col>
        <base-img-card :src="require('@/assets/features/4.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeFeatures"
};
</script>
