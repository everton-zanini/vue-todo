<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer">
      <v-img
        src="https://picsum.photos/1920/1080?random"
        gradient="to top right, rgba(55,236,186,.7), rgba(28,108,199,.7)"
        dark
        class="pt-5 text-center"
      >
        <!-- <v-avatar size="100">
          <img
            src="https://avatars.githubusercontent.com/u/107217906?s=400&u=678b879732323ca549a102dca3cc7bacc3d23059&v=4"
            alt="Zanini"
          />
        </v-avatar> -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Vue.js </v-list-item-title>
            <v-list-item-subtitle> Lista de tarefas </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#43a047"
      dark
      prominent
      height="185"
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(28,108,199,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <center>
        <v-app-bar-title
          class="mt-16"
        >
          <InputTarefa />
        </v-app-bar-title>
      </center>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from "./components/InputTarefa.vue";
export default {
  components: { InputTarefa },
  data: () => ({
    drawer: null,
    items: [
      { title: "Tarefas", icon: "mdi-view-dashboard", to: "/" },
      { title: "Sobre", icon: "mdi-help-box", to: "/sobre" },
    ],
  }),
};
</script>