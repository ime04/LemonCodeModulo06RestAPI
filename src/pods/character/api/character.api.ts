import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities } from './character.mock-data';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
