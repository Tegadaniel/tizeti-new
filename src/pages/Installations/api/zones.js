import axios from '../../../lib/axios';

export const fetchZones = () =>
    axios.get('/zones').then((res) => res.data);

export const fetchSubZoneByZoneId = (zoneId) =>
    axios.get(`/subzone/${zoneId}`).then((res) => res.data);
  
export const deleteZone = (zoneId) =>
  axios.delete(`/zone/${zoneId}`).then((res) => res.data);

  export const createZone = (data) =>
    axios.post('/assetZone', data).then((res) => res.data);
