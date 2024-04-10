<template>
  <FullCalendar
    ref="calendarRef"
    class="demo-app-calendar"
    :options="calendarOptions"
  ></FullCalendar>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, nextTick, onMounted, ref, type Ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import events, { TODAY } from "@/core/data/events";
import NewEventModal from "@/components/modals/forms/NewEventModal.vue";
import { Modal } from "bootstrap";

export default defineComponent({
  name: "calendar-app-1",
  components: {
    FullCalendar,
  },
  setup() {
    const calendarRef: Ref<null | typeof FullCalendar> = ref(null);

    const newEvent = () => {
      const modal = new Modal(
        document.getElementById("kt_modal_add_event") as Element
      );
      modal.show();
    };

    onMounted(() => {
      nextTick(function () {
        window.dispatchEvent(new Event("resize"));
      });
    });

    const calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      initialDate: TODAY,
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,

      views: {
        dayGridMonth: { buttonText: "month" },
        timeGridWeek: { buttonText: "week" },
        timeGridDay: { buttonText: "day" },
      },

      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: events,
      dateClick: newEvent,
      eventClick: newEvent,
    };

    return {
      calendarOptions,
      newEvent,
      getAssetPath,
      calendarRef,
    };
  },
});
</script>

<style lang="scss">
.fc .fc-button {
  padding: 0.75rem 1.25rem;
  box-shadow: none !important;
  border: 0 !important;
  border-radius: 0.475rem;
  vertical-align: middle;
  font-weight: 500;
  text-transform: capitalize;
}
</style>
