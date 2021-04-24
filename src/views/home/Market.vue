<template>
  <v-container
    id="roadmap"
    class="hidden-sm-and-down"
    tag="section"
    fluid
  >
    <base-subheading
      class="mb-12"
      subtitle="How cancer therapy is advancing"
      title="Clinical updates"
    />

    <v-container>
      <v-row class="pt-12">
        <v-col
          cols="12"
          md="6"
        >
          <base-custom-card
            :stats="stats"
            color="#FA6F9E"
            dark
            title="Today's FDA Approval"
            width="100%"
            height="100%"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <base-info-card
            :stats="stats2"
            color="secondary"
            dark
            title="Most anticipated cancer drug launches of 2021"
            width="100%"
            height="100%"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeMarket',

    data: () => ({
      stats: [
        { title: '797,054,934', subtitle: 'Total Supply' },
        { title: '2,945,066', subtitle: 'EQL Burnt' },
        { title: '48,385', subtitle: 'Transactions' },
        { title: '18', subtitle: 'Decimals' },
      ],
      stats2: [
        { title: 'TG-1303', subtitle: 'Chronic Lymphotic Leukemia' },
        { title: 'Umbralisib', subtitle: 'Marginal Zone' },
        { title: 'Etrolizumab', subtitle: 'Ulcerative Colitis' },
        { title: 'Iptatasertib', subtitle: 'Breast Cancer' },
        { title: 'PDR001', subtitle: 'Melanoma' },
        { title: 'Pemazyre', subtitle: 'Bladde Cancer' },
      ],
    }),
  }
</script>
