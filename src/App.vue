<template>
  <v-app>
    <v-main>
      <v-card>
        <div class="d-flex align-center">
          <v-tabs
              v-model="tab"
              background-color="primary"
          >
            <v-tab
                v-for="item in tabs"
                :key="item.key"
                :to="item.key"
                :value="item.key">
              {{item.title}}
            </v-tab>
          </v-tabs>
          <v-btn v-if="tabLastClose" class="ms-3" color="primary" size="small" @click="showCloseTab">Восстановить закрытую вкладку</v-btn>
        </div>
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item
                v-for="item in tabs"
                :key="item.key"
                :value="item.key">
              <component
                  :is="`${item.key[0].toUpperCase() + item.key.slice(1)}Page`"
                  :data="item"
                  @close="closeTab" />
            </v-window-item>
          </v-window>
        </v-card-text>
        <h3 v-if="!tabs.length" class="mb-3 mx-3">Все вкладки закрыты!</h3>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>

import OnePage from "@/views/OnePage";
import TwoPage from "@/views/TwoPage";
import ThreePage from "@/views/ThreePage";
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    tab: null,
    tabs: [
      {index: 1, key: 'one', title: 'Page One'},
      {index: 2, key: 'two', title: 'Page Two'},
      {index: 3, key: 'three', title: 'Page Three'}
    ]
  }),

  methods: {
    closeTab (tab) {
      this.tabs = this.tabs.filter(item => item.key !== tab.key)
      this.$store.commit('updateLastClose', tab)
      if(this.tabs.length) {
        this.tab = this.tabs[0].key
        this.$router.push(`/${this.tabs[0].key}`)
      }
    },
    showCloseTab () {
      this.tabs.push(this.tabLastClose)
      this.tabs.sort((a, b) => a.index - b.index)
      this.tab = this.tabLastClose.key
      this.$router.push(`/${this.tabLastClose.key}`)
      this.$store.commit('updateLastClose', null)
    }
  },

  computed: {
    ...mapGetters({
      tabLastClose: 'tabLastClose'
    })
  },

  components: {
    OnePage,
    TwoPage,
    ThreePage
  }
}
</script>
