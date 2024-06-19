<template>
  <div class="row justify-center q-mt-lg">
    <div class="col-6 text-center">
      <q-card class="my-card q-mt-lg">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Cuaca</div>
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <div class="row">
              <div class="col-10 q-pr-lg">
                <q-input filled v-model="lokasi" label="Lokasi" />
              </div>
              <div class="col-2">
                <q-btn label="Cari" type="submit" size="lg" color="primary" style="width: 100%;" />
              </div>
            </div>
          </q-form>

          <div v-if="weather">
            <q-card class="my-card q-mt-md" flat bordered>
              <q-card-section horizontal class="justify-center">
                <q-card-section class="q-pt-xs">
                  <div class="text-overline">{{ weather.weather[0].main }}</div>
                  <div class="text-h2 q-mt-sm q-mb-xs">{{ roundedTemp }} &deg;C</div>
                  <div class="text-caption text-grey">
                    {{ weather.weather[0].description }}
                  </div>
                </q-card-section>

                <q-card-section class="col-2 flex flex-center">
                  <q-img class="rounded-borders"
                    :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" />
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lokasi: '',
      weather: null
    }
  },
  methods: {
    async fetchWeather(lokasi) {
      const apiKey = "b7bfca7b27a3485144fea086c50d09dc";
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${lokasi}&appid=${apiKey}&units=metric`
        );
        const weather = await response.json();
          
        if (weather.cod === 200) {
          this.weather = weather;
        } else {
          this.weather = null;
        }
      } catch (error) {
        this.weather = null;
      }
    },
    onSubmit(event) {
      event.preventDefault();
      this.fetchWeather(this.lokasi);
    }
  },
  computed: {
    roundedTemp() {
      return this.weather ? Math.round(this.weather.main.temp) : null;
    }
  }
}
</script>