#!/usr/bin/env node

import flow from '../src/index.js';
import { task, game } from '../src/games/brain-progression.js';

flow(task, game);
