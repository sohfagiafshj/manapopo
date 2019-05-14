<template>
           <v-card-text>
             <v-form>
               <v-textarea v-model="post"  label="学んだ事" outline></v-textarea>

                 <v-btn class="primary" @click="submit" >投稿</v-btn>


               <v-btn class="accent">削除</v-btn>
             </v-form>
           </v-card-text>




</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      post: []
    }
  },
  methods: {
    submit () {
      this.addPost(this.post)
      this.$router.push({name:'postsList'})
      this.post = []
    },
    ...mapActions(['addPost'])
  }
}
</script>
