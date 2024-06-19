<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <div class="row justify-between items-center">
        <div class="col">
          <q-toolbar>
            <q-toolbar-title class="q-my-md q-ml-md">
              Weather App
            </q-toolbar-title>
          </q-toolbar>
        </div>
        <div class="col">
          <q-btn color="positive" label="Tugas" class="float-right q-mr-md">
            <q-menu>
              <q-list>
                <router-link to="/tugas1" class="text-decoration-none">
                  <q-item clickable v-close-popup>
                    <q-item-section>Tugas 1</q-item-section>
                  </q-item>
                </router-link>
                <router-link to="/tugas2" class="text-decoration-none">
                  <q-item clickable v-close-popup>
                    <q-item-section>Tugas 2</q-item-section>
                  </q-item>
                </router-link>
                <router-link to="/tugas3" class="text-decoration-none">
                  <q-item clickable v-close-popup>
                    <q-item-section>Tugas 3</q-item-section>
                  </q-item>
                </router-link>
                <router-link to="/tugas4" class="text-decoration-none">
                  <q-item clickable v-close-popup>
                    <q-item-section>Tugas 4</q-item-section>
                  </q-item>
                </router-link>
                <router-link to="/tugas5" class="text-decoration-none">
                  <q-item clickable v-close-popup>
                    <q-item-section>Tugas 5</q-item-section>
                  </q-item>
                </router-link>
                <router-link to="/tugas6" class="text-decoration-none">
                  <q-item clickable v-close-popup>
                    <q-item-section>Tugas 6</q-item-section>
                  </q-item>
                </router-link>
                <router-link to="/tugas7" class="text-decoration-none">
                  <q-item clickable v-close-popup>
                    <q-item-section>Tugas 7 - FREE TUGAS</q-item-section>
                  </q-item>
                </router-link>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
</style>