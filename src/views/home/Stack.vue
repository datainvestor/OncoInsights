<template>
  <v-container
    id="stack"
    tag="section"
  >
    <base-card
      class="mx-auto pa-12"
      color="primary"
      dark
      width="900"
      max-width="90%"
    >
      <base-subheading
        subtitle="Monthly Plan"
        title="Our Services"
      />
    </base-card>

    <base-card
      class="mt-n4 mx-auto pa-6"
      max-width="1100"
    >
      <v-simple-table>
        <thead>

          <tr>
            <th>
              Features
            </th>
            <th>
              Free
            </th>
            <th>
              Basic
            </th>
            <th>
              Standard
            </th>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <th>
                Deluxe
              </th>
              <th>
                Premium
              </th>
            </template>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Cancer Basics: Understanding <br> cancer  types  and common  <br> terms  used in diagnosis</td>
            <td><check /></td>
            <td><check /></td>
            <td><check /></td>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td><check /></td>
              <td><check /></td>
            </template>
          </tr>

          <tr>
            <td>Personalized and comprehensive <br> treatment options with cost <br> consideration </td>
            <td><check /><p class="mb-0"><sub>(1 week)*</sub></p></td>
            <td><check /><p class="mb-0"><sub>(48h)*</sub></p></td>
            <td><check /><p class="mb-0"><sub>(24h)*</sub></p></td>
            <template v-if="$vuetify.breakpoint.mdAndUp">
               <td> <check /><p class="mb-0"><sub>(8h)*</sub></p></td>
               <td><check /><p class="mb-0"><sub>(2h)*</sub></p></td>
            </template>
          </tr>

          <tr>
            <td>Automatic timely update of new <br>treatment options your report</td>
            <td></td>
            <td><check /></td>
            <td><check /></td>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td><check /></td>
              <td><check /></td>
            </template>
          </tr>

          <tr>
            <td>Financial support options<br> and planning </td>
            <td></td>
            <td></td>
            <td><check /></td>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td><check /></td>
              <td><check /></td>
            </template>
          </tr>

          <tr>
            <td>Access to ONCO Insights Magazine<br> Workshops and Webinars</td>
            <td />
            <td />
            <td />
            <template v-if="$vuetify.breakpoint.mdAndUp">
             <td><check /></td>
             <td><check /></td>
            </template>
          </tr>

          <tr>
            <td>Speak with Professional <br> Oncologist Social Worker</td>
            <td />
            <td />
            <td />
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td />
              <td><check /></td>
            </template>
          </tr>

          <tr>
            <td>Cancer Management <br> and Healthy Living App</td>
            <td><check /><p class="mb-0"><sub>(1 week trial)</sub></p></td>
            <td><check /><p class="mb-0"><sub>(1 week trial)</sub></p></td>
            <td><check /><p class="mb-0"><sub>(1 week trial)</sub></p></td>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <td><check /><p class="mb-0"><sub>(1 week trial)</sub></p></td>
              <td><check /></td>
            </template>
          </tr>
          <tr />
        </tbody>

      </v-simple-table>
      <div class="mt-4">*Time taken to get the report</div>
    </base-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeStack',

    components: {
      Check: {
        render (h) {
          return h('v-avatar', {
            props: {
              color: '#46D5D1',
              size: 24,
            },
          }, [h('v-icon', { props: { small: true, dark: true } }, 'mdi-check')])
        },
      },
    },

    data: () => ({

    }),
  }
</script>

<style lang="sass">
  #stack
    th, td
      text-align: center
      font-size: 1rem

      &:first-child
        text-align: left

    th
      color: rgba(0, 0, 0, .7)
      font-weight: 900

    td
      color: rgba(0, 0, 0, .5)
      font-weight: 500
</style>
