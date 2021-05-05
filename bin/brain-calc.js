#!/usr/bin/env node

import flow from '../src/index.js';
import { task, game } from '../src/games/brain-calc.js';

flow(task, game);
