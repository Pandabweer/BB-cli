import { program } from 'commander'

import { errorColor } from './utils/cli-tools'
import { version, description } from '../package.json'

program
  .description(description)
  .version(
    version,
    '-v, --version',
    'Output the current version of the program'
  )
  .command('components [command]', 'Manage your component sets')
  .command('blocks [command]', 'Manage your blocks')
  .command('functions [command]', 'Manage your custom functions')
  .command('interactions [command]', 'Manage your interactions')
  .command('bundle [command]', 'Manage your vendor bundle')
  .helpCommand('help [command]', 'Display help for command')
  .on('command:*', ([command]: string[]): void => {
    if (
      ![
        'blocks',
        'components',
        'functions',
        'interactions',
        'bundle',
        'help'
      ].includes(command)
    ) {
      console.log(errorColor(`\nInvalid command: ${command}\n`))
      program.outputHelp()
    }
  })
  .parse(process.argv)
