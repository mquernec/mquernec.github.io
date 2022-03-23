
<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown"
  style="padding-right: 23px !important;">
    <v-timeline-item
      v-for="item in this.sortedEvents"
      :key="item.id"
      :title="item.type + ' ' + item.Categorie"
     :class="{textRight: item.Categorie == 'milestone'}"
      
    >

    
      <template v-slot:icon>
        <v-icon dark v-if="item.type == 'coupes de France'">mdi-trophy</v-icon>
        <v-icon dark v-if="item.type == 'concours'"> mdi-seal </v-icon>
        <v-icon dark v-if="item.type == 'championnats nationaux'">mdi-podium</v-icon>
        <v-icon dark v-if="item.type == 'AG'"> mdi-tooltip-account </v-icon>
        <v-icon v-if="item.type == 'international'" dark> mdi-earth </v-icon>
      </template>

      <v-lazy transition="slide-x-transition">
        <h1 ref="today" v-if="item.Categorie == 'milestone'">{{ item.type }} </h1>
        <v-card dark   elevation="8"  shaped  v-if="item.Categorie != 'milestone'">
          <v-card-title
            class="lighten-2"
            :class="{
              purple: item.type == 'championnats nationaux',
              amber: item.type == 'coupes de France',
              cyan: item.type == 'concours',
              teal: item.type == 'AG',
              orange: item.type == 'international',
            }"
          >

          <v-col cols="2">
            <v-icon dark v-if="item.peche == 'Anglaise'" size="42" class="mr-4"> mdi-spin mdi-cog-clockwise</v-icon>
            <v-icon dark v-if="item.peche == 'Coup classique'" size="42" class="mr-4">mdi-hook</v-icon>
            <v-icon dark v-if="item.peche == 'Feeder'" size="42" class="mr-4">mdi-office-building</v-icon>   
            <v-icon dark v-if="item.peche == 'Carpe au coup'" size="42" class="mr-4">mdi-fish</v-icon> 
            <v-icon dark v-if="item.peche == 'Truite aux appâts naturels'" size="42" class="mr-4">mdi-butterfly</v-icon> 
            <v-icon dark v-if="item.type == 'AG'" size="42" class="mr-4"> mdi-tooltip-account </v-icon>
           </v-col >
            <v-col cols="10"> 
             {{ item.startDate }}
             <br>
             {{ item.type }} - {{ item.Categorie }}  
               </v-col >
          
          </v-card-title>
       <v-card-text v-if="item.Categorie != 'milestone'"
         class="lighten-2"
            :class="{
              purple: item.type == 'championnats nationaux',
              amber: item.type == 'coupes de France',
              cyan: item.type == 'concours',
              teal: item.type == 'AG',
              orange: item.type == 'international',
            }">
           {{item.peche}}
           <br/>
            {{ item.type }} {{ item.Categorie }} 
          <br/>
          {{ item.subtitle }}
           <!--  <p>
              Categorie:{{ item.Categorie }} type:{{ item.type }} peche:{{
                item.peche
              }}
              subtitle:{{ item.subtitle }} startDate:{{
                item.startDate
              }}
              endDate:{{ item.endDate }} departement:{{
                item.departement
              }}
              lieux:{{ item.lieux }} pays:{{ item.pays }} info_comp:{{
                item.info_comp
              }}
            </p>
            <v-btn class="mx-0" outlined> Subscribe </v-btn>-->
          </v-card-text>
          <v-card-actions
          v-if="item.Categorie != 'milestone'"
            class="lighten-2"
            :class="{
              purple: item.type == 'championnats nationaux',
              amber: item.type == 'coupes de France',
              cyan: item.type == 'concours',
              teal: item.type == 'AG',
              orange: item.type == 'international',
            }"
          >
            <v-btn text @click="reserve"> Inscriptions </v-btn>
            <v-btn text @click="reserve"> Resultats </v-btn>
          </v-card-actions>
        </v-card>
      </v-lazy>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "myAgenda",
   method: {mounted() {
  this.$nextTick(() => this.$refs.today.$el.focus())
    console.log(this.$el.textContent) // I'm text inside the component.

  }},
  computed: {
    sortedEvents() {
      return this.events
        .filter(() => {
          return true;
        })
        .sort(compare);
    },
    ...mapState({
      events: "events",
    }),
  },
};
function compare(a, b) {
  if (normalizeDate(a.startDate) < normalizeDate(b.startDate)) {
    return -1;
  }
  if (normalizeDate(a.startDate) > normalizeDate(b.startDate)) {
    return 1;
  }
  if (normalizeDate(a.endDate) < normalizeDate(b.endDate)) {
    return -1;
  }
  if (normalizeDate(a.endDate) > normalizeDate(b.endDate)) {
    return 1;
  }
  return 0;
}

function normalizeDate(aDate) {
  var parts = aDate.split("/");
  var res = parts[2] + "-" + parts[1] + "-" + parts[0];
  return res;
}
</script>