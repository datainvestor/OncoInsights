<template>
  <v-container id="about" tag="section">
    <base-subheading class="mb-12 primary--text" tag="h1" title="Our Mission Statement" />

    <v-row class="mb-12" justify="center">
      <v-col cols="12" md="7" class="headline font-weight-light">
        <p>It is wonderful that we have many cancer drugs in development and on the market. However, the cancer treatment options are a bit overwhelming at times for both the patients and the doctors that they cannot keep up with. Therefore, it is necessary to have a tool to gather the big data to quantify clinical benefit, toxicity and out-of-pocket drug costs so physicians and patients can compare treatment options with cost as a consideration to come up with the most suitable treatment plan for the patients.</p>

        <p>
          <b>OncoInsights</b> uses our cutting-edge algorithm to assess the value of cancer treatment options and provide cancer patients and oncologists with personalised, comprehensive and professional information on available treatment options with cost-consideration and up-to-date advancements in oncology.
        </p>

        <p>Our report presents alternative treatment options in a more easily digestible way that allows both physicians and patients to make sense of the explosions of advancements in cancer treatment and drug options and to use them effectively.</p>
      </v-col>
    </v-row>

    <base-subheading class="mb-8 primary--text" title="Leadership" />

    <v-row class="mb-12" justify="center">
      <v-col v-for="(member, i) in team.slice(0, 3)" :key="i" class="text-center" cols="12" md="4">
        <v-avatar class="mb-4" size="140">
          <v-img :src="require(`@/assets/Multimedia_(303).jpg`)" />
        </v-avatar>

        <h3 class="headline primary--text" v-text="member.name" />

        <div class="text-uppercase subtitle-1 font-weight-bold" v-text="member.pos" />
      </v-col>
    </v-row>

    <base-subheading class="mb-8 primary--text" title="Outreach" />

    <v-row class="mb-12" justify="center">
      <v-col v-for="(member, i) in team.slice(3, 5)" :key="i" class="text-center" cols="12" md="4">
        <v-avatar class="mb-4" size="140">
          <v-img :src="require(`@/assets/Multimedia_(303).jpg`)" />
        </v-avatar>

        <h3 class="headline primary--text" v-text="member.name" />

        <div class="text-uppercase subtitle-1 font-weight-bold" v-text="member.pos" />
      </v-col>
    </v-row>

    <base-subheading class="mb-8 primary--text" title="Advisor" />

    <v-row justify="center">
      <v-col v-for="(member, i) in team.slice(5, 6)" :key="i" class="text-center" cols="12" md="4">
        <v-avatar class="mb-4" size="140">
          <v-img :src="require(`@/assets/Multimedia_(303).jpg`)" />
        </v-avatar>

        <h3 class="headline primary--text" v-text="member.name" />

        <div class="text-uppercase subtitle-1 font-weight-bold" v-text="member.pos" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutIndex",

  data: () => ({
    stats: [
      { title: "797,054,934", subtitle: "Total Supply" },
      { title: "2,945,066", subtitle: "EQL Burnt" },
      { title: "48,385", subtitle: "Transactions" },
      { title: "18", subtitle: "Decimals" }
    ],
    stats2: [
      { title: "$0.0018", subtitle: "USD Price" },
      { title: "$582,457", subtitle: "Market Cap" },
      { title: "$546", subtitle: "24H Volume" },
      { title: "6.27%", subtitle: "24H Change" }
    ],
    team: [
      {
        name: "Susan Crocket",
        src: "https://randomuser.me/api/portraits/men/34.jpg",
        pos: "Founder & CEO",
        blurb: "Cras risus ipsum faucibus ut nullam quis ante"
      },
      {
        name: "James Crocket",
        src: "https://randomuser.me/api/portraits/men/34.jpg",
        pos: "Co-founder & CTO",
        blurb: "Cras risus ipsum faucibus ut nullam"
      },
      {
        name: "Jason Zimmer",
        src: "https://randomuser.me/api/portraits/men/14.jpg",
        pos: "Lead Developer",
        blurb: "Cras risus ipsum faucibus ut nullam quis"
      },
      {
        name: "Ashley Lively",
        src: "https://randomuser.me/api/portraits/women/27.jpg",
        pos: "Oncologist Social Worker",
        blurb: "Cras risus ipsum faucibus ut nullam quis ante, nullam quis ante"
      },
      {
        name: "Jake Grot",
        src: "https://randomuser.me/api/portraits/men/27.jpg",
        pos: "Oncologist Social Worker",
        blurb: "Cras risus ipsum faucibus ut nullam quis ante, nullam quis ante"
      },
      {
        name: "Stacey Wagner M.D, Ph.D",
        src: "https://randomuser.me/api/portraits/women/6.jpg",
        pos: "Professional Oncologist",
        blurb: "Cras risus ipsum faucibus ut nullam quis ante"
      },
      {
        name: "Jason Anderson",
        src: "https://randomuser.me/api/portraits/men/41.jpg",
        pos: "Designer",
        blurb: "Cras risus ipsum faucibus ut nullam quis ante"
      }
    ]
  })
};
</script>
