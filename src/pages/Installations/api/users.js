import axios from "../../../lib/axios";

export const fetchUsers = () =>
  axios.post(`/searchinstallation/1`).then((res) => res.data.rows);
// export const fetchSubZoneByZoneId = (zoneId) =>
//   axios.get(`/subzone/${zoneId}`).then((res) => res.data);
// export const deleteZone = (zoneId) =>
//   axios.delete(`/zone/${zoneId}`).then((res) => res.data);

export const editUser = ({ id, ...editedUser }) =>
  axios.patch(`/installation/${id}`, editedUser).then((res) => res.data);
