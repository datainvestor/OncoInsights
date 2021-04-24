<template>
  <v-container
    id="hero"
    class="px-0"
    tag="section"
    :class="$vuetify.breakpoint.smAndDown && 'pt-0'"
  >
    <v-responsive
      class="overflow-visible"
      min-height="50vh"
    >
      <v-row
        align="center"
        align-content="center"
        class="fill-height mx-0"
        justify="space-around"
      >
        <v-slide-x-transition
          v-if="$vuetify.breakpoint.mdAndUp"
          appear
        >
          <v-col
            cols="12"
            md="5"
          >
            <base-img-card :src="require('@/assets/features/1.jpg')" />
          </v-col>
        </v-slide-x-transition>

        <v-slide-x-reverse-transition appear>
          <v-col cols="7">
            <h1
              class="font-weight-bold"
              :class="[$vuetify.breakpoint.smAndDown ? 'display-2 white--text' : 'display-4']"
            >
              ONCO <span class="font-weight-light">Insights</span>
            </h1>

            <div
              class=" mb-md-12 mb-6 mt-2"
              :class="[$vuetify.breakpoint.smAndDown ? 'headline black--text text--lighten-1' : 'grey--text title ']"
            >
              Understand your treatment options, <em>today</em>
            </div>

            <base-btn
              height="64"
              block
              class="title"
            >
              Sign Up Now
            </base-btn>
          </v-col>
        </v-slide-x-reverse-transition>

        <v-slide-y-reverse-transition appear>
          <v-col
            class="mt-12"
            cols="12"
          >
            <base-card class="pa-12">
              <v-row class="text-center">
                <v-col
                  v-for="(highlight, i) in highlights"
                  :key="i"
                  cols="12"
                  md="4"
                >
                  <v-img
                    :src="require(`@/assets/highlights/${highlight.src}`)"
                    class="mb-8"
                    contain
                    max-height="210"
                    width="100%"
                  />

                  <h2
                    class="headline font-weight-bold mb-6"
                    v-text="highlight.title"
                  />

                  <v-responsive
                    max-width="256"
                    class="grey--text body-1 mx-auto"
                    v-text="highlight.text"
                  />
                </v-col>
              </v-row>
            </base-card>
          </v-col>
        </v-slide-y-reverse-transition>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeHero',

    data: () => ({
      highlights: [
        {
          src: '1.png',
          title: 'Doctor-Approved Information',
          text: 'Trusted and well-validated source of information that get pre-approval from professionals',
        },
        {
          src: '2.png',
          title: 'Personalised Report',
          text: 'We provide a personalised comprehensive and up-to-date treatement options with cost-consideration based on in-depth assesment of your cancer and financial requirement',
        },
        {
          src: '3.png',
          title: 'Timely update',
          text: 'Data is timely-updated with our seamless cutting-edge data searching algorithm',
        },
      ],
    }),
  }
</script>
