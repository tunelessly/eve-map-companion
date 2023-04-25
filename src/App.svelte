<script lang="ts">
  import App from "./view/Canvas.svelte";
  console.log = import.meta.env.DEV ? console.log : () => {};
</script>

<App />
