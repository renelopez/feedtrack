import {schema} from 'normalizr';

export const candidateSchema=new schema.Entity('candidates');
export const candidateListSchema=new schema.Array(candidateSchema);