<script lang="ts">
  import { createEventDispatcher, type EventDispatcher } from "svelte";

  export let time: number = 0;
  export let task = "Nothing planned";
  export let selected: number | null = null;

  const dispatch: EventDispatcher<any> = createEventDispatcher();

  function selectTimeSlot() {
    dispatch("select", time);
  }
</script>

<button
  on:click={selectTimeSlot}
  class="block card card-hover w-1/4
  {time == selected ? 'variant-glass-primary' : 'variant-glass-secondary'}
  "
>
  <p class="card-header">{time}:00</p>
  <p class="card-footer">{task}</p>
</button>
