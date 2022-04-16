<template>
  <div id="" class="calendar mt-4">
    <calendar-view
      :items="homeworks"
      :show-date="showDate"
      :enable-drag-drop="true"
      :disable-past="false"
      :disable-future="false"
      :show-event-times="true"
      :display-period-count="1"
      :starting-day-of-week="1"
      display-period-uom="month"
      @click-date="onClickDate"
      @click-item="onClickItem"
      class="h-96"
    >
      <template #header="{ headerProps }">
        <calendar-view-header
          :header-props="headerProps"
          @input="setShowDate"
        />
      </template>
    </calendar-view>
  </div>
</template>

<script setup lang="ts">
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar";
import { onBeforeMount, ref } from "vue";
import { getAllHomeworks } from "../utilities/homeworkRequest";

import "../../node_modules/vue-simple-calendar/dist/style.css";
import "../../node_modules/vue-simple-calendar/static/css/default.css";
import "../../node_modules/vue-simple-calendar/static/css/holidays-us.css";

const showDate = ref();

const homeworks = ref([]);

const setShowDate = (d) => {
  showDate.value = d;
};

const onClickDate = (...params) => {
  console.log(params);
};

const onClickItem = (...params) => {
  console.log(params);
};

onBeforeMount(async () => {
  let getHomeworks = await getAllHomeworks();
  let homeworksTemp = { startDate: new Date(), title: "" };
  for (const homework of getHomeworks) {
    homeworksTemp.startDate = homework.date_rendu;
    homeworksTemp.title = homework.matiere;
    homeworks.value.push(homeworksTemp);
  }
});
</script>

<style>
.calendar {
  display: flex;
  flex-direction: row;
  font-family: Calibri, sans-serif;
  color: white;
  height: 90vh;
  background-color: black;
  opacity: 80%;
  margin-left: 50px;
  margin-right: 50px; 
}

.cv-day.today {
  background-color: green;
}
</style>
