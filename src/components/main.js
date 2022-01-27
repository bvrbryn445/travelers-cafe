import HomePage from '../modules/home.js';
import { createEl } from '../helpers';
const main = createEl('main', ['site__main', 'center']);
main.append(HomePage.initialize());
export default main;