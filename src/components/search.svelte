<script lang="ts">
    import { systemSearchPubSub } from "../utils/svelte-store";
    let input: HTMLElement;
    let button: HTMLElement;
    let systemName: string = "";

    const onChange = (name: string) => {
        systemSearchPubSub.set(name);
    };
</script>

<div>
    <input
        type="text"
        bind:this={input}
        bind:value={systemName}
        placeholder="Find system"
        on:change={() => onChange(systemName)}
    />
    <button
        type="submit"
        bind:this={button}
        on:click={() => onChange(systemName)}>Search</button
    >
</div>

<style>
    div {
        text-align: center;
    }
</style>
