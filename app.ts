import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import axios from 'axios';
import util from 'util';

const argv = await (yargs(hideBin(process.argv)).argv);

const { data } = await axios({
  method: 'post',
  url: 'https://api.openai.com/v1/edits',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  },
  data: {
    input: argv._.join(' '),
    instruction: 'restore spaces. Then spell-check and fix typos. Then grammar-check, correct casing, and punctuate.',
    temperature: 0,
    model: 'text-davinci-edit-001'
  }
})

console.log(util.format(data))
