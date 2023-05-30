<script lang="ts">
    import { systemSearchPubSub } from "../utils/svelte-store";
    let input: HTMLInputElement;
    let button: HTMLButtonElement;
    let systemName: string = "";

    const onChange = (name: string) => {
        systemSearchPubSub.set(name);
        input.value = "";
    };

    window.addEventListener("keydown", function (e) {
        //TODO: this only works on windows
        if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
            e.preventDefault();
            input.focus();
        }
    });
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
