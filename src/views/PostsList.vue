<template>
  <v-layout>

    <v-flex   xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.pixabay.com/photo/2015/11/19/21/14/phone-1052023__480.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">今日学んだこと</h3>
           <div>


              <div v-for="(post, index) in posts" :key="index">
                {{ post }}
              </div>
              </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>





</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['posts'])
  }
}
</script>
