<script lang="ts">
  import { createEventDispatcher, type EventDispatcher } from "svelte";

  export let date: Date;
  export let selected: Date | null;

  export let task: string = "Nothing planned";

  const dispatch: EventDispatcher<any> = createEventDispatcher();

  function selectTimeSlot() {
    dispatch("select", date);
  }
</script>

<button
  on:click={selectTimeSlot}
  class="block card card-hover w-fit
{date == selected ? 'variant-glass-primary' : 'variant-glass-secondary'}
"
>
  <p class="card-header">{date.toLocaleTimeString()}</p>
  <p class="card-footer">{task}</p>
</button>
