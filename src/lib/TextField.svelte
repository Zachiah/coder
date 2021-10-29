<script lang="ts">
  export let value: string;
  export let label: string;
</script>

<label class="p-2 bg-blue-200 block flex flex-col rounded-md">
  <p class="mb-2">{label}</p>

  <input
    {value}
    on:input
    class="p-2 bg-gray-200 rounded-md duration-200 outline-none focus:(bg-gray-300)"
  />
</label>
