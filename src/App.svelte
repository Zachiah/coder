<script lang="ts">
  import TextField from "./lib/components/TextField.svelte";
  import LETTERS from "./lib/data/letters";
  import type { Letter } from "./lib/data/letters";
  import all from "./lib/filters/all";
  import type { Filter } from "./lib/filters/Filter";
  import prime from "./lib/filters/prime";
  import add from "./lib/steps/add";
  import password from "./lib/steps/password";
  import type { Step } from "./lib/steps/Step";
  import action from "./lib/util/action";
  import { encode,decode } from "./lib/util/code";

 
  const THE_PASSWORD = `😋-p2J¤}l😂¢😑0g:=😪😋L¤a😂😔😖.😬~B3😋😮😔sal😔,+😮😔B😋p©:(_Gleg§/😥😊B§U😈😋😦\o😊😒g😣😆:z😊😱z😂😦?_😬😰B0😊9g[B😝😠😂§*😊😋😆Br😡?&!sm😑§G!😆_*UbB&😠0Y😋'😌 V😋!?}>😠43😥q<[`

  const STEPS = [
    action(all)(add(2)),
    action(prime)(add(1)),
    action(all)(password(THE_PASSWORD.split("") as Letter[])),
  ];

  //@ts-ignore
  window.encode = (text) => encode(text.split(),STEPS).join("")
  
  //@ts-ignore
  window.decode = (text) => decode(text.split(),STEPS).join("");

  console.log();

  let text = "";

  $: encodedText = encode(text.split("") as Letter[], STEPS).join("");

  
  $: text = text.split("").filter(c => LETTERS.includes(c as Letter)).join("");

  const handleEncodedInput = (e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    text = decode(value.split('').filter(c => LETTERS.includes(c as Letter)) as Letter[], STEPS).join("");
    (e.target as HTMLInputElement).value = encode(text.split("") as Letter[], STEPS).join("");
  };
</script>

<div class="h-screen flex items-center p-2">
  <div class="flex flex-col w-100 max-w-full m-auto gap-4">
    <h1 class="text-center text-xl font-bold bg-blue-200 rounded-md p-2">
      Coder!
    </h1>
    <TextField label="Text" bind:value={text} />

    <TextField
      label="Encoded Text"
      value={encodedText}
      on:input={handleEncodedInput}
    />
  </div>
</div>
