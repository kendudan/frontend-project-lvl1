#!/usr/bin/env node

import flow from '../src/index.js';
import { task, game } from '../src/games/brain-prime.js';

flow(task, game);
