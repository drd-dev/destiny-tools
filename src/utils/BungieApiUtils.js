import Config from '../config.json';
import axios from 'axios'


const data = {
  baseURI:  'https://www.bungie.net/Platform',
  headers: {
    headers: {
      'X-API-Key': Config.destinyApi.apiKey,
      }
  },
}

//retrieves data asynconously from the bungie API
export async function getData(path){
    const response = await axios.get(path, data.headers);
    return await response;
}

export async function searchUsers(search){
  const path = data.baseURI + '/User/SearchUsers/?q=' + search
  const response = await getData(path);
  return response;
}

//gets a users membership ID from the Bungie API
export async function searchDestinyPlayers(user){
  const path = data.baseURI + '/Destiny2/SearchDestinyPlayer/-1/' + user;
  const response = await getData(path);
  return response;
}

export async function getProfile(membershipID, profileType){
  const path = data.baseURI + '/Destiny2/' + profileType +'/Profile/' +  membershipID + '/?components=200';
  const response = await getData(path);
  return response;

}

export async function getCharacter(memberID, characterID, profileType){
  const path = data.baseURI + '/Destiny2/'+ profileType +'/Profile/'+ memberID +'/Character/' +characterID +'/?components=200'
  const response =  await getData(path);
  return response;
}