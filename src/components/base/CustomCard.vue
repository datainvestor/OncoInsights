<template>
  <v-hover>
    <template v-slot="{ hover }">
      <base-card v-bind="$attrs" :elevation="hover ? 0 : 12" class="px-8 py-6">
        <v-card-title class="font-weight-light" v-text="title" />
        <v-col>
          <v-card-text>
            <v-row>
              <base-subheading
                class="mb-2 mt-6 white--text"
                title="FDA Approves First AI Device to Detect Colon Lesions"
              />
              <v-btn
                outlined
                href="https://www.medscape.com/viewarticle/949081?src=WNL_mdpls_210413_mscpedit_path&uac=406895DV&spon=43&impID=3310172&faf=1"
              >Read more</v-btn>
            </v-row>
          </v-card-text>
        </v-col>

        <v-spacer></v-spacer>
        <v-col>
          <v-row class="mb-0 mt-5">
            <v-btn text color="white"> Previous</v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="white">Next ></v-btn>
          </v-row>
        </v-col>
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
