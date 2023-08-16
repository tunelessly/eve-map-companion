<script lang="ts">
    import Search from "./components/Search.svelte";
    import Select from "./components/Select.svelte";
    import SVGBig from "./view/SVG/SVGBig.svelte";
    import SVGMini from "./view/SVG/SVGmini.svelte";
</script>


<div id="layout">
    <div id = "sidebar">
        <div id = "menu">
            <h1> EvE Map Companion</h1>
            <Select />
            <Search />
        </div>
        <SVGMini />
    </div>

    <SVGBig />
</div>


<style>
    #layout {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }

    #sidebar {
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
        justify-content: space-between;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 6px -1px, rgba(255, 255, 255, 0.06) 0px 0px 4px -1px;
    }

    #menu {
        padding: 0.5rem 0 0 0;
        height: fit-content;
        flex-direction: column;
        width: 100%;
        display: flex;
        box-sizing: border-box;
        align-items: baseline;
    }

    h1 {
      font-family: 'Helvetica';
      text-shadow: 1px 1px 2px lightgoldenrodyellow;
    }

    @media only screen and (max-width: 600px) {
        #layout {
        flex-direction: column;
        }

        #sidebar {
            flex-direction: column;
            width: 100%;
            height: 5%;
            padding: 0.2rem;
        }

        #menu {
            flex-direction: row;
            height: 100%;
            padding: 0.5rem 0 0.5rem 0;
            
        }
    }
</style>

