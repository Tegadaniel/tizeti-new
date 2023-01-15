import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik, Field } from "formik";
import Grid from "@mui/material/Grid";
import Dropdown from "../../components/Dropdown";
import { installationHeaders } from "../../mocks/table-data";
import * as Api from "./api/users";
import Table from "../../components/Table";
import eye from "../../assets/images/eye.svg";
import edit from "../../assets/images/edit.svg";
import person from "../../assets/images/person.svg";
import truncateStr, { color } from "../../utils/function";
import Text from "../../components/Typography/Typography";
import ModalExpanded from "../../components/Modals/ModalExpanded";
import ModalPopUpSmall from "../../components/Modals/ModalPopUpSmall";
import ViewUser from "./components/ViewUser";
import CalenderDropdown from "../../components/CalenderDropdown";
import EditUser from "./components/EditUser";
import ActivateUser from "./components/ActivateUser";
import Input from "../../components/Ui/Input";

function Installations() {
  // const [users] = useState(installationData);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
  const [query, setQuery] = useState("");
  const [installStatus] = useState([
    {
      value: "Queued",
      label: "Queued",
    },
    {
      value: "Failed",
      label: "Failed",
    },
    {
      value: "No LOS",
      label: "No LOS",
    },
    {
      value: "In Progress",
      label: "In Progress",
    },
    {
      value: "Completed",
      label: "Completed",
    },
  ]);
  const [zones] = useState([
    {
      value: "Adenta",
      label: "Adenta",
    },
    {
      value: "Agungi",
      label: "Agungi",
    },
    {
      value: "Akoka",
      label: "Akoka",
    },
    {
      value: "Ashallaey botwe",
      label: "Ashallaey botwe",
    },
    {
      value: "Awolowo",
      label: "Awolowo",
    },
  ]);

  const [subZones] = useState([
    {
      value: "Agungi",
      label: "Agungi",
    },
    {
      value: "Cadogen",
      label: "Cadogen",
    },
    {
      value: "Cherubmall",
      label: "Cherubmall",
    },
    {
      value: "Igboefon",
      label: "Igboefon",
    },
    {
      value: "Jakande",
      label: "Jakande",
    },
  ]);

  const [teams] = useState([
    {
      value: "All",
      label: "All",
    },
    {
      value: "Team A",
      label: "Team A",
    },
    {
      value: "Team B",
      label: "Team B",
    },
    {
      value: "Team C",
      label: "Team C",
    },
  ]);

  const [userState, setUserState] = useState(null);
  const [enableDisableModalPopUp, setEnableDisableModalPopUp] = useState({
    enableEyeModal: false,
    enableEditModal: false,
    enableActivateModal: false,
  });

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: Api.fetchUsers,
  });

  const handleOpenModal = (type, item) => {
    setUserState(item);
    setEnableDisableModalPopUp((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleCloseModal = (type) => {
    setUserState(null);
    setEnableDisableModalPopUp((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  const SearchForm = () => {
    return (
      <Formik
        initialValues={{
          category: "",
          categoryId: "",
          status: "",
        }}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              sx={{
                width: 300,
              }}
            >
              <Grid item xs={12}>
                <Text variant="small">Custom date range</Text>
                <CalenderDropdown>Select Date</CalenderDropdown>
              </Grid>
              <Grid item xs={12}>
                <Text variant="small">Status</Text>
                <Field
                  as="select"
                  type="status"
                  name="status"
                  className="w-full h-10 p-2 rounded border-solid border "
                >
                  <option value="">Select Status</option>
                  {installStatus.map((item, key) => {
                    return (
                      <option key={key + 1} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Field>
                {errors.status && touched.status ? (
                  <Text variant="small" weight="normal" color="text-red-700">
                    {errors.status}
                  </Text>
                ) : null}
              </Grid>

              <Grid item xs={12}>
                <Text variant="small">Zones</Text>
                <Field
                  as="select"
                  type="zone"
                  name="zone"
                  className="w-full h-10 p-2 rounded border-solid border "
                >
                  <option value="">Select Zone</option>
                  {zones.map((item, key) => {
                    return (
                      <option key={key + 1} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Field>
                {errors.zone && touched.zone ? (
                  <Text variant="small" weight="normal" color="text-red-700">
                    {errors.zone}
                  </Text>
                ) : null}
              </Grid>

              <Grid item xs={12}>
                <Text variant="small">Sub-zones</Text>
                <Field
                  as="select"
                  type="Subzones"
                  name="Subzones"
                  className="w-full h-10 p-2 rounded border-solid border "
                >
                  <option value="">Select Sub-zones</option>
                  {subZones.map((item, key) => {
                    return (
                      <option key={key + 1} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Field>
                {errors.Subzones && touched.Subzones ? (
                  <Text variant="small" weight="normal" color="text-red-700">
                    {errors.Subzones}
                  </Text>
                ) : null}
              </Grid>

              <Grid item xs={12}>
                <Text variant="small">Teams</Text>
                <Field
                  as="select"
                  type="teams"
                  name="teams"
                  className="w-full h-10 p-2 rounded border-solid border "
                >
                  <option value="">Select Teams</option>
                  {teams.map((item, key) => {
                    return (
                      <option key={key + 1} value={item.value}>
                        {item.label}
                      </option>
                    );
                  })}
                </Field>
                {errors.teams && touched.teams ? (
                  <Text variant="small" weight="normal" color="text-red-700">
                    {errors.teams}
                  </Text>
                ) : null}
              </Grid>

              <Grid container justifyContent="flex-end">
                <div className="flex gap-3 mt-5">
                  <Dropdown
                    title="Clear"
                    size="medium"
                    className="p-4"
                    isDropdown={false}
                    style={{ backgroundColor: "#C4C4C4" }}
                  />

                  <Dropdown
                    title="Apply"
                    size="medium"
                    className="p-4"
                    isDropdown={false}
                    style={{ backgroundColor: "#30BFAB" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    );
  };

  const handlePaginationChange = (e, page) => {
    setPaginationNumber(page);
  };

  const rows = users
    .filter((item, _) => {
      if (query === "") {
        return item;
      }
      if (
        item.user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        item.user.email.toLowerCase().includes(query.toLowerCase()) ||
        item.user.lastName.toLowerCase().includes(query.toLowerCase())
      ) {
        return item;
      }
    })
    .map((item, _) => {
      return {
        name: (
          <p className="font-normal text-sm text-black-300">
            {item.user.firstName + " " + item.user.lastName}
          </p>
        ),
        email: (
          <p className="font-normal text-sm text-black-300">
            {item.user.email}
          </p>
        ),
        baseStation: (
          <p className="font-normal  text text-sm text-black-300">
            {item.nearest_basestation.toUpperCase()}
          </p>
        ),
        address: (
          <p className="font-normal text-sm text-black-300">
            {truncateStr(item.address, 30)}
          </p>
        ),
        status: (
          <div className="flex items-center text-center">
            <Text format={`${color(item.status)}`} variant="sub">
              {item.status.toUpperCase()}
            </Text>
          </div>
        ),
        actions: (
          <div className="flex gap-3">
            <div
              className="cursor-pointer"
              onClick={() => handleOpenModal("enableEyeModal", item)}
            >
              <input type="image" src={eye} alt="eye icon" />
            </div>
            <div onClick={() => handleOpenModal("enableEditModal", item)}>
              <input
                className={`${
                  item.status === "Completed"
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                type="image"
                src={edit}
                alt="edit icon"
                disabled={item.status === "Completed"}
              />
            </div>
            <div onClick={() => handleOpenModal("enableActivateModal", item)}>
              <input
                className={`${
                  item.status === "Completed"
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                type="image"
                src={person}
                alt="person icon"
                disabled={item.status === "Completed"}
              />
            </div>
          </div>
        ),
      };
    });
  const columns = installationHeaders;

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4>{users.length} Installations shown</h4>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="w-[104px]">
              <Input
                type="text"
                placeholder="Search"
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <Dropdown
                title="Filter"
                size="small"
                className="p-4"
                isDropdown={true}
                formElement={<SearchForm />}
                style={{ backgroundColor: "#30BFAB" }}
              />

              <Dropdown
                title="Download"
                size="small"
                className="p-2"
                isDropdown={false}
                style={{ backgroundColor: "#666666" }}
              />
            </div>
          </div>
        </div>
        <div className="">
          <Table
            columns={columns}
            data={rows}
            showChecked={false}
            filtering={true}
            className="w-full"
            page={paginationNumber}
            handlePaginationChange={handlePaginationChange}
            totalNumberOfPages={totalNumberOfPages}
          />
        </div>
      </div>

      <ModalExpanded
        open={enableDisableModalPopUp?.enableEyeModal}
        width="100%"
        height="100vh"
      >
        <ViewUser handleCloseModal={handleCloseModal} item={userState} />
      </ModalExpanded>
      <ModalPopUpSmall open={enableDisableModalPopUp?.enableEditModal}>
        <EditUser handleCloseModal={handleCloseModal} item={userState} />
      </ModalPopUpSmall>
      <ModalPopUpSmall open={enableDisableModalPopUp?.enableActivateModal}>
        <ActivateUser handleCloseModal={handleCloseModal} info={userState} />
      </ModalPopUpSmall>
    </>
  );
}

export default Installations;
