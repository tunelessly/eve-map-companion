<script lang="ts">
    import { systemNameSearchPubSub } from "../utils/svelte-store";
    let input: HTMLInputElement;
    let button: HTMLButtonElement;
    let systemName: string = "";

    const onChange = (name: string) => {
        systemNameSearchPubSub.set({ systemName: name });
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
        display: inline-flex;
        width: 100%;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0.5rem 0rem 0.5rem 0rem;
    }
    input {
        width: 65%;
    }

    @media only screen and (max-width: 600px) {
        div {
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
            width: 50%;
        }

    }

</style>
