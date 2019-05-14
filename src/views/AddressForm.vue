<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1>連絡先編集</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field v-model="address.name" label="名前"></v-text-field>
               <v-text-field v-model="address.tel" label="電話番号"></v-text-field>
               <v-text-field v-model="address.email" label="メールアドレス"></v-text-field>
               <v-text-field v-model="address.address" label="住所"></v-text-field>
               <!-- pushメソッドでページを遷移する。router名を指定して、ページを遷移させる -->
               <v-btn @click="$router.push({ name: 'addresses' })">キャンセル</v-btn>
               <v-btn color="info" @click="submit">保存</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created () {
    // ルートのパラメータにidが含まれているかをチェック
    if (!this.$route.params.address_id) return
    // ゲッターからidを取得
    const address = this.$store.getters.getAddressById(this.$route.params.address_id)
    if (address) {
      this.address = address
    } else {
      this.$router.push({ name: 'addresses' })
    }
  },
  data () {
    return {
      // 空のオブジェクトをセットしtempleのv-modelから格納する
      address: {}
    }
  },
  methods: {
    // フォームのsubmitボタンが押されたところでストアにデータが格納されるようにする。
    submit () {
      if (this.$route.params.address_id) {
        this.updateAddress({ id: this.$route.params.address_id, address: this.address })
      } else {

        this.addAddress(this.address)
      }
  // 連絡先一覧へのページ遷移
      this.$router.push({ name: 'addresses' })
      // フォームデータのリセット
      this.address = {}
    },
    ...mapActions(['addAddress', 'updateAddress'])
  }
}
</script>
