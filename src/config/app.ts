import 'reflect-metadata'
import { ConfigBootlet } from '../bootlet/ConfigBootlet';
import { DbBootlet } from '../bootlet/DbBootlet';
import { ApiBootlet } from '../bootlet/ApiBootlet';
import { AppBootlet } from '../bootlet/AppBootlet';

export const bootlets = [
  ConfigBootlet,
  DbBootlet,
  ApiBootlet,
  AppBootlet
]
