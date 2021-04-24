<template>
  <v-toolbar
    id="core-toolbar"
    color="transparent"
    flat
    height="128"
  >
    <v-toolbar-title class="display-1 font-weight-black d-inline-flex px-0 px-md-8 align-center">
      <router-link
        :class="$route.name !== 'home' ? 'primary--text' : 'white--text'"
        to="/"
      >
         <v-avatar
          class="mr-3"
          size="48"
          tile
        >
          <v-img
            contain
            :src="require(`@/assets/logowhite.png`)"
          />
        </v-avatar>
        <span class="hidden-sm-and-down">
          ONCO&nbsp;<span class="font-weight-light">Insights</span>
        </span>
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-btn
      :dark="$vuetify.breakpoint.smAndDown"
      :icon="$vuetify.breakpoint.smAndDown"
      class="mr-3"
      text
      to="/about"
      x-large
    >
      <span v-if="$vuetify.breakpoint.mdAndUp">
        About
      </span>

      <v-icon v-else>
        mdi-information
      </v-icon>
    </v-btn>

    <v-btn
      :dark="$vuetify.breakpoint.smAndDown"
      :icon="$vuetify.breakpoint.smAndDown"
      class="mr-3"
      text
      x-large
    >
      <span v-if="$vuetify.breakpoint.mdAndUp">
        Contact us
      </span>

      <v-icon v-else>
        mdi-file
      </v-icon>
    </v-btn>

    <base-btn
      :color="$vuetify.breakpoint.mdAndUp ? 'primary' : 'white'"
      :dark="$vuetify.breakpoint.smAndDown"
      :fab="$vuetify.breakpoint.smAndDown"
      :min-height="$vuetify.breakpoint.mdAndUp ? 64 : undefined"
      :min-width="$vuetify.breakpoint.mdAndUp ? 175 : undefined"
      :x-large="$vuetify.breakpoint.mdAndUp"
      class="mr-3"
    >
      <span v-if="$vuetify.breakpoint.mdAndUp">
        Donate NOW
      </span>

      <v-icon
        v-else
        color="primary"
      >
        mdi-credit-card-settings-outline
      </v-icon>
    </base-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'CoreToolbar',
  }
</script>

<style lang="sass">
  #core-toolbar
    a
      text-decoration: none
</style>
