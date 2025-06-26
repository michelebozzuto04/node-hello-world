import axios from "axios";
import chalk from "chalk";

console.log(chalk.bgCyan("Hello Boolean"));
console.log(chalk.underline("This is your current Env Variable:"), chalk.bgMagenta(process.env.ENV_VARIABLE));