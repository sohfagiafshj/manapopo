<template>
<!-- 以下vuetifyのnavigation-drawerのサンプルコードを持ってきたもの -->
<!-- $store.state.drawerはストアからデータを使用する記載方法 -->
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img v-if="photoURL" :src="photoURL">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ userName }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>
       <!-- v-list-tileはvuerouterを拡張した機能もあるため:to='item.link'のみで大丈夫 -->
      <v-list-tile v-for="item in items" :key="item.title" :to='item.link'>
        <v-list-tile-action>
<!-- vuetifyに備わっているアイコンを活用(ここではitems icon: 'list',のアイコンを表示) -->
<!-- Material.ioのサイトで使用できるアイコンを記載する -->
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      items: [
        // サイドバーに追懐したいリンクを指定する
        { title: '連絡先一覧', icon: 'list', link: { name: 'addresses' } },
      { title: '投稿する', icon: 'list',link: { name: 'posts' } },
      { title: '投稿一覧', icon: 'list',link: { name: 'postsList' } },
      // { title: '休憩', icon: 'list',link: { name: 'break' } },

      ]
    }
  },
  // computedを使うことでGetterの値をローカルに反映できるようにする
  computed: {
    ...mapGetters(['userName', 'photoURL'])
  }
}
</script>
