<script lang="ts">
  import { getTime } from "$lib/time";
  import TimeSlot from "./timeSlot.svelte";

  const baseTime = new Date();

  const customTime = getTime(baseTime, 0);

  let selectedTime: Date | null = null;

  function setSelectedTime(event: CustomEvent<Date>) {
    selectedTime = event.detail;
  }
</script>

<!-- <p>Selected time: {selectedTime}</p> -->
<div class="grid-cols-7 grid">
  {#each { length: 7 } as dateHeader, headerIndex (headerIndex)}
    <p>{getTime(baseTime, headerIndex * 24).toDateString()}</p>
  {/each}
  {#each { length: 24 } as row, rowIndex (rowIndex)}
    {#each { length: 7 } as column, columnIndex (columnIndex)}
      <TimeSlot
        on:select={setSelectedTime}
        selected={selectedTime}
        date={getTime(baseTime, rowIndex + columnIndex * 24)}
      />
    {/each}
  {/each}
</div>
