import * as mod from "https://deno.land/std@0.100.0/fmt/colors.ts";

const color =  Deno.args[0] || "black"; 
const texto =  Deno.args[1] || "Falta ingresar texto como segúndo parámetro";

switch (color.toLowerCase()) {
    case "black":
        console.log(mod.black(texto));
        break;
    case "blue":
        console.log(mod.blue(texto));
        break;
    case "cyan":
        console.log(mod.cyan(texto));
        break;
    case "gray":
        console.log(mod.gray(texto));
        break;
    case "green":
        console.log(mod.green(texto));
        break;
    case "magenta":
        console.log(mod.magenta(texto));
        break;
    case 'red':
        console.log(mod.red(texto));
        break;
    case "yellow":
        console.log(mod.yellow(texto));
        break;
    case "white":
        console.log(mod.white(texto));
        break;

    default:
        console.log(`${mod.bgWhite(mod.red("Ingresar como primer parámetro un color válido:"))}
    ${mod.black("black")}
    ${mod.blue("blue")}
    ${mod.cyan("cyan")}
    ${mod.gray("gray")}
    ${mod.green("green")}
    ${mod.magenta("magenta")}
    ${mod.red("red")}
    ${mod.yellow("yellow")}
    ${mod.white("white")}`);
        break;
}

