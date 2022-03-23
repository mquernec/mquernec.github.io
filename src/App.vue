<!-- NEW - add a route to the profile page -->
<template>
    <v-app>
      <v-app-bar   fixed >
         <v-spacer></v-spacer>
 <v-select
          :items="years"
          label="Année"
        ></v-select>
        <v-select
          :items="months"
          label="Mois"
        ></v-select>
        <v-speed-dial
     class="mx-2"
      fab
      dark
      v-model="fab"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-magnify
          </v-icon>
        </v-btn>
      </template>
        <v-btn
        fab
        dark
        small
        color="amber"
      >  <v-icon dark >mdi-trophy</v-icon> </v-btn>
       <v-btn
        fab
        dark
        small
        color="cyan"
      >  <v-icon dark > mdi-seal </v-icon> </v-btn>
       <v-btn
        fab
        dark
        small
        color="purple"
      >  <v-icon dark >mdi-podium</v-icon> </v-btn>
       <v-btn
        fab
        dark
        small
        color="teal"
      >  <v-icon dark> mdi-tooltip-account </v-icon> </v-btn>
       <v-btn
        fab
        dark
        small
        color="orange"
      >  <v-icon dark> mdi-earth </v-icon>  </v-btn>
      <v-btn
        fab
        dark
        small
        color="orange"
      >   <v-icon > mdi-spin mdi-cog-clockwise</v-icon></v-btn>
        <v-btn
        fab
        dark
        small
        color="orange"
      >      <v-icon >mdi-hook</v-icon></v-btn>
        <v-btn
        fab
        dark
        small
        color="orange"
      >      <v-icon >mdi-office-building</v-icon>   </v-btn>
        <v-btn
        fab
        dark
        small
        color="orange"
      >      <v-icon >mdi-fish</v-icon> </v-btn>
       <v-btn
        fab
        dark
        small
        color="orange"
      >       <v-icon >mdi-butterfly</v-icon> </v-btn>
     
    </v-speed-dial>
         <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-home
      </v-icon>
    </v-btn>
      </v-app-bar>
 
      <v-main>
         <router-view />
      </v-main>
      <v-bottom-navigation  fixed>
        <router-link to="/"> 
          <v-btn >
            <span>Home</span>
            <v-icon>mdi-history</v-icon>
          </v-btn>
        </router-link>
        <router-link to="/about">
          <v-btn >
          <span>About</span>
          <v-icon dark >mdi-trophy</v-icon>
          </v-btn>
        </router-link>
        <router-link v-if="$auth.isAuthenticated"  to="/profile">
          <v-btn >
            <span>Profile</span>
            <v-icon>mdi-history</v-icon>  
          </v-btn>
        </router-link>
      </v-bottom-navigation>
  </v-app>
</template>


<script>

export default {
  name: 'app',
  components: {
  },


  data () {
      return {
           months: ['Janvier', 'Fevrier', 'Mars', 'Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre', 'Novembre', 'Décembre'],
              years: ['2023','2022', '2021', '2020'],
          direction: 'bottom',
      fab: false,
      pickMonth:false,
      fling: false,
      hover: true,
      tabs: null,
      top: false,
      right: false,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
        drawer: false,
        tab: null,
        items: [
          'Calendrier', 'Competition','Parcours', 'Competiteurs',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
}

</script>