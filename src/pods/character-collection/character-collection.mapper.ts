import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  image: `${process.env.BASE_PICTURES_URL}/${character.image}`,
  name: character.name,
  gender: character.gender,
  origin: character.origin.name,
  status: character.status,
});
