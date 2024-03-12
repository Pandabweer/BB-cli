import { program } from "commander";
import { version, description } from '../package.json';

function errorColor(str: string) {
    // Add ANSI escape codes to display text in red.
    return `\x1b[31m${str}\x1b[0m`;
}

program
    .description(description)
    .version(version, '-v, --version', 'Output the current version of the program')
    .command('components [command]', 'Manage your component sets')
    .command('blocks [command]', 'Manage your blocks')
    .command('functions [command]', 'Manage your custom functions')
    .command('interactions [command]', 'Manage your interactions')
    .command('bundle [command]', 'Manage your vendor bundle')
    .helpCommand("help [command]", "Display help for command")
    .on('command:*', ([command]: string[]): void => {
      if (!['blocks', 'components', 'functions', 'interactions', 'bundle', 'help'].includes(command as string)) {
        console.log(errorColor(`\nInvalid command: ${command}\n`));
        program.outputHelp();
      }
    })
    .parse(process.argv);