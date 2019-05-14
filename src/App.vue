<template>
  <!-- vuetifyに合わせて記載(vuetifyのドキュメントのUIcomponentを見ながら記載) -->
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>学んだ事をシェアしよう</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- v-if="$store.state.login_user"ログインユーザーが存在する場合のみログアウトボタンんを表示 -->
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <SideNav/>
    <v-content>
      <!-- routeに合わせたコンポーネントが読まれる -->
      <router-view/>
    </v-content>
  </v-app>
</template>
<!-- // ローカル登録 -->
<script>
import firebase from 'firebase'
import SideNav from './components/SideNav'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    SideNav
  },
  created () {
    // 現在サイインしているかどうかを判定する
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // ユーザを格納するオブジェクトを記載
        this.setLoginUser(user)
        this.fetchAddresses()
        // 直接連絡先一覧などのアクセルを防ぐため現在ホームにいるのかどうかのチェックを入れる
        if (this.$router.currentRoute.name === 'home') this.$router.push({ name: 'addresses' })
      } else {
        this.deleteLoginUser()
        // ログアウトした場合にホーム画面に行けるようにする
        this.$router.push({ name: 'home' })
      }
    })
  },
  data () {
    return {
      //
    }
  },
   // mapActionsメソッドとは、スマートにアクションを呼ぶために記載 配列に入れるだけでメソッドとして適用できる
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser', 'fetchAddresses'])
  }
}
</script>
