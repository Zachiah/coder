<script lang="ts">
import TextField from "./lib/TextField.svelte";

type Filter = (n: number) => boolean;
  type Step = (c: string, i: number, decode: boolean) => string;

  const LETTERS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const prime: Filter = (n) => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  const perfectSquare: Filter = (n) => {
    const sqrt = Math.sqrt(n);
    return sqrt % 1 === 0;
  };

  const all: Filter = (n) => true;

  const add: (n: number | string) => Step = (a) => (c, i, decode) => {
    if (typeof a === "string") {
      a = LETTERS.indexOf(a.toLowerCase());
    }

    if (decode) {
      return LETTERS[(26 + LETTERS.indexOf(c.toLowerCase()) - a) % 26];
    } else {
      return LETTERS[(26 + a + LETTERS.indexOf(c.toLowerCase())) % 26];
    }
  };

  const password: (pass: string) => Step = (pass) => (c, i, decode) => {
    return add(pass[i % pass.length])(c,i,decode)
  }



  const action =
    (filter: Filter) => (step: Step) => (text: string) => (decode: boolean) => {
      return text
        .split("")
        .map((c, i) => {
          if (!LETTERS.includes(c.toLowerCase())) {
            return c;
          }

          if (filter(i)) {
            return step(c,i, decode);
          }
          return c;
        })
        .join("");
    };

  const STEPS: ((text: string) => (decode: boolean) => string)[] = [
    action(all)(add(1)),
    action(prime)(add(1)),
    action(all)(password("ahardpassword"))
  ];

  const decode = (text: string) => {
    return STEPS.reverse().reduce((t: string, step) => {
      return step(t)(true);
    }, text);
  };

  const encode = (text: string) => {
    return STEPS.reduce((t: string, step) => {
      return step(t)(false);
    }, text);
  };

  //@ts-ignore
  (window.encode = encode) && (window.decode = decode);

  console.log();

  let text = "";

  $: encodedText = encode(text);
</script>

<div class="h-screen flex items-center p-2">
  <div class="flex flex-col w-100 max-w-full m-auto gap-4">
    <h1 class="text-center text-xl font-bold bg-blue-200 rounded-md p-2">
      Coder!
    </h1>
    <TextField
      label="Text"
      value={text}
      on:input={(e) => {
        //@ts-ignore
        text = e.target.value;
      }}
    />

    <TextField
      label="Encoded Text"
      value={encodedText}
      on:input={(e) => {
        //@ts-ignore
        text = decode(e.target.value);
      }}
    />
  </div>
</div>
