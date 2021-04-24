<template>
  <v-hover>
    <template v-slot="{ hover }">
      <base-card v-bind="$attrs" :elevation="hover ? 0 : 12" class="px-8 py-6">
        <v-card-title class="font-weight-light" v-text="title" />

        <v-card-text>
          <v-row v-for="(stat, i) in stats" :key="i">
            <div class="font-weight-bold headline white--text mb-2" v-text="stat.title" />
            <v-spacer></v-spacer>

            <span class="text-uppercase title font-weight-bold" v-text="stat.subtitle" />
          </v-row>
        </v-card-text>
        <v-row justify="end">
           <v-spacer></v-spacer>
        <v-btn outlined class="text-right">1. TG-1303 ></v-btn>
        </v-row>
      </base-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: "InfoCard",

  props: {
    stats: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
