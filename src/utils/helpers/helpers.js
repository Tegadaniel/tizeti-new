import moment from "moment";

export default {
  formatDate(created_at) {
    return moment(created_at).format("YYYY-MM-DD");
  },
};

export const salesLogHeader = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },

  { label: "Phone", key: "phoneNumber" },
  { label: "Address", key: "address" },
  { label: "Country", key: "country" },

  { label: "Status", key: "status" },
  { label: "Date Added", key: "created_at" },
];

export const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Payment REF", key: "payment_reference" },
  { label: "Status", key: "status" },
  { label: "Sub zone", key: "name" },
  { label: "Basestation", key: "baseStation" },
  { label: "Asset Zone", key: "zone" },
  { label: "State", key: "state" },
];

export const zoneHeaders = [
  { label: "Zone", key: "name" },
  { label: "Subzones", key: "sub_zones[0].name" },
  { label: "Date/Time", key: "created_at" },
  { label: "Daily Installation Slots", key: "no_of_installations" },
];
export const feedbackHeaders = [
  { label: "First Name", key: "installation.user.firstName" },
  { label: "Last Name", key: "installation.user.lastName" },
  { label: "Email", key: "installation.user.email" },
  { label: "Rating", key: "rating" },
  { label: "Experience", key: "experience" },
  { label: "Created At", key: "created_at" },
];

export const assetTeamHeaders = [
  { label: "MAC ID", key: "username" },
  { label: "Name", key: "Name" },
  { label: "Email", key: "Mail" },
  { label: "Phone", key: "Mobile" },
  { label: "Expiration Date", key: "Expiration_date" },
  { label: "Customer Number", key: "Customer_Number" },
  { label: "Status", key: "subscription_status" },
  { label: "Basestation", key: "basestation" },
  { label: "Zone", key: "zone" },
  { label: "State", key: "region" },
  { label: "Agent", key: "agent" },
];

export const assetTeamHeadersRestricted = [
  { label: "MAC ID", key: "username" },
  { label: "Name", key: "Name" },
  { label: "Email", key: "Mail" },
  { label: "Phone", key: "Mobile" },
  { label: "Expiration Date", key: "Expiration_date" },
  { label: "Customer Number", key: "Customer_Number" },
  { label: "Status", key: "subscription_status" },
  { label: "Basestation", key: "basestation" },
  { label: "Zone", key: "zone" },
  { label: "State", key: "region" },
  { label: "Agent", key: "agent" },
  { label: "Comment", key: "comment" },
  { label: "Comment Added At", key: "comment_addedat" },
  { label: "Comment Added By", key: "comment_addedby" },
  { label: "Details", key: "details" },
];

export const BizdevlogHeaders = [
  { label: "FirstName", key: "firstName" },
  { label: "LastName", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phoneNumber" },
  { label: "Address", key: "address" },
  { label: "Status", key: "status" },
  { label: "City", key: "city" },
  { label: "Date", key: "created_at" },
];

export const assetTeamHeaders2 = [
  { label: "MAC ID", key: "username" },
  { label: "Name", key: "name" },
  { label: "Email", key: "mail" },
  { label: "Phone", key: "address" },
  { label: "Session Date", key: "value" },
  { label: "Customer Number", key: "customer_ref" },
  { label: "Status", key: "subscription_status" },
  { label: "Basestation", key: "basestation" },
  { label: "Zone", key: "zone" },
  { label: "State", key: "region" },
  { label: "Agent", key: "agent" },
];

export const usageHistoryHeaders = [
  { label: "MAC ID", key: "username" },
  { label: "Session Date", key: "date" },
  { label: "Upload(GB)", key: "upload_gb" },
  { label: "Download(GB)", key: "download_gb" },
];

export const dedicatedCustomersHeaders = [
  { label: "MAC ID", key: "username" },
  { label: "Name", key: "name" },
  { label: "Phone", key: "mobile" },
  { label: "Email", key: "email" },
  { label: "Basestation", key: "basestation" },
  { label: "Activation Status", key: "activation_status" },
  { label: "Subscription Frequency", key: "subscription_freq" },
  { label: "Country", key: "country" },
  { label: "Amount", key: "price" },
  { label: "Customer No", key: "customer_number" },
];

export const bulkCustomerDetailsHeaders = [
  { label: "MAC ID", key: "username" },
  { label: "Name", key: "name" },
  { label: "Email", key: "mail" },
  { label: "Customer Reference", key: "customer_ref" },
  { label: "Basestation", key: "basestation" },
  { label: "Zone", key: "zone" },
  { label: "Agent", key: "agent" },
  { label: "Country", key: "country" },
  { label: "Region", key: "region" },
  { label: "Address", key: "address" },
  { label: "Subscription Status", key: "subscription_status" },
  { label: "Last Activation Time", key: "lastactivation_time" },
  { label: "Mobile Numnber", key: "phone" },
  { label: "Expiration Date", key: "expiration_date" },
];

export const retentionLogsMessageHeader = [
  { label: "MAC ID", key: "username" },
  { label: "Name", key: "name" },
  { label: "Customer Email", key: "customer_email" },
  { label: "Customer Phone", key: "phone" },
  { label: "Basestation", key: "basestation" },
  { label: "Message", key: "message" },
  { label: "Staff", key: "agent" },
  { label: "Time", key: "time" },
];

export const retentionLogsCommentHeader = [
  { label: "Customer Number", key: "customer_number" },
  { label: "MAC ID", key: "username" },
  { label: "Name", key: "name" },
  { label: "Customer Email", key: "mail" },
  { label: "Customer Phone", key: "phone" },
  { label: "Comment", key: "comment" },
  { label: "Details", key: "details" },
  { label: "Basestation", key: "basestation" },
  { label: "Staff", key: "agent" },
  { label: "Time", key: "time" },
];

export const referralHeaders = [
  { label: "Name", key: "name" },
  { label: "Phone Number", key: "phoneNumber" },
  { label: "Email ", key: "email" },
  { label: "Address", key: "address" },
  { label: "Customer Identification Number", key: "cin" },
  { label: "Status", key: "status" },
  { label: "Date/Time created", key: "created_at" },
  { label: "Customers Name", key: "user.firstName" },
  { label: "Closed By", key: "" },
];

export const callReportHeaders = [
  { label: "ID", key: "id" },
  { label: "Unique Call ID", key: "unique_call_id" },
  { label: "Customer CIN", key: "customer_cin" },
  { label: "Phone", key: "customer_phone" },
  { label: "Notes", key: "notes" },
  { label: "Staff Email", key: "staff_email" },
  { label: "Calling Ext", key: "calling_ext" },
  { label: "Status", key: "status" },
  { label: "Date/Time created", key: "created" },
  { label: "Date/Time updated", key: "updated" },
  { label: "Duration(s)", key: "duration_in_seconds" },
];

export const customerRevenueHeaders = [
  { label: "Debtor Number", key: "debtor_no" },
  { label: "Name", key: "name" },
  { label: "Mac ID", key: "macaddress" },
  { label: "Reference", key: "reference" },
  { label: "Counter", key: "counter" },
  { label: "Type Number", key: "type_no" },
  { label: "Transaction Date", key: "tran_date" },
  { label: "Account", key: "account" },
  { label: "Memo", key: "memo_" },
  { label: "Amount", key: "amount" },
  { label: "Zone", key: "zone" },
  { label: "Basestation", key: "basestation" },
];

export const mailBlastHeaders = [
  { label: "Name", key: "Name" },
  { label: "MAC ID", key: "username" },
  { label: "Email", key: "Mail" },
  { label: "Phone", key: "Mobile" },
  { label: "Customer Number", key: "Customer_Number" },
  { label: "Status", key: "subscription_status" },
  { label: "Expiration Date", key: "Expiration_date" },
  { label: "Created At", key: "created_at" },
];

export const clusteredInstallationHeaders = [
  { label: "Name", key: "customer_name" },
  { label: "Address", key: "address" },
  { label: "Status", key: "status" },
  { label: "Reference Point", key: "zone" },
  { label: "Zone", key: "zone_name" },
  { label: "Team", key: "team_name" },
  { label: "FSE Staff", key: "team" },
  { label: "Device Type", key: "deviceType" },
  { label: "Sales Agent", key: "salesAgent" },
];

export const installationCounterHeaders = [
  { label: "MAC ID", key: "username" },
  { label: "Customer Number", key: "Customer_Number" },
  { label: "Name", key: "Name" },
  { label: "Email", key: "Mail" },
  { label: "Phone", key: "Mobile" },
  { label: "Status", key: "subscription_status" },
  { label: "Zone", key: "zone" },
];

export const filename = (file) => {
  return `${file} ${moment(new Date()).format("DD-MMM-YYYY hh-mm A")}.csv`;
};
export const StatusData = [
  {
    name: "Awaiting Account Creation",
    value: "awaiting_account_creation",
  },
  {
    name: "Failed",
    value: "failed",
  },
  {
    name: "Not Completed",
    value: "not completed",
  },
  {
    name: "No LOS",
    value: "no_los",
  },
  {
    name: "On-Going",
    value: "on-going",
  },
  {
    name: "Queued",
    value: "queued",
  },
  {
    name: "Rescheduled",
    value: "rescheduled",
  },
  {
    name: "Completed",
    value: "completed",
  },
];

export const Status = [
  {
    name: "true",
    value: "true",
  },
];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
