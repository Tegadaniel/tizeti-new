import React, { useState } from "react";
import closeIcon from "../../../assets/images/closeIcon.svg";
import Text from "../../../components/Typography/Typography";
import Input from "../../../components/Ui/Input";
import Grid from "@mui/material/Grid";
import * as api from "../api/users";
import { Form, Formik, Field } from "formik";
import Button from "../../../components/Ui/Button";
import Dropdown from "../../../components/Dropdown";
import { useMutation } from "@tanstack/react-query";

function EditUser({ handleCloseModal, item }) {
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
      value: "Completed",
      label: "Completed",
    },
  ]);
  const [assignTeam] = useState([
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
    {
      value: "Team D",
      label: "Team D",
    },
  ]);

  const [fields, setFields] = useState({ ...item });

  const { isLoading, mutate } = useMutation(api.editUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      handleCloseModal(enableEditModal(false));
      return toast.success("Success", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
      });
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
    mutate(fields);
  };

  return (
    <>
      <div className="flex justify-between items-center pl-[28px] pt-[17px]">
        <Text>Edit Installation</Text>
        <img
          className="cursor-pointer mr-4"
          onClick={() => handleCloseModal("enableEditModal")}
          src={closeIcon}
          alt="close"
        />
      </div>
      <hr className="my-4 border-[#E0E0E0]" />
      <div className="pl-[28px] pt-[22px]">
        <Formik>
          {({
            values,
            touched,
            errors,

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
                  <Text variant="small">Address</Text>
                  <Field
                    type="address"
                    name="address"
                    disabled={item.status === "Completed"}
                    value={fields.address}
                    onChange={handleChange}
                    className={`w-full h-10 ${
                      item.status === "Completed"
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } p-2 rounded border-solid border `}
                  />
                  {/* {errors.address && touched.address ? (
                     <Text variant="small" weight="normal" color="text-red-700">
                       {errors.address}
                     </Text>
                   ) : null} */}
                </Grid>

                <Grid item xs={12}>
                  <Text variant="small">Installation status</Text>
                  <Field
                    as="select"
                    type="status"
                    name="status"
                    className={`w-full h-10 p-2 cursor-pointer rounded border-solid border ${
                      item.status === "Completed" ? "hidden" : ""
                    } `}
                  >
                    <option value={fields.status} onChange={handleChange}>
                      Select Status
                    </option>
                    {installStatus.map((item, key) => {
                      return (
                        <option key={key + 1} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                  </Field>
                  {/* {errors.status && touched.status ? (
                     <Text variant="small" weight="normal" color="text-red-700">
                       {errors.status}
                     </Text>
                   ) : null} */}

                  {/* <Field
                    as="select"
                    type="status"
                    name="status"
                    // disabled
                    className="w-full h-10 p-2 cursor-not-allowed rounded border-solid border"
                  >
                    <option value={fields.status}>{fields.status}</option>
                  </Field> */}
                  {/* {errors.completed && touched.completed ? (
                     <Text variant="small" weight="normal" color="text-red-700">
                       {errors.completed}
                     </Text>
                   ) : null} */}
                </Grid>

                <Grid item xs={12}>
                  <Text variant="small">Assign to team</Text>

                  <Field
                    as="select"
                    type="status"
                    name="status"
                    className="w-full h-10"
                  >
                    <option value="" onChange={handleChange}>
                      Select a team
                    </option>
                    {assignTeam.map((item, key) => {
                      return (
                        <option key={key + 1} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                  </Field>
                  {/* {errors.status && touched.status ? (
                     <Text variant="small" weight="normal" color="text-red-700">
                       {errors.status}
                     </Text>
                   ) : null} */}
                </Grid>

                <Grid item xs={12}>
                  <Text variant="small">Payment reference</Text>
                  <Field
                    type="reference"
                    name="payment_reference"
                    disabled
                    onChange={handleChange}
                    value={fields.payment_reference}
                    className="w-full h-10 cursor-not-allowed p-2 rounded border-solid border "
                  />
                  {/* {errors.address && touched.address ? (
                     <Text variant="small" weight="normal" color="text-red-700">
                       {errors.address}
                     </Text>
                   ) : null} */}
                </Grid>

                <Grid item xs={12}>
                  <Text variant="small">Installation Comment</Text>
                  <Field
                    name="installation_comment"
                    type="text"
                    value={fields.installation_comment}
                    onChange={handleChange}
                    className="w-full h-10 cursor-not-allowed p-2 rounded border-solid border "
                  />
                  {/* {errors.address && touched.address ? (
                     <Text variant="small" weight="normal" color="text-red-700">
                       {errors.address}
                     </Text>
                   ) : null} */}
                </Grid>

                <Grid container justifyContent="flex-end">
                  <div className="flex gap-3 mt-5 items-center">
                    <Button className="mb-10" fullWidth>
                      {isLoading ? "Updating..." : "Update"}
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default EditUser;
